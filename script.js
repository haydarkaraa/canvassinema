document.addEventListener('DOMContentLoaded', () => {
    const localImagePool = [{ id: "13.66", name: "View of the Domaine Saint-Joseph" },
{ id: "13.130", name: "A Ship in a Stormy Sea" },
{ id: "1972.118.281", name: "Nursery on Schenkweg" },
{ id: "1974.356.32", name: "A Road in Louveciennes" },
{ id: "1975.1.160", name: "Trees and Houses Near the Jas de Bouffan" },
{ id: "1975.1.163", name: "Valley with Fir " },
{ id: "1975.1.164", name: "Pines Along the Shore" },
{ id: "1975.1.167", name: "View of Saint-Valéry-sur-Somme" },
{ id: "1975.1.168", name: "The Palace of Westminster" },
{ id: "1975.1.180", name: "Railroad Bridge over the Marne at Joinville" },
{ id: "1975.1.182", name: "The Rocky Path in the Morvan" },
{ id: "1975.1.194", name: "Olive Trees at Collioure" },
{ id: "1975.1.202", name: "Versailles" },
{ id: "1975.1.208", name: "The Town Beach" },
{ id: "1975.1.209", name: "Evening Calm" },
{ id: "1975.1.642", name: "Landscape with a Distant Town" },
{ id: "1975.1.644", name: "A View of Moulins" },
{ id: "1975.1.691", name: "Landscape" },
{ id: "1975.280.2", name: "Ship by Moonlight" },
{ id: "1975.280.4", name: "Shepherd with a Flock of Sheep" },
{ id: "1977.258.2", name: "New York Harbor with Brooklyn Bridge" },
{ id: "1978.493", name: "The Outer Harbor of Brest" },
{ id: "1979.272", name: "Mountain Lake Scene" },
{ id: "1979.490.4", name: "Sea Cove" },
{ id: "1980.342", name: "Landscape at Saint-Ouen" },
{ id: "1985.117", name: "Newburyport Meadows" },
{ id: "1988.221", name: "Porte de la Reine at Aigues-Mortes" },
{ id: "1990.196", name: "A Forest at Dawn with a Deer Hunt" },
{ id: "1991.130", name: "Arques-la-Bataille" },
{ id: "1992.103.4", name: "The Seine at Bougival" },
{ id: "1993.132", name: "Wheat Field with Cypresses" },
{ id: "1994.420", name: "Mont Sainte-Victoire" },
{ id: "1996.382", name: "Surf, Isles of Shoals" },
{ id: "1997.149.2", name: "View of Cagnes" },
{ id: "1998.325.1", name: "Olive Trees" },
{ id: "1998.325.2", name: "Water Lilies" },
{ id: "1999.442", name: "The Kearsarge at Boulogne" },



{ id: "2001.202.5", name: "Poppy Fields near Argenteuil" },
{ id: "2001.39", name: "Lago Avernus" },
{ id: "2001.45", name: "View near Rouen" },
{ id: "2002.62.3", name: "Gray Weather, Grande Jatte" },
{ id: "2003.42.1", name: "Edge of a Wood" },
{ id: "2003.42.3", name: "Classical Landscape with Figures" },
{ id: "2003.42.4", name: "Lake Fucino and the Abruzzi Mountains" },
{ id: "2003.42.12", name: "View of Beirut" },
{ id: "2003.42.13", name: "Waterfall at Terni" },
{ id: "2003.42.40", name: "A Shepherd and a Rider on a Country Lane" },
{ id: "2003.42.44", name: "View in the Gardens of the Villa d'Este" },
{ id: "2003.42.45", name: "View of Porta Pinciana from the Gardens of the Villa Ludovisi" },
{ id: "2003.42.48", name: "View of the Colosseum and the Arch of Constantine from the Palatine" },
{ id: "2003.42.54", name: "The Banks of the Rance, Brittany" },
{ id: "2003.435", name: "The Brook in the Woods" },
{ id: "2009.400.109", name: "Landscape with the Pyramid of Gaius Cestius, Rome" },
{ id: "2009.400.110", name: "View of the Colosseum, Rome" },
{ id: "29.100.64", name: "Mont Sainte-Victoire and the Viaduct of the Arc River Valley" },
{ id: "29.100.67", name: "The Gulf of Marseille Seen from L'Estaque" },
{ id: "29.100.112", name: "La Grenouillère" },
{ id: "29.100.113", name: "Bridge over a Pond of Water Lilies" },
{ id: "29.100.194", name: "Rocks at Fontainebleau" },








{ id: "49.30", name: "Cypresses" },



{ id: "54.143.2", name: "A Farm in Brittany" },
{ id: "56.13", name: "The Flowering Orchard" },
{ id: "56.135.1", name: "View of Vétheuil" },
{ id: "56.135.4", name: "Morning on the Seine near Giverny" },
{ id: "56.135.5", name: "Ile aux Fleurs near Vétheuil" },
{ id: "56.135.7", name: "View of the Seacoast near Wargemont in Normandy" },
{ id: "56.135.9", name: "Hills around the Bay of Moulin Huet, Guernsey" },
{ id: "57.181", name: "Gardanne" },
{ id: "59.16.5", name: "View of the Seine" },



{ id: "61.190", name: "The Farm at Les Collettes, Cagnes" },
{ id: "61.101.5", name: "The Pool at Jas de Bouffan" },
{ id: "64.210", name: "The Bodmer Oak, Fontainebleau Forest" },



{ id: "71.60", name: "The Farrier" },


         
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
    
    // Rastgele 4 öğe seç
    const selectedItems = [...localImagePool].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    grid.innerHTML = selectedItems.map(item => `
        <div class="image-item" onclick="handleChoice('images/${item.id}.jpg')">
            <img src="images/${item.id}.jpg" 
                 alt="${item.name}" 
                 title="${item.name}">
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