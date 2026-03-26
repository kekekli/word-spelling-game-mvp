// 原始单词数据库
const wordDatabaseRaw = [
    // Unit 3
    { "word": "TALK", "sentence": "We talk to friends." },
    { "word": "SONG", "sentence": "I sing a song." },
    { "word": "OR", "sentence": "An apple or a banana?" },
    { "word": "MUCH", "sentence": "Thank you very much." },
    { "word": "ERASER", "sentence": "I have a new eraser." },
    { "word": "FIND", "sentence": "I can find my pen." },
    { "word": "RULER", "sentence": "This is a long ruler." },
    { "word": "PEN", "sentence": "I write with a pen." },
    { "word": "PENCIL", "sentence": "The pencil is yellow." },
    { "word": "BOOK", "sentence": "I read a good book." },
    { "word": "BAG", "sentence": "My bag is heavy." },
    { "word": "PAPER", "sentence": "I draw on the paper." },
    { "word": "THESE", "sentence": "These are my pens." },
    { "word": "SEE", "sentence": "I see a bird." },
    { "word": "SMELL", "sentence": "I smell the flower." },
    { "word": "TASTE", "sentence": "I taste the sweet candy." },
    { "word": "HEAR", "sentence": "I hear a dog." },
    { "word": "TOUCH", "sentence": "Touch your nose." },
    { "word": "LEARN", "sentence": "We learn English." },
    { "word": "NOSE", "sentence": "This is my nose." },
    { "word": "TONGUE", "sentence": "Show me your tongue." },
    { "word": "CLASS", "sentence": "I like my class." },
    { "word": "COMPUTER", "sentence": "I play on the computer." },

    // Unit 4
    { "word": "BREAKFAST", "sentence": "I eat breakfast." },
    { "word": "TIME", "sentence": "What time is it?" },
    { "word": "BREAD", "sentence": "I like bread." },
    { "word": "EGG", "sentence": "I eat an egg." },
    { "word": "MILK", "sentence": "I drink milk." },
    { "word": "NOODLE", "sentence": "I love noodles." },
    { "word": "JUICE", "sentence": "I drink apple juice." },
    { "word": "RICE", "sentence": "I eat rice." },
    { "word": "MEAT", "sentence": "I like meat." },
    { "word": "VEGETABLE", "sentence": "I eat vegetables." },
    { "word": "HEALTHY", "sentence": "Apples are healthy." },
    { "word": "PLATE", "sentence": "Put it on the plate." },
    { "word": "SOUP", "sentence": "The soup is hot." },
    { "word": "FRUIT", "sentence": "I like red fruit." },
    { "word": "COLOURFUL", "sentence": "The bird is colourful." },
    { "word": "CANDY", "sentence": "I eat sweet candy." },
    { "word": "YUMMY", "sentence": "The cake is yummy." },

    // Unit 5
    { "word": "AT", "sentence": "Look at me." },
    { "word": "BOAT", "sentence": "I see a boat." },
    { "word": "COOL", "sentence": "This car is cool." },
    { "word": "KEEP", "sentence": "Keep your room clean." },
    { "word": "HOME", "sentence": "I go home." },
    { "word": "BALL", "sentence": "I play with a ball." },
    { "word": "DOLL", "sentence": "She has a doll." },
    { "word": "CAR", "sentence": "The car is fast." },
    { "word": "ON", "sentence": "The book is on the desk." },
    { "word": "SHELF", "sentence": "The book is on the shelf." },
    { "word": "IN", "sentence": "The pen is in the bag." }
];

const wordDatabase = wordDatabaseRaw.map(item => ({
    ...item,
    word: item.word.toLowerCase(),
    image: `assets/images/${item.word.toLowerCase()}.jpg`
}));


