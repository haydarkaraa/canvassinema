document.addEventListener('DOMContentLoaded', () => {
    const localImagePool = ["13.66","17.120.234","1972.118.281","1974.356.32","1975.1.160","1975.1.163","1975.1.164","1975.1.167","1975.1.180","1975.1.182","1975.1.194","1975.1.202","1975.1.209","1975.1.642","1975.1.644","1975.1.691","1978.493","1980.342","1984.433.323","1994.420","1997.149.2","1998.325.1",
         "2000.51","2002.62.3","2003.42.40","2003.42.54","2009.400.109","2009.400.110","29.100.113", "29.100.64","29.100.67","29.100.112","29.100.113","29.100.194",
         "32.100.11", "39.182",
         "49.30", 
         "54.143.2","56.13","56.135.1","56.135.7","56.135.8","56.135.9","57.181","59.16.5",
         "61.190","61.101.5","64.124","64.210",
         "71.23","71.60","71.75","71.123",]; 
    
    
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
            questions: ["Bugün hayatını hangi fırça darbesiyle özetlerdin?Sert ve kaotik mi, yoksa yumuşak ve belirsiz mi?", "Bakışların hangi odak noktasında takılıp kalıyor?","Hangi soyut detay seni gerçeklikten koparıp götürüyor?", "Bunlardan hangisini bir film karesi olarak görmek isterdin?"],
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
            questions: ["Which brushstroke would you use to define your life today? Bold and chaotic, or soft and ethereal?", "Where does your gaze find its focus?", "Which abstract detail whisks you away from reality?", "Which of these would you envision as a frame from a film?"],
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
    content.innerHTML = '';

    try {
        const resp = await fetch(`/api/get-movie?lang=${currentLang}`);
        if (!resp.ok) throw new Error("Backend Yanıt Vermedi");
        
        const movieData = await resp.json();

        currentMovie = { 
            title: movieData.title, 
            poster: movieData.poster_path, // Backend'den gelen hazır yol
            overview: movieData.overview || "",
            director: movieData.director_name
        };

        // script.js içindeki ilgili kısım
content.innerHTML = `
    <div class="recommendation-item">
        <img src="${currentMovie.poster}" class="rec-poster">
        <h2 class="rec-title">${currentMovie.title}</h2>
        <p class="rec-director"><span>Yönetmen:</span> ${currentMovie.director}</p>
        <p class="rec-overview">${currentMovie.overview.substring(0, 180)}...</p>
    </div>`;
    } catch (e) {
        console.error("Detaylı Hata:", e);
        // Eğer her şey çökerse en azından Anatomy of a Murder gösterir
        const fallback = specialMovies[0]; 
        content.innerHTML = `<h3>${fallback.title}</h3><p>Bağlantı sorunu yaşandı.</p>`;
    } finally { 
        loader.classList.add('hidden'); 
    }
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