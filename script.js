document.addEventListener('DOMContentLoaded', () => {
    // 1. VERİ HAVUZLARI
    const localImagePool = ["17.120.234", "29.100.113", "30.95.250", "32.100.11", "48.190.2", "49.30", "56.13", "56.135.1","64.210","71.23","71.60","71.75","71.123","1972.118.281","1978.493","1997.149.2","2000.51"]; 
    
    const weightedDirectors = [
        "Nuri Bilge Ceylan", "Stanley Kubrick", "Andrei Tarkovsky", 
        "Zeki Demirkubuz", "Fatih Akın", "Krzysztof Kieślowski", 
        "Ingmar Bergman", "Akira Kurosawa"
    ];

    // İSİM BAZLI FİLM LİSTESİ (İngilizce isimler tavsiye edilir)
    const weightedMovies = [
    "The Godfather",
    "Pulp Fiction",
    "The 400 Blows",
  "Oldboy"
];

    let questionIndex = 0;
    let currentLang = 'tr';
    let currentMovie = { title: '', poster: '', overview: '', director: '' };
    let userSelections = [];
    const themes = ['dark', 'light', 'retro', 'midnight'];
    let themeIndex = 0;

    const texts = {
        tr: {
            startBtn: "Film tavsiyesi al",
            questions: ["Ruh halini hangi atmosfer yansıtıyor?", "Hangi detay seni içine çekiyor?", "Hangi manzarada kaybolmak istersin?", "Sessizliği hangisi daha iyi anlatıyor?"],
            loading: "Seçimlerin analiz ediliyor...",
            share: "Hikaye Olarak Paylaş",
            home: "Ana Sayfa",
            storyRec: "ÖNERİLEN FİLM",
            storyMood: "RUH HALİNİ YANSITAN SEÇİMLER",
            themeTooltip: "temayı değiştir",
            langTooltip: "English"
        },
        en: {
            startBtn: "Get movie advice",
            questions: ["Which atmosphere reflects your mood?", "Which detail draws you in?", "Which landscape would you get lost in?", "Which one speaks silence better?"],
            loading: "Analyzing your choices...",
            share: "Share as Story",
            home: "Home",
            storyRec: "RECOMMENDED MOVIE",
            storyMood: "CHOICES REFLECTING YOUR MOOD",
            themeTooltip: "change theme",
            langTooltip: "Türkçe"
        }
    };

    function updateLanguageUI() {
        const t = texts[currentLang];
        document.getElementById('start-test-btn').textContent = t.startBtn;
        document.getElementById('text-share').textContent = t.share;
        document.getElementById('text-home').textContent = t.home;
        document.getElementById('story-label-rec').textContent = t.storyRec;
        document.getElementById('story-label-mood').textContent = t.storyMood;
        document.getElementById('tooltip-theme').textContent = t.themeTooltip;
        document.getElementById('tooltip-lang').textContent = t.langTooltip;
        if (document.getElementById('selection-screen').offsetParent !== null) {
            document.getElementById('selection-question').textContent = t.questions[questionIndex];
        }
    }

    function initializePage() {
        document.getElementById('start-screen').classList.remove('hidden');
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById('recommendation-screen').classList.add('hidden');
        setRandomHeroPoster();
        questionIndex = 0;
        userSelections = [];
        updateLanguageUI();
    }

    function setRandomHeroPoster() {
        const posterImg = document.getElementById('random-hero-poster');
        if (posterImg) {
            const rnd = Math.floor(Math.random() * 29) + 1;
            posterImg.src = `images2/f${rnd}.jpg`;
        }
    }

    document.getElementById('lang-toggle-btn').onclick = () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateLanguageUI();
    };

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
        userSelections.push(imgSrc);
        questionIndex++;
        if (questionIndex < 4) {
            updateSelectionScreen();
        } else {
            showRecommendation();
        }
    };

    function updateSelectionScreen() {
        document.getElementById('selection-question').textContent = texts[currentLang].questions[questionIndex];
        populateImageGrid();
    }

    async function showRecommendation() {
        const screen = document.getElementById('recommendation-screen');
        const content = document.getElementById('recommendation-content');
        const loader = document.getElementById('loading');
        
        document.getElementById('selection-screen').classList.add('hidden');
        screen.classList.remove('hidden');
        loader.classList.remove('hidden');
        content.innerHTML = '';

        try {
            let movieData;
            let directorLabel;
            
            // %50 Şansla İsimle Arama, %50 Şansla Yönetmenle Arama
            if (Math.random() > 0.5) {
                const movieTitle = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
                // DİKKAT: Backend'de 'title' parametresinin çalıştığından emin olmalısın
                const resp = await fetch(`/api/get-movie?title=${encodeURIComponent(movieTitle)}&lang=${currentLang}`);
                const data = await resp.json();
                // Arama sonuçları genellikle bir liste (results) döner
                movieData = data.results ? data.results[0] : data;
                directorLabel = "Özel Seçki";
            } else {
                const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
                const resp = await fetch(`/api/get-movie?director=${encodeURIComponent(director)}&lang=${currentLang}`);
                const data = await resp.json();
                const movies = data.crew.filter(m => m.job === 'Director' && m.poster_path);
                movieData = movies[Math.floor(Math.random() * movies.length)];
                directorLabel = `Yönetmen: ${director}`;
            }

            if (!movieData) throw new Error("Film bulunamadı");

            currentMovie = { 
                title: movieData.title, 
                poster: `https://image.tmdb.org/t/p/w780${movieData.poster_path}`,
                overview: movieData.overview || "",
                director: directorLabel
            };

            content.innerHTML = `
                <div class="recommendation-item">
                    <img src="${currentMovie.poster}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                    <h2 style="margin: 1.5rem 0 0.5rem 0;">${currentMovie.title}</h2>
                    <p style="color:var(--accent-color); font-weight:bold;">${directorLabel}</p>
                    <p style="max-width:600px; margin-top:1rem; opacity:0.8;">${currentMovie.overview.substring(0, 250)}...</p>
                </div>`;
        } catch (e) {
            console.error(e);
            content.innerHTML = "<p>Öneri yüklenemedi. Lütfen tekrar deneyin.</p>";
        } finally { 
            loader.classList.add('hidden'); 
        }
    }

    document.getElementById('share-story-btn').onclick = async () => {
        const storyContainer = document.getElementById('insta-story-container');
        const storyPoster = document.getElementById('story-movie-poster');
        document.getElementById('story-movie-title').textContent = currentMovie.title;
        document.getElementById('story-choices-grid').innerHTML = userSelections.map(src => `<img src="${src}">`).join('');

        const proxyUrl = "https://images.weserv.nl/?url=" + encodeURIComponent(currentMovie.poster);
        storyPoster.src = proxyUrl;

        await new Promise((resolve) => {
            if (storyPoster.complete) resolve();
            else storyPoster.onload = resolve;
        });

        await new Promise(r => setTimeout(r, 1200));

        html2canvas(storyContainer, { useCORS: true, scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `canvas-cinema-story.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    document.getElementById('main-page-button').onclick = () => initializePage();
    initializePage();
});