document.addEventListener('DOMContentLoaded', () => {
    // --- DOM 元素获取 ---
    const hintImage = document.getElementById('hint-image');
    const slotsContainer = document.getElementById('slots-container');
    const lettersContainer = document.getElementById('letters-container');
    const sentenceDisplay = document.getElementById('sentence-display');
    const starCounter = document.querySelector('.star-counter');
    const starCountDisplay = document.getElementById('star-count');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const successFeedback = document.getElementById('success-feedback');
    const errorFeedback = document.getElementById('error-feedback');
    const continueBtn = document.getElementById('continue-btn');
    const retryBtn = document.getElementById('retry-btn');
    const endScreen = document.getElementById('end-screen');
    const finalStarCount = document.getElementById('final-star-count');
    const restartBtn = document.getElementById('restart-btn');
    const resetBtn = document.getElementById('reset-btn');

    // --- 音效框架 ---
    const sounds = {
        click: new Audio('assets/click.MP3'),
        success: new Audio('assets/success.MP3'),
        error: new Audio('assets/error.MP3'),
        gold: new Audio('assets/gold.MP3')
    };

    function playSound(soundName) {
        const sound = sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log(`无法播放音效: ${e.message}`));
        }
    }
    
    // --- 游戏状态变量 ---
    let currentWordIndex = 0; // 这是指在 shuffledIndices 中的索引
    let shuffledIndices = []; // 存储打乱后的单词索引
    let starCount = 0;
    let isChecking = false;

    // --- 工具函数：打乱数组 ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- 进度管理 ---
    const STORAGE_KEY = 'wordSpellingGame_progress';

    function saveProgress() {
        const progress = {
            currentWordIndex,
            shuffledIndices,
            starCount
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }

    function loadProgress() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const data = JSON.parse(saved);
            // 验证保存的索引是否与当前数据库长度一致
            if (data.shuffledIndices && data.shuffledIndices.length === wordDatabase.length) {
                currentWordIndex = data.currentWordIndex;
                shuffledIndices = data.shuffledIndices;
                starCount = data.starCount || 0;
                return true;
            }
        }
        return false;
    }

    function initGame(forceNew = false) {
        if (forceNew || !loadProgress()) {
            // 生成新进度：打乱所有单词索引
            currentWordIndex = 0;
            starCount = 0;
            shuffledIndices = Array.from({ length: wordDatabase.length }, (_, i) => i);
            shuffleArray(shuffledIndices);
            saveProgress();
        }
        
        starCountDisplay.textContent = starCount;
        loadWord();
    }

    // --- 核心函数：加载单词 ---
    function loadWord() {
        isChecking = false;
        successFeedback.classList.remove('show');
        errorFeedback.classList.remove('show');
        slotsContainer.innerHTML = '';
        lettersContainer.innerHTML = '';
        sentenceDisplay.classList.remove('visible');
        hintImage.src = '';

        if (currentWordIndex >= wordDatabase.length) {
            showEndScreen();
            return;
        }

        // 获取当前打乱后的单词
        const actualIndex = shuffledIndices[currentWordIndex];
        const currentWordData = wordDatabase[actualIndex];
        const word = currentWordData.word;
        const letters = word.split('');
        
        hintImage.src = currentWordData.image;
        hintImage.onerror = () => { hintImage.style.visibility = 'hidden'; };
        hintImage.onload = () => { hintImage.style.visibility = 'visible'; };

        letters.forEach(() => {
            const slot = document.createElement('div');
            slot.className = 'slot';
            slotsContainer.appendChild(slot);
        });

        const shuffledLetters = shuffleArray([...letters]);
        shuffledLetters.forEach((letter, index) => {
            const letterBtn = document.createElement('button');
            letterBtn.className = 'letter-btn';
            letterBtn.textContent = letter;
            letterBtn.dataset.id = index;
            lettersContainer.appendChild(letterBtn);
        });
        
        const progress = (currentWordIndex / wordDatabase.length) * 100;
        progressBarFill.style.width = `${progress}%`;
    }

    // --- 交互逻辑 ---
    lettersContainer.addEventListener('click', (e) => {
        if (isChecking || !e.target.classList.contains('letter-btn') || e.target.classList.contains('hidden')) return;
        playSound('click');
        const letter = e.target.textContent;
        const firstEmptySlot = document.querySelector('.slot:not([data-letter])');
        if (firstEmptySlot) {
            firstEmptySlot.textContent = letter;
            firstEmptySlot.dataset.letter = letter;
            firstEmptySlot.dataset.sourceId = e.target.dataset.id;
            e.target.classList.add('hidden');
        }
        const allSlotsFilled = ![...document.querySelectorAll('.slot')].some(s => !s.dataset.letter);
        if (allSlotsFilled) checkWord();
    });

    slotsContainer.addEventListener('click', (e) => {
        if (isChecking || !e.target.classList.contains('slot') || !e.target.dataset.letter) return;
        playSound('click');
        const sourceId = e.target.dataset.sourceId;
        const letterButtonToShow = document.querySelector(`.letter-btn[data-id='${sourceId}']`);
        if (letterButtonToShow) letterButtonToShow.classList.remove('hidden');
        e.target.textContent = '';
        delete e.target.dataset.letter;
        delete e.target.dataset.sourceId;
    });

    function resetCurrentWord() {
        if (isChecking) return;
        playSound('click');
        const filledSlots = document.querySelectorAll('.slot[data-letter]');
        filledSlots.forEach(slot => {
            const sourceId = slot.dataset.sourceId;
            const letterButtonToShow = document.querySelector(`.letter-btn[data-id='${sourceId}']`);
            if (letterButtonToShow) letterButtonToShow.classList.remove('hidden');
            slot.textContent = '';
            delete slot.dataset.letter;
            delete slot.dataset.sourceId;
        });
    }

    // --- 核心：校验单词 ---
    function checkWord() {
        isChecking = true;
        const slots = document.querySelectorAll('.slot');
        let filledWord = '';
        slots.forEach(slot => { filledWord += slot.textContent; });
        
        const actualIndex = shuffledIndices[currentWordIndex];
        if (filledWord === wordDatabase[actualIndex].word) {
            handleSuccess(slots);
        } else {
            handleError(slots);
        }
    }

    // --- 结果处理 ---
    function handleSuccess(slots) {
        playSound('success');
        slots.forEach(slot => slot.classList.add('correct'));
        const actualIndex = shuffledIndices[currentWordIndex];
        sentenceDisplay.textContent = wordDatabase[actualIndex].sentence;
        sentenceDisplay.classList.add('visible');
        successFeedback.classList.add('show');
    }

    function handleError(slots) {
        playSound('error');
        slots.forEach(slot => slot.classList.add('incorrect'));
        errorFeedback.classList.add('show');
    }

    // --- 星星爆发动画 ---
    function playStarAnimation() {
        const starOrigin = slotsContainer.getBoundingClientRect();
        const starDestination = starCounter.getBoundingClientRect();

        for (let i = 0; i < 3; i++) {
            const star = document.createElement('img');
            star.src = 'https://img.icons8.com/ios-filled/48/FFC107/star--v1.png';
            star.className = 'star-particle';
            star.style.left = `${starOrigin.left + starOrigin.width / 2 - 12}px`;
            star.style.top = `${starOrigin.top + starOrigin.height / 2 - 12}px`;
            document.body.appendChild(star);

            setTimeout(() => {
                star.classList.add('animate');
                
                setTimeout(() => {
                    star.style.left = `${starDestination.left + starDestination.width / 2}px`;
                    star.style.top = `${starDestination.top + starDestination.height / 2}px`;
                    star.style.transform = 'scale(0)';
                    star.style.opacity = '0';
                }, 50);

            }, i * 100);

            star.addEventListener('transitionend', () => { star.remove(); });
        }
    }

    // --- 按钮事件绑定 ---
    continueBtn.addEventListener('click', () => {
        successFeedback.classList.remove('show');
        playSound('gold');
        playStarAnimation();
        
        setTimeout(() => {
            starCount++;
            starCountDisplay.textContent = starCount;
            currentWordIndex++;
            saveProgress(); // 每次进入下一题都保存进度
            loadWord();
        }, 1000);
    });

    retryBtn.addEventListener('click', () => {
        isChecking = false;
        errorFeedback.classList.remove('show');
        document.querySelectorAll('.slot').forEach(slot => {
            slot.classList.remove('incorrect');
        });
    });

    restartBtn.addEventListener('click', () => {
        endScreen.classList.remove('show');
        initGame(true); // 强制重新开始并洗牌
    });

    resetBtn.addEventListener('click', resetCurrentWord);
    
    // --- 结束与重置 ---
    function showEndScreen() {
        finalStarCount.textContent = starCount;
        progressBarFill.style.width = '100%';
        endScreen.classList.add('show');
    }

    // --- 游戏启动 ---
    initGame();
});
