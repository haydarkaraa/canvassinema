document.addEventListener('DOMContentLoaded', () => {
    const localImagePool = ["17.120.234", "29.100.113", "30.95.250", "32.100.11", "48.190.2", "49.30", "56.13", "56.135.1","64.210","71.23","71.60","71.75","71.123","1972.118.281","1978.493","1997.149.2","2000.51"]; 
    
    const weightedDirectors = [
        "Nuri Bilge Ceylan", "Nuri Bilge Ceylan", "Stanley Kubrick", 
        "Stanley Kubrick", "Andrei Tarkovsky", "Zeki Demirkubuz", 
        "Ingmar Bergman", "Akira Kurosawa"
    ];
    const weightedMovies = [
"The Godfather", "Parasite", "Citizen Kane"
];
// 1. ADIM: Özel Listeyi Tanımla (images3 klasöründen)
const specialMovies = [
    {
        title: "Anatomy of a Murder",
        poster_path: "images3/anatomyofmurder.jpg",
        overview: "James Stewart, karısına asılan bir barmeni öldürmekle suçlanan subayı (Ben Gazzara) savunan kasaba avukatı rolünde.",
        director_name: "Otto Preminger",
        isLocal: true
    },
    {
            title: "Come and See",
            poster_path: "images3/comeandsee.jpg",
            overview: "1943 yılında Belarus’ta Naziler tarafından gerçekleştirilen vahşeti küçük bir çocuğun hikayesi üzerinden bu sarsıcı ve rahatsız edici film, gelmiş geçmiş en korkunç savaş filmlerinden biridir.",
            director_name: "Elem Klimov",
            isLocal: true
        },
         {
            title: "12 Angry Men",
            poster_path: "images3/12angrymen.jpg",
            overview: "Latin kökenli bir Amerikalı genç babasını bıçaklayarak öldürdüğü gerekçesiyle birinci dereceden cinayetle suçlanır ve mahkeme önüne çıkarılır.",
            director_name: "Sidney Lumet",
            isLocal: true
        },
        {
            title: "One Flew Over the Cuckoo’s Nest",
            poster_path: "images3/gugukkusu.jpg",
            overview: "Randle P. McMurphy, deli numarası yaparak damarlarında kan yerine elektrik dolaşan, ağzı çok iyi laf yapan özgür ruhlu bir mahkumdur.",
            director_name: "Miloš Forman",
            isLocal: true
        },
    // Buraya images3 içinde posteri olan diğer özel filmlerini ekle
];

    let questionIndex = 0;
    let currentLang = 'tr';
    let currentMovie = { title: '', poster: '' };
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

    // Dil Değiştirme Aktif
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
        let directorLabel = "";
        let rand = Math.random();
        const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; // API anahtarını buraya ekliyoruz

        if (rand < 0.4) { 
            // 1. %40: Yönetmen Listesi (Mevcut mantık doğru)
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            const resp = await fetch(`/api/get-movie?director=${encodeURIComponent(director)}&lang=${currentLang}`);
            const data = await resp.json();
            const movies = data.crew.filter(m => m.job === 'Director' && m.poster_path);
            movieData = movies[Math.floor(Math.random() * movies.length)];
            directorLabel = director;
            movieData.isLocal = false;

        } else if (rand < 0.8) { 
            // 2. %40: ID Listesinden Film Çekme (DÜZELTİLDİ)
            const movieId = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
            // ID'den film detaylarını çekmek için TMDB'ye doğrudan istek atıyoruz
            const resp = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${currentLang}`);
            movieData = await resp.json();
            directorLabel = "Kült Seçki"; 
            movieData.isLocal = false;

        } else { 
            // 3. %20: Özel Liste (Mevcut mantık doğru)
            movieData = specialMovies[Math.floor(Math.random() * specialMovies.length)];
            directorLabel = movieData.director_name;
            // movieData.isLocal zaten specialMovies objelerinde true olarak tanımlı
        }

        if (!movieData || !movieData.title) throw new Error("Film verisi eksik");

        currentMovie = { 
            title: movieData.title, 
            poster: movieData.isLocal ? movieData.poster_path : `https://image.tmdb.org/t/p/w780${movieData.poster_path}`,
            overview: movieData.overview || "",
            director: directorLabel
        };

        content.innerHTML = `
            <div class="recommendation-item">
                <img src="${currentMovie.poster}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <h2 style="margin: 1.5rem 0 0.5rem 0;">${currentMovie.title}</h2>
                <p style="color:var(--accent-color); font-weight:bold;">Yönetmen: ${currentMovie.director}</p>
                <p style="max-width:600px; margin-top:1rem; opacity:0.8;">${currentMovie.overview.substring(0, 250)}...</p>
            </div>`;

    } catch (e) {
        console.error("Hata detayı:", e);
        const fallbackMovie = specialMovies[0];
        content.innerHTML = `<p>Öneri hazırlanırken bir sorun oluştu, ama senin için şunu seçtim:</p>
                             <h3>${fallbackMovie.title}</h3>`;
    } finally { loader.classList.add('hidden'); }

}

    document.getElementById('share-story-btn').onclick = async () => {
        const storyContainer = document.getElementById('insta-story-container');
        const storyPoster = document.getElementById('story-movie-poster');
        document.getElementById('story-movie-title').textContent = currentMovie.title;
        document.getElementById('story-movie-poster').src = currentMovie.poster.replace('image.tmdb.org', 'corsproxy.io/?https://image.tmdb.org');
        document.getElementById('story-choices-grid').innerHTML = userSelections.map(src => `<img src="${src}">`).join('');

        const proxyUrl = "https://images.weserv.nl/?url=" + encodeURIComponent(currentMovie.poster);
    storyPoster.src = proxyUrl;

       await new Promise((resolve) => {
        if (storyPoster.complete) resolve();
        else storyPoster.onload = resolve;
    });

    await new Promise(r => setTimeout(r, 500));

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