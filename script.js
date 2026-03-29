// 核心数据库 (Unit 1 - Unit 6)
const wordDatabaseRaw = {
    "Unit 1": [
        { "word": "where", "sentence": "Where is my book?", "chinese": "在哪里" },
        { "word": "from", "sentence": "Where are you from?", "chinese": "来自" },
        { "word": "about", "sentence": "It is about ten o'clock.", "chinese": "大约" },
        { "word": "today", "sentence": "Today is a sunny day.", "chinese": "今天" },
        { "word": "teacher", "sentence": "This is my English teacher.", "chinese": "教师" },
        { "word": "student", "sentence": "I am a good student.", "chinese": "学生" },
        { "word": "after", "sentence": "I play after school.", "chinese": "在...之后" },
        { "word": "who", "sentence": "Who is that girl?", "chinese": "谁" },
        { "word": "girl", "sentence": "The girl is my friend.", "chinese": "女孩" },
        { "word": "neighbour", "sentence": "He is my new neighbour.", "chinese": "邻居" },
        { "word": "boy", "sentence": "The boy is playing ball.", "chinese": "男孩" },
        { "word": "woman", "sentence": "The woman is my mother.", "chinese": "女人" },
        { "word": "man", "sentence": "The man is my father.", "chinese": "男人" },
        { "word": "mr", "sentence": "This is Mr. Black.", "chinese": "先生" },
        { "word": "classmate", "sentence": "She is my classmate.", "chinese": "同学" },
        { "word": "he", "sentence": "He is very tall.", "chinese": "他" },
        { "word": "english", "sentence": "I like English class.", "chinese": "英语" },
        { "word": "she", "sentence": "She has a cat.", "chinese": "她" },
        { "word": "very", "sentence": "It is very cold today.", "chinese": "很/非常" },
        { "word": "uk", "sentence": "He is from the UK.", "chinese": "英国" },
        { "word": "china", "sentence": "I love China.", "chinese": "中国" },
        { "word": "canada", "sentence": "Canada is very big.", "chinese": "加拿大" }
    ],
    "Unit 2": [
        { "word": "has", "sentence": "She has long hair.", "chinese": "有" },
        { "word": "long", "sentence": "The ruler is long.", "chinese": "长的" },
        { "word": "body", "sentence": "This is my body.", "chinese": "身体" },
        { "word": "short", "sentence": "The pencil is short.", "chinese": "短的" },
        { "word": "leg", "sentence": "I have two legs.", "chinese": "腿" },
        { "word": "right", "sentence": "You are right.", "chinese": "正确" },
        { "word": "fat", "sentence": "The cat is fat.", "chinese": "胖的" },
        { "word": "thin", "sentence": "The dog is thin.", "chinese": "瘦的" },
        { "word": "slow", "sentence": "The turtle is slow.", "chinese": "慢的" },
        { "word": "love", "sentence": "I love my family.", "chinese": "爱" },
        { "word": "tail", "sentence": "The rabbit has a short tail.", "chinese": "尾巴" },
        { "word": "her", "sentence": "This is her bag.", "chinese": "她的" },
        { "word": "gift", "sentence": "This is a gift for you.", "chinese": "礼物" },
        { "word": "picture", "sentence": "Look at the picture.", "chinese": "图画" },
        { "word": "card", "sentence": "I have a birthday card.", "chinese": "卡片" },
        { "word": "sing", "sentence": "I can sing a song.", "chinese": "唱" },
        { "word": "dance", "sentence": "She can dance well.", "chinese": "跳舞" },
        { "word": "face", "sentence": "Wash your face.", "chinese": "脸" },
        { "word": "all", "sentence": "We are all friends.", "chinese": "全部" },
        { "word": "so", "sentence": "It is so big!", "chinese": "这么/那么" }
    ],
    "Unit 3": [
        { "word": "eraser", "sentence": "I have a new eraser.", "chinese": "橡皮" },
        { "word": "find", "sentence": "I can find my pen.", "chinese": "找到" },
        { "word": "ruler", "sentence": "This is a long ruler.", "chinese": "直尺" },
        { "word": "pen", "sentence": "I write with a pen.", "chinese": "钢笔" },
        { "word": "pencil", "sentence": "The pencil is yellow.", "chinese": "铅笔" },
        { "word": "book", "sentence": "I read a good book.", "chinese": "书" },
        { "word": "bag", "sentence": "My bag is heavy.", "chinese": "包" },
        { "word": "paper", "sentence": "I draw on the paper.", "chinese": "纸" },
        { "word": "these", "sentence": "These are my pens.", "chinese": "这些" },
        { "word": "see", "sentence": "I see a bird.", "chinese": "看见" },
        { "word": "smell", "sentence": "I smell the flower.", "chinese": "闻" },
        { "word": "taste", "sentence": "I taste the sweet candy.", "chinese": "尝" },
        { "word": "hear", "sentence": "I hear a dog.", "chinese": "听见" },
        { "word": "touch", "sentence": "Touch your nose.", "chinese": "触摸" },
        { "word": "learn", "sentence": "We learn English.", "chinese": "学习" },
        { "word": "nose", "sentence": "This is my nose.", "chinese": "鼻子" },
        { "word": "tongue", "sentence": "Show me your tongue.", "chinese": "舌头" },
        { "word": "class", "sentence": "I like my class.", "chinese": "课" },
        { "word": "computer", "sentence": "I play on the computer.", "chinese": "计算机" }
    ],
    "Unit 4": [
        { "word": "bread", "sentence": "I like bread.", "chinese": "面包" },
        { "word": "egg", "sentence": "I eat an egg.", "chinese": "鸡蛋" },
        { "word": "milk", "sentence": "I drink milk.", "chinese": "牛奶" },
        { "word": "noodle", "sentence": "I love noodles.", "chinese": "面条" },
        { "word": "juice", "sentence": "I drink apple juice.", "chinese": "果汁" },
        { "word": "rice", "sentence": "I eat rice.", "chinese": "大米" },
        { "word": "meat", "sentence": "I like meat.", "chinese": "肉" },
        { "word": "vegetable", "sentence": "I eat vegetables.", "chinese": "蔬菜" },
        { "word": "healthy", "sentence": "Apples are healthy.", "chinese": "健康的" },
        { "word": "plate", "sentence": "Put it on the plate.", "chinese": "盘子" },
        { "word": "soup", "sentence": "The soup is hot.", "chinese": "汤" },
        { "word": "fruit", "sentence": "I like red fruit.", "chinese": "水果" },
        { "word": "colourful", "sentence": "The bird is colourful.", "chinese": "五彩缤纷" },
        { "word": "candy", "sentence": "I eat sweet candy.", "chinese": "糖果" },
        { "word": "yummy", "sentence": "The cake is yummy.", "chinese": "好吃的" },
        { "word": "breakfast", "sentence": "I eat breakfast.", "chinese": "早餐" },
        { "word": "time", "sentence": "What time is it?", "chinese": "时间" }
    ],
    "Unit 5": [
        { "word": "box", "sentence": "Put it in the box.", "chinese": "盒子" },
        { "word": "cap", "sentence": "I have a blue cap.", "chinese": "帽子" },
        { "word": "map", "sentence": "Look at the map.", "chinese": "地图" },
        { "word": "under", "sentence": "The cat is under the table.", "chinese": "在...下面" },
        { "word": "still", "sentence": "It is still raining.", "chinese": "仍然" },
        { "word": "put", "sentence": "Put your book on the desk.", "chinese": "放" },
        { "word": "at", "sentence": "Look at me.", "chinese": "在" },
        { "word": "boat", "sentence": "I see a boat.", "chinese": "小船" },
        { "word": "cool", "sentence": "This car is cool.", "chinese": "酷的" },
        { "word": "keep", "sentence": "Keep your room clean.", "chinese": "保有" },
        { "word": "home", "sentence": "I go home.", "chinese": "家" },
        { "word": "ball", "sentence": "I play with a ball.", "chinese": "球" },
        { "word": "doll", "sentence": "She has a doll.", "chinese": "玩偶" },
        { "word": "car", "sentence": "The car is fast.", "chinese": "汽车" },
        { "word": "on", "sentence": "The book is on the desk.", "chinese": "在...上" },
        { "word": "shelf", "sentence": "The book is on the shelf.", "chinese": "架子" },
        { "word": "in", "sentence": "The pen is in the bag.", "chinese": "在...内" }
    ],
    "Unit 6": [
        { "word": "thirteen", "sentence": "I have thirteen books.", "chinese": "13" },
        { "word": "eleven", "sentence": "Eleven comes after ten.", "chinese": "11" },
        { "word": "twenty", "sentence": "Twenty is a big number.", "chinese": "20" },
        { "word": "seventeen", "sentence": "I am seventeen.", "chinese": "17" },
        { "word": "sixteen", "sentence": "Sixteen stars in the sky.", "chinese": "16" },
        { "word": "eighteen", "sentence": "Eighteen apples.", "chinese": "18" },
        { "word": "nineteen", "sentence": "Nineteen pencils.", "chinese": "19" },
        { "word": "pay", "sentence": "You need to pay for it.", "chinese": "付费" },
        { "word": "back", "sentence": "Please come back.", "chinese": "回到原处" },
        { "word": "fifteen", "sentence": "Fifteen flowers.", "chinese": "15" },
        { "word": "twelve", "sentence": "Twelve months a year.", "chinese": "12" },
        { "word": "fourteen", "sentence": "I have fourteen cards.", "chinese": "14" }
    ]
};

