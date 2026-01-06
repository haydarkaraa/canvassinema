document.addEventListener('DOMContentLoaded', () => {
    const localImagePool = ["17.120.234", "29.100.113", "30.95.250", "32.100.11", "48.190.2", "49.30", "56.13", "56.135.1","64.210","71.23","71.60","71.75","71.123","1972.118.281","1978.493","1997.149.2","2000.51"];  
    
    // AĞIRLIKLI SEÇİM: Bu yönetmenlerin gelme olasılığı daha yüksektir (diziye tekrar ekleyerek)
    const weightedDirectors = [
        "Nuri Bilge Ceylan", "Nuri Bilge Ceylan", // 2x Ağırlık
        "Stanley Kubrick", "Stanley Kubrick", 
        "Andrei Tarkovsky", "Zeki Demirkubuz", "Ingmar Bergman", "Akira Kurosawa"
    ];

    let questionIndex = 0;
    let currentLang = 'tr';
    let currentMovie = { title: '', poster: '' };
    let userSelections = []; // Kullanıcının tıkladığı resimleri tutar

    const themes = ['dark', 'light', 'retro', 'midnight'];
    let themeIndex = 0;

    const texts = {
        tr: {
            questions: ["Ruh halini hangi atmosfer yansıtıyor?", "Hangi detay seni içine çekiyor?", "Hangi manzarada kaybolmak istersin?", "Sessizliği hangisi daha iyi anlatıyor?"],
            loading: "Seçimlerin analiz ediliyor..."
        },
        en: {
            questions: ["Which atmosphere reflects your mood?", "Which detail draws you in?", "Which landscape would you get lost in?", "Which one speaks silence better?"],
            loading: "Analyzing your choices..."
        }
    };

    function initializePage() {
        document.getElementById('start-screen').classList.remove('hidden');
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById('recommendation-screen').classList.add('hidden');
        setRandomHeroPoster();
        questionIndex = 0;
        userSelections = [];
    }

    function setRandomHeroPoster() {
        const posterImg = document.getElementById('random-hero-poster');
        if (posterImg) {
            const rnd = Math.floor(Math.random() * 22) + 1;
            posterImg.src = `images2/f${rnd}.jpg`;
        }
    }

    // TEMA DÖNGÜSÜ
    document.getElementById('theme-toggle-btn').onclick = () => {
        themeIndex = (themeIndex + 1) % themes.length;
        document.body.setAttribute('data-theme', themes[themeIndex]);
    };

    document.getElementById('start-test-btn').onclick = () => {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.remove('hidden');
        updateSelectionScreen();
    };

    async function populateImageGrid() {
        const grid = document.getElementById('image-selection-grid');
        grid.innerHTML = '<div class="spinner"></div>';
        const ids = [...localImagePool].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        grid.innerHTML = ids.map(id => `
            <div class="image-item" onclick="handleChoice('images/${id}.jpg')">
                <img src="images/${id}.jpg">
            </div>
        `).join('');
    }

    window.handleChoice = function(imgSrc) {
        userSelections.push(imgSrc); // Seçimi kaydet
        questionIndex++;
        if (questionIndex < 4) {
            updateSelectionScreen();
        } else {
            showRecommendation(false);
        }
    };

    function updateSelectionScreen() {
        document.getElementById('selection-question').textContent = texts[currentLang].questions[questionIndex];
        populateImageGrid();
    }

    async function showRecommendation(isRandomMode) {
        const screen = document.getElementById('recommendation-screen');
        const content = document.getElementById('recommendation-content');
        const loader = document.getElementById('loading');
        
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById('start-screen').classList.add('hidden');
        screen.classList.remove('hidden');
        loader.classList.remove('hidden');
        content.innerHTML = '';

        try {
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            const resp = await fetch(`/api/get-movie?director=${encodeURIComponent(director)}&lang=${currentLang}`);
            const data = await resp.json();
            const movie = data.crew.filter(m => m.job === 'Director' && m.poster_path)[0];
            
            currentMovie = { title: movie.title, poster: `https://image.tmdb.org/t/p/w780${movie.poster_path}` };

            content.innerHTML = `
                <div class="recommendation-item">
                    <img src="${currentMovie.poster}" style="width:280px; border-radius:12px;">
                    <h2>${currentMovie.title}</h2>
                    <p style="color:var(--accent-color)">Yönetmen: ${director}</p>
                    <p>${movie.overview.substring(0, 200)}...</p>
                </div>`;
        } catch (e) {
            content.innerHTML = "<p>Öneri yüklenemedi.</p>";
        } finally { loader.classList.add('hidden'); }
    }

    // INSTAGRAM STORY ÜRETİCİ
    document.getElementById('share-story-btn').onclick = async () => {
        const storyContainer = document.getElementById('insta-story-container');
        const choicesGrid = document.getElementById('story-choices-grid');
        
        // Film bilgilerini doldur
        document.getElementById('story-movie-title').textContent = currentMovie.title;
        document.getElementById('story-movie-poster').src = currentMovie.poster.replace('image.tmdb.org', 'corsproxy.io/?https://image.tmdb.org');

        // Kullanıcı seçimlerini (4 resim) doldur
        choicesGrid.innerHTML = userSelections.map(src => `<img src="${src}">`).join('');

        await new Promise(r => setTimeout(r, 500)); // Görsellerin renderlanması için kısa bekleme

        html2canvas(storyContainer, { useCORS: true, scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `canvas-cinema-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    document.getElementById('main-page-button').onclick = () => initializePage();
    initializePage();
});