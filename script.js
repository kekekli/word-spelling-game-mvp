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

// 动态生成包含图片路径的最终数据库
const wordDatabase = wordDatabaseRaw.map(item => ({
    ...item,
    image: `assets/images/${item.word.toLowerCase()}.jpg`
}));


document.addEventListener('DOMContentLoaded', () => {
    // --- DOM 元素获取 ---
    const hintImage = document.getElementById('hint-image');
    const slotsContainer = document.getElementById('slots-container');
    const lettersContainer = document.getElementById('letters-container');
    const sentenceDisplay = document.getElementById('sentence-display');
    const starCountDisplay = document.getElementById('star-count');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const successFeedback = document.getElementById('success-feedback');
    const errorFeedback = document.getElementById('error-feedback');
    const continueBtn = document.getElementById('continue-btn');
    const retryBtn = document.getElementById('retry-btn');
    const endScreen = document.getElementById('end-screen');
    const finalStarCount = document.getElementById('final-star-count');
    const restartBtn = document.getElementById('restart-btn');

    // --- 音效框架 ---
    const sounds = {
        click: new Audio('assets/click.mp3'),
        success: new Audio('assets-success.mp3'),
        error: new Audio('assets/error.mp3'),
        star: new Audio('assets/star.mp3')
    };

    function playSound(soundName) {
        const sound = sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log(`无法播放音效: ${e.message}`));
        }
    }
    
    // --- 游戏状态变量 ---
    let currentWordIndex = 0;
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

    // --- 核心函数：加载单词 ---
    function loadWord() {
        isChecking = false;
        successFeedback.classList.remove('show');
        errorFeedback.classList.remove('show');
        slotsContainer.innerHTML = '';
        lettersContainer.innerHTML = '';
        sentenceDisplay.classList.remove('visible');
        hintImage.src = ''; // 先清空图片

        if (currentWordIndex >= wordDatabase.length) {
            showEndScreen();
            return;
        }

        const currentWordData = wordDatabase[currentWordIndex];
        const word = currentWordData.word;
        const letters = word.split('');
        
        // 更新提示图片
        hintImage.src = currentWordData.image;
        hintImage.onerror = () => { hintImage.style.visibility = 'hidden'; }; // 如果图片加载失败则隐藏
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

    // --- 交互：点击待选字母 ---
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
        if (allSlotsFilled) {
            checkWord();
        }
    });

    // --- 交互：点击槽位撤回字母 ---
    slotsContainer.addEventListener('click', (e) => {
        if (isChecking || !e.target.classList.contains('slot') || !e.target.dataset.letter) return;
        
        playSound('click');
        const sourceId = e.target.dataset.sourceId;
        const letterButtonToShow = document.querySelector(`.letter-btn[data-id='${sourceId}']`);
        
        if (letterButtonToShow) {
            letterButtonToShow.classList.remove('hidden');
        }

        e.target.textContent = '';
        delete e.target.dataset.letter;
        delete e.target.dataset.sourceId;
    });

    // --- 核心：校验单词 ---
    function checkWord() {
        isChecking = true;
        const slots = document.querySelectorAll('.slot');
        let filledWord = '';
        slots.forEach(slot => {
            filledWord += slot.textContent;
        });
        
        const correctWord = wordDatabase[currentWordIndex].word;
        
        if (filledWord === correctWord) {
            handleSuccess(slots);
        } else {
            handleError(slots);
        }
    }

    // --- 结果处理 ---
    function handleSuccess(slots) {
        playSound('success');
        slots.forEach(slot => slot.classList.add('correct'));
        sentenceDisplay.textContent = wordDatabase[currentWordIndex].sentence;
        sentenceDisplay.classList.add('visible');
        successFeedback.classList.add('show');
    }

    function handleError(slots) {
        playSound('error');
        slots.forEach(slot => slot.classList.add('incorrect'));
        errorFeedback.classList.add('show');
    }

    // --- 按钮事件绑定 ---
    continueBtn.addEventListener('click', () => {
        playSound('star');
        starCount++;
        starCountDisplay.textContent = starCount;
        currentWordIndex++;
        loadWord();
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
        currentWordIndex = 0;
        starCount = 0;
        starCountDisplay.textContent = '0';
        loadWord();
    });
    
    // --- 结束与重置 ---
    function showEndScreen() {
        finalStarCount.textContent = starCount;
        progressBarFill.style.width = '100%';
        endScreen.classList.add('show');
    }

    // --- 游戏启动 ---
    loadWord();
});
