document.addEventListener('DOMContentLoaded', () => {
    // Sanat görseli havuzu
    const localImagePool = ["17.120.234", "29.100.113", "30.95.250", "32.100.11", "48.190.2", "49.30", "56.13", "56.135.1","64.210","71.23","71.60","71.75","71.123","1972.118.281","1978.493","1997.149.2","2000.51","61.101.1","1975.1.160","1993.400.2","29.100.64","13.66","1994.420","29.100.67","57.181","61.101.5","29.100.194","1975.1.180","39.182","54.143.2","1998.325.1","1975.1.209","1984.433.323","64.124","1975.1.194","2003.42.54","51.112.5","1975.1.163","1975.1.182","2009.400.110","2009.400.109","1975.1.164","1975.1.642","1975.1.644","1980.342","59.16.5","2002.62.3","1975.1.163","1974.356.32","61.190","1975.1.200","1975.1.202","1975.1.691","56.135.7","56.135.8","56.135.9","29.100.112","2003.42.40","1975.1.167","1999.442","22.181","1975.1.225","1986.296","2003.42.45","51.30.2","2023.487","1980.21.1","1992.103.3","1979.414","58.133","2004.359","1991.277.2","56.182","1979.135.16","60.174","1970.203","2003.42.49","21.70.4","24.45.1","38.64","1975.1.162","2009.400.27","2009.400.29","1974.3","2009.400.30","1979.404","2003.42.13","87.15.141","1984.75","25.110.17","17.120.212","14.40.817","17.120.225","11.45.4","14.40.811","30.95.272","32.100.136","14.40.813","2003.42.3","2003.42.2"]; 
    
    // Yönetmen havuzu (Boşluklar temizlendi)
    const weightedDirectors = [
        "Nuri Bilge Ceylan", "Nuri Bilge Ceylan", "Stanley Kubrick", 
        "Stanley Kubrick", "Andrei Tarkovsky", "Zeki Demirkubuz", "Zeki Demirkubuz" ,"Fatih Akın", "Fatih Akın","Krzysztof Kieślowski" ,
        "Ingmar Bergman", "Akira Kurosawa","Wim Wenders" , "Emir Kusturica"
    ];

    // Özel film ID havuzu
    const weightedMovies = ["670", "510","93","25237","238","240","242","110", "1018", "968", "11902"];

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
        document.getElementById('loading-text').textContent = texts[currentLang].loading;
        content.innerHTML = '';

        try {
            let movieData;
            const useWeightedMovie = Math.random() > 0.4; 

            if (useWeightedMovie) {
                const movieId = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
                const resp = await fetch(`/api/get-movie?id=${movieId}&lang=${currentLang}`);
                movieData = await resp.json();
                movieData.director_name = "Özel Seçki";
            } else {
                const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)].trim();
                const resp = await fetch(`/api/get-movie?director=${encodeURIComponent(director)}&lang=${currentLang}`);
                const data = await resp.json();
                const directorMovies = data.crew.filter(m => m.job === 'Director' && m.poster_path);
                if(directorMovies.length === 0) throw new Error("Film bulunamadı");
                movieData = directorMovies[Math.floor(Math.random() * directorMovies.length)];
                movieData.director_name = director;
            }
            
            if (!movieData || !movieData.title) throw new Error("Veri hatası");

            currentMovie = { 
                title: movieData.title, 
                poster: `https://image.tmdb.org/t/p/w780${movieData.poster_path}`,
                overview: movieData.overview || "",
                director: movieData.director_name
            };

            content.innerHTML = `
                <div class="recommendation-item">
                    <img src="${currentMovie.poster}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                    <h2 style="margin: 1.5rem 0 0.5rem 0;">${currentMovie.title}</h2>
                    <p style="color:var(--accent-color); font-weight:bold;">${currentMovie.director === "Özel Seçki" ? "Özel Seçki" : "Tavsiye Edilen"}</p>
                    <p style="max-width:600px; margin-top:1rem; opacity:0.8;">${currentMovie.overview.substring(0, 250)}...</p>
                </div>`;

        } catch (e) {
            console.error("Öneri Hatası:", e);
            content.innerHTML = "<p>Öneri yüklenemedi. Lütfen tekrar deneyin.</p>";
        } finally { 
            loader.classList.add('hidden'); 
        }
    }

    document.getElementById('share-story-btn').onclick = async () => {
        const storyContainer = document.getElementById('insta-story-container');
        const storyPoster = document.getElementById('story-movie-poster');
        
        // Verileri doldur
        document.getElementById('story-movie-title').textContent = currentMovie.title;
        document.getElementById('story-choices-grid').innerHTML = userSelections.map(src => `<img src="${src}">`).join('');
        
        // Tek ve güvenli proxy kullanımı
        const proxyUrl = "https://images.weserv.nl/?url=" + encodeURIComponent(currentMovie.poster);
        storyPoster.src = proxyUrl;

        // Resmin tam yüklendiğinden emin ol
        await new Promise((resolve) => {
            if (storyPoster.complete) resolve();
            else {
                storyPoster.onload = resolve;
                storyPoster.onerror = resolve; 
            }
        });

        // Render için kısa bekleme
        await new Promise(r => setTimeout(r, 600));

        html2canvas(storyContainer, { 
            useCORS: true, 
            scale: 2,
            allowTaint: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `canvas-cinema-story.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    document.getElementById('main-page-button').onclick = () => initializePage();
    initializePage();
});