// 预处理数据库
const wordDatabase = {};
Object.keys(wordDatabaseRaw).forEach(unit => {
    wordDatabase[unit] = wordDatabaseRaw[unit].map(item => ({
        ...item,
        word: item.word.toLowerCase(),
        image: `assets/images/${item.word.toLowerCase().replace(/\s+/g, '')}.jpg`
    }));
});

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM 元素 ---
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');
    const unitGrid = document.getElementById('unit-grid');
    const notebookBtn = document.getElementById('notebook-btn');
    const mistakeCountDisplay = document.getElementById('mistake-count');
    const backToMenuBtn = document.getElementById('back-to-menu');
    const lampBtn = document.getElementById('lamp-btn');
    const chineseHintOverlay = document.getElementById('chinese-hint');
    
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
    const resetBtn = document.getElementById('reset-btn');

    // --- 音效 ---
    const sounds = {
        click: new Audio('assets/click.MP3'),
        success: new Audio('assets/success.MP3'),
        error: new Audio('assets/error.MP3'),
        gold: new Audio('assets/gold.MP3'),
        select: new Audio('assets/select.mp3')
    };

    function playSound(name) {
        const s = sounds[name];
        if (s) { s.currentTime = 0; s.play().catch(() => {}); }
    }

    // --- 游戏状态 ---
    let currentUnit = "";
    let currentWords = [];
    let currentWordIndex = 0;
    let shuffledIndices = [];
    let starCount = 0;
    let isChecking = false;
    let isNotebookMode = false;
    let hintIndex = -1; // 随机提示字母的索引

    // --- 存储管理 ---
    const PROGRESS_KEY = 'wordGame_unitProgress';
    const MISTAKES_KEY = 'wordGame_permanentMistakes';

    function getMistakes() { return JSON.parse(localStorage.getItem(MISTAKES_KEY)) || []; }
    function saveMistake(wordObj) {
        let mistakes = getMistakes();
        if (!mistakes.find(m => m.word === wordObj.word)) {
            mistakes.push(wordObj);
            localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
            updateMenuUI();
        }
    }
    function removeMistake(word) {
        let mistakes = getMistakes();
        mistakes = mistakes.filter(m => m.word !== word);
        localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
        updateMenuUI();
    }
    function saveUnitProgress() {
        if (isNotebookMode) return;
        let allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
        allProgress[currentUnit] = { currentWordIndex, shuffledIndices, starCount };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
    }
    function loadUnitProgress(unit) {
        let allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
        return allProgress[unit];
    }

    // --- 界面切换 ---
    function showScreen(screenId) {
        [menuScreen, gameScreen, endScreen].forEach(s => s.classList.remove('active', 'show'));
        if (screenId === 'menu') {
            menuScreen.classList.add('active');
            updateMenuUI();
        } else if (screenId === 'game') {
            gameScreen.classList.add('active');
        }
    }

    function updateMenuUI() {
        unitGrid.innerHTML = '';
        const allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
        Object.keys(wordDatabase).forEach(unit => {
            const card = document.createElement('div');
            card.className = 'unit-card';
            const progress = allProgress[unit] ? allProgress[unit].currentWordIndex : 0;
            const total = wordDatabase[unit].length;
            card.innerHTML = `<h3>${unit}</h3><div class="progress-text">${progress}/${total} 完成</div>`;
            card.onclick = () => startUnit(unit);
            unitGrid.appendChild(card);
        });
        const mistakes = getMistakes();
        mistakeCountDisplay.textContent = mistakes.length;
        notebookBtn.style.opacity = mistakes.length > 0 ? "1" : "0.5";
    }

    // --- 核心逻辑 ---
    function startUnit(unit) {
        playSound('select');
        currentUnit = unit;
        isNotebookMode = false;
        currentWords = wordDatabase[unit];
        const saved = loadUnitProgress(unit);
        if (saved && saved.shuffledIndices.length === currentWords.length) {
            currentWordIndex = saved.currentWordIndex;
            shuffledIndices = saved.shuffledIndices;
            starCount = saved.starCount;
        } else {
            currentWordIndex = 0;
            starCount = 0;
            shuffledIndices = Array.from({length: currentWords.length}, (_, i) => i);
            shuffleArray(shuffledIndices);
            saveUnitProgress();
        }
        showScreen('game');
        loadWord();
    }

    function startNotebook() {
        const mistakes = getMistakes();
        if (mistakes.length === 0) return;
        playSound('select');
        isNotebookMode = true;
        currentWords = mistakes;
        currentWordIndex = 0;
        starCount = 0;
        shuffledIndices = Array.from({length: currentWords.length}, (_, i) => i);
        shuffleArray(shuffledIndices);
        showScreen('game');
        loadWord();
    }

    function loadWord() {
        isChecking = false;
        successFeedback.classList.remove('show');
        errorFeedback.classList.remove('show');
        slotsContainer.innerHTML = '';
        lettersContainer.innerHTML = '';
        sentenceDisplay.classList.remove('visible');
        chineseHintOverlay.classList.remove('show');
        hintIndex = -1;

        if (currentWordIndex >= currentWords.length) {
            showEndScreen();
            return;
        }

        const wordObj = currentWords[shuffledIndices[currentWordIndex]];
        const word = wordObj.word;
        const letters = word.split('');

        hintImage.src = wordObj.image;
        hintImage.onerror = () => { hintImage.style.visibility = 'hidden'; };
        hintImage.onload = () => { hintImage.style.visibility = 'visible'; };

        // 随机提示逻辑：长度 >= 4 且非首位 (错题本模式不提示)
        if (!isNotebookMode && word.length >= 4) {
            hintIndex = Math.floor(Math.random() * (word.length - 1)) + 1;
        }

        letters.forEach((char, i) => {
            const slot = document.createElement('div');
            slot.className = 'slot';
            if (i === hintIndex) {
                slot.textContent = char;
                slot.dataset.letter = char;
                slot.classList.add('hint-slot');
                slot.dataset.isHint = "true";
            }
            slotsContainer.appendChild(slot);
        });

        // 生成字母池：扣除提示位字母
        let pool = [...letters];
        if (hintIndex !== -1) {
            pool.splice(hintIndex, 1);
        }
        shuffleArray(pool).forEach((l, i) => {
            const btn = document.createElement('button');
            btn.className = 'letter-btn';
            btn.textContent = l;
            btn.dataset.id = i;
            lettersContainer.appendChild(btn);
        });

        starCountDisplay.textContent = starCount;
        progressBarFill.style.width = `${(currentWordIndex / currentWords.length) * 100}%`;
    }

    function checkWord() {
        isChecking = true;
        const slots = document.querySelectorAll('.slot');
        let filled = "";
        slots.forEach(s => filled += s.textContent);
        const wordObj = currentWords[shuffledIndices[currentWordIndex]];
        if (filled === wordObj.word) {
            playSound('success');
            slots.forEach(s => s.classList.add('correct'));
            sentenceDisplay.textContent = wordObj.sentence;
            sentenceDisplay.classList.add('visible');
            successFeedback.classList.add('show');
            if (isNotebookMode) removeMistake(wordObj.word);
        } else {
            playSound('error');
            slots.forEach(s => s.classList.add('incorrect'));
            errorFeedback.classList.add('show');
            saveMistake(wordObj);
        }
    }

    // --- 交互事件 ---
    lampBtn.onclick = () => {
        const wordObj = currentWords[shuffledIndices[currentWordIndex]];
        chineseHintOverlay.textContent = wordObj.chinese;
        chineseHintOverlay.classList.add('show');
        setTimeout(() => { chineseHintOverlay.classList.remove('show'); }, 1000);
    };

    lettersContainer.onclick = (e) => {
        if (isChecking || !e.target.classList.contains('letter-btn') || e.target.classList.contains('hidden')) return;
        playSound('click');
        const slot = document.querySelector('.slot:not([data-letter])');
        if (slot) {
            slot.textContent = e.target.textContent;
            slot.dataset.letter = e.target.textContent;
            slot.dataset.sourceId = e.target.dataset.id;
            e.target.classList.add('hidden');
            if (!document.querySelector('.slot:not([data-letter])')) checkWord();
        }
    };

    slotsContainer.onclick = (e) => {
        if (isChecking || !e.target.classList.contains('slot') || !e.target.dataset.letter || e.target.dataset.isHint) return;
        playSound('click');
        const btn = document.querySelector(`.letter-btn[data-id='${e.target.dataset.sourceId}']`);
        if (btn) btn.classList.remove('hidden');
        e.target.textContent = '';
        delete e.target.dataset.letter;
    };

    continueBtn.onclick = () => {
        successFeedback.classList.remove('show');
        playSound('gold');
        playStarAnimation();
        setTimeout(() => {
            starCount++;
            currentWordIndex++;
            saveUnitProgress();
            loadWord();
        }, 800);
    };

    retryBtn.onclick = () => {
        isChecking = false;
        errorFeedback.classList.remove('show');
        document.querySelectorAll('.slot:not([data-is-hint])').forEach(s => {
            s.classList.remove('incorrect');
            const btn = document.querySelector(`.letter-btn[data-id='${s.dataset.sourceId}']`);
            if (btn) btn.classList.remove('hidden');
            s.textContent = '';
            delete s.dataset.letter;
        });
    };

    resetBtn.onclick = () => {
        if (isChecking) return;
        playSound('click');
        document.querySelectorAll('.slot[data-letter]:not([data-is-hint])').forEach(s => {
            const btn = document.querySelector(`.letter-btn[data-id='${s.dataset.sourceId}']`);
            if (btn) btn.classList.remove('hidden');
            s.textContent = '';
            delete s.dataset.letter;
        });
    };

    backToMenuBtn.onclick = () => { playSound('click'); showScreen('menu'); };
    restartBtn.onclick = () => showScreen('menu');
    notebookBtn.onclick = startNotebook;

    function playStarAnimation() {
        const origin = slotsContainer.getBoundingClientRect();
        const dest = document.querySelector('.star-counter').getBoundingClientRect();
        for (let i = 0; i < 3; i++) {
            const s = document.createElement('img');
            s.src = 'https://img.icons8.com/ios-filled/48/FFC107/star--v1.png';
            s.className = 'star-particle';
            s.style.left = `${origin.left + origin.width/2 - 12}px`;
            s.style.top = `${origin.top + origin.height/2 - 12}px`;
            document.body.appendChild(s);
            setTimeout(() => {
                s.classList.add('animate');
                setTimeout(() => {
                    s.style.left = `${dest.left + dest.width/2}px`;
                    s.style.top = `${dest.top + dest.height/2}px`;
                    s.style.transform = 'scale(0)';
                    s.style.opacity = '0';
                }, 50);
            }, i * 100);
            s.ontransitionend = () => s.remove();
        }
    }

    function showEndScreen() {
        finalStarCount.textContent = starCount;
        progressBarFill.style.width = '100%';
        document.getElementById('end-title').textContent = isNotebookMode ? "清空啦!" : "单元完成!";
        document.getElementById('end-message').textContent = isNotebookMode ? "你消灭了本次所有错题，太棒了！" : `你完成了 ${currentUnit}，收集了 ${starCount} 颗星星！`;
        endScreen.classList.add('show');
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    showScreen('menu');
});
