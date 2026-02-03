document.addEventListener('DOMContentLoaded', () => {
    const localImagePool = [
        { id: "13.66", name: "View of the Domaine Saint-Joseph" },
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



{ id: "71.60", name: "The Farrier" }
    ];
    const canvasTopList = [
        { rank: 1, title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", score: 93.79, year: 2003, poster: "images4/lotr3.webp" },
        { rank:2, title: "The Godfather", director: "Francis Ford Coppola", score: 93.49, year: 1972, poster: "images4/godfather.webp" }, // Poster linkini güncelleyin
        { rank: 3, title: "The Shining", director: "Stanley Kubrick", score: 89.21, year: 1980, poster: "images4/theshining.webp" },
        { rank: 4, title: "Parasite", director: "Bong Joon-ho", score: 87.99, year: 2019, poster: "images4/parasite.webp" },
        { rank: 5, title: "12 Angry Men", director: "Sidney Lumet", score: 92.32, year: 1957, poster: "images4/12angryman.webp" },
        { rank: 5, title: "Interstellar", director: "Christopher Nolan", score: 92.28, year: 2014, poster: "images4/interstellar.webp" },
        { rank: 5, title: "One Flew Over the Cuckoo's Nest", director: "Miloš Forman", score: 91.38, year: 1975, poster: "images4/oneflew.webp" },
        { rank: 5, title: "Seven Samurai", director: "Akira Kurosawa", score: 93.37, year: 1954, poster: "images4/sevensamurai.webp" },
        { rank: 5, title: "The Silence of the Lambs", director: "Jonathan Demme", score: 89.33, year: 1991, poster: "images4/silenceofthelamb.webp" },
        { rank: 5, title: "The Shawshank Redemption", director: "Frank Darabont", score: 89.2, year: 1994, poster: "images4/theshawshank.webp" },
        { rank: 11, title: "The Dark Knight", director: "Christopher Nolan", score: 89.4, year: 2008, poster: "images4/thedarkknight.webp" },
        { rank: 5, title: "The Godfather Part II", director: "Francis Ford Coppola", score: 93.18, year: 1974, poster: "images4/godfather2.webp" },
        { rank: 5, title: "Schindler's List", director: "Steven Spielberg", score: 88.2, year: 1994, poster: "images4/schindlerslist.webp" },
        { rank: 5, title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", score: 92.59, year: 2001, poster: "images4/lotr1.webp" },
        { rank: 5, title: "Pulp Fiction", director: "Quentin Tarantino", score: 88.4, year: 1994, poster: "images4/pulpfiction.webp" },
        { rank: 5, title: "The Good, the Bad and the Ugly", director: "Sergio Leone", score: 90.7, year: 1966, poster: "images4/goodbadugly.webp" },
        { rank: 5, title: "The Lord of the Rings: The Two Towers", director: "Christopher Nolan", score: 91.29, year: 2002, poster: "images4/lotr2.webp" },
        { rank: 5, title: "Forrest Gump", director: "Robert Zemeckis", score: 87.21, year: 1994, poster: "images4/forrestgump.webp" },
        { rank: 5, title: "Fight Club", director: "David Fincher", score: 87.34, year: 1999, poster: "images4/fightclub.webp" },
        { rank: 5, title: "Inception", director: "Christopher Nolan", score: 87.24, year: 2010, poster: "images4/inception.webp" },
        { rank: 21, title: "Star Wars: Episode V - The Empire Strikes Back", director: "Irvin Kershner", score: 87.14, year: 1980, poster: "images4/starwars5.webp" },
        { rank: 5, title: "The Matrix", director: "Wachowski Brothers", score: 87.94, year: 1999, poster: "images4/matrix.webp" },
        { rank: 5, title: "Goodfellas", director: "Martin Scorsese", score: 87.2, year: 1990, poster: "images4/goodfellas.webp" },
        { rank: 5, title: "Se7en", director: "David Fincher", score: 86.11, year: 1995, poster: "images4/se7en.webp" },
        { rank: 5, title: "It's a Wonderful Life", director: "Frank Capra", score: 87.29, year: 1946, poster: "images4/wonderfullife.webp" },
        { rank: 5, title: "Come and See", director: "Elem Klimov", score: 91.47, year: 1985, poster: "images4/comeandsee.webp" },
        { rank: 5, title: "High and Low", director: "Akira Kurosawa", score: 91.34, year: 1963, poster: "images4/highandlow.webp" },
        { rank: 5, title: "City of God", director: "Fernando Meirelles", score: 91.39, year: 2002, poster: "images4/cityofgod.webp" },
        { rank: 5, title: "Ikiru", director: "Akira Kurosawa", score: 90.04, year:  1952 , poster: "images4/ikuru.webp" },
        { rank: 5, title: "La Haine", director: "Mathieu Kassovitz", score: 88.04, year: 1995, poster: "images4/lahaine.webp" },
        { rank: 31, title: "Paths of Glory", director: " Stanley Kubrick", score: 88.39, year:  1957 , poster: "images4/pathsofglory.webp" },
        { rank: 5, title: "Faraway, So Close!", director: "Wim Wenders", score: 90.19, year: 1993, poster: "images4/faraway.webp" },
        { rank: 5, title: "Das Boot", director: "Wolfgang Petersen", score: 88.35, year: 1981, poster: "images4/dasboot.webp" },
        { rank: 5, title: "Underground", director: "Emir Kusturica", score: 88.38, year: 1995, poster: "images4/underground.webp" },
        { rank: 5, title: "Paris, Texas", director: "Wim Wenders", score: 90.25, year: 1984, poster: "images4/paristexas.webp" },
        { rank: 5, title: "Three Colours: Red", director: "Krzysztof Kieślowski", score: 90.26, year: 1994, poster: "images4/red.webp" },
        { rank: 5, title: "Three Colours: Blue", director: "Krzysztof Kieślowski", score: 90.45, year: 1993, poster: "images4/blue.webp" },
        { rank: 5, title: "Three Colours: White", director: "Krzysztof Kieślowski", score: 86.01, year: 1994, poster: "images4/white.webp" },
        { rank: 5, title: "Wings of Desire", director: "Wim Wenders", score: 91.49, year: 1987, poster: "images4/derhimmel.webp" },
        { rank: 5, title: "Perfect Days", director: "Wim Wenders", score: 92.13, year: 2023, poster: "images4/perfectdays.webp" },
        { rank: 41, title: "Oldboy", director: "Park Chan-wook", score: 91.26, year: 2003, poster: "images4/oldboy.webp" },
        { rank: 5, title: "Eyes Wide Shut", director: "Stanley Kubrick", score: 92.16, year: 1999, poster: "images4/eyeswide.webp" },
        { rank: 5, title: "A Clockwork Orange", director: "Stanley Kubrick", score: 91.45, year: 1971, poster: "images4/aclock.webp" },
        { rank: 5, title: "2001: A Space Odyssey", director: "Stanley Kubrick", score: 92.22, year: 1968, poster: "images4/aspace.webp" },
        { rank: 5, title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", director: "Stanley Kubrick", score: 88.34, year: 1964, poster: "images4/drstrangelove.webp" },
        { rank: 5, title: "Full Metal Jacket", director: "Stanley Kubrick", score: 87.32, year: 1987, poster: "images4/fullmetaljacket.webp" },
        { rank: 5, title: "Kış Uykusu", director: "Nuri Bilge Ceylan", score: 88.12, year: 2014, poster: "images4/kisuykusu.webp" },
        { rank: 5, title: "Bir Zamanlar Anadolu'da", director: "Nuri Bilge Ceylan", score: 91.28, year: 2011, poster: "images4/birzamanlaranadoluda.webp" },
        { rank: 5, title: "Ahlat Ağacı", director: "Nuri Bilge Ceylan", score: 86.02, year: 2018, poster: "images4/ahlatagaci.webp" },
        { rank: 5, title: "Uzak", director: "Nuri Bilge Ceylan", score: 89.37, year: 2002, poster: "images4/uzak.webp" },
        { rank: 51, title: "Üç Maymun", director: "Nuri Bilge Ceylan", score: 87.26, year: 2008, poster: "images4/ücmaymun.webp" },
        { rank: 5, title: "Kuru Otlar Üstüne", director: "Nuri Bilge Ceylan", score: 87.18, year: 2023, poster: "images4/kuruotlar.webp" },
        { rank: 5, title: "İklimler", director: "Nuri Bilge Ceylan", score: 87.12, year: 2006, poster: "images4/iklimler.webp" },
        { rank: 5, title: "Kasaba", director: "Nuri Bilge Ceylan", score: 81.04, year: 1997, poster: "images4/kasaba.webp" },
        
    

    ];

    // Fallback Listesi (TMDB Çökerse Buradan Çekecek - images3)
    const privateSpecialList = [
        {
            title: "Oldboy",
            poster_path: "images3/oldboy.jpg", 
            overview: "15 yıl hapis kalan bir adamın intikam hikayesi.",
            director_name: "Park Chan-wook",
            isLocal: true
        },
        {
            title: "American History X",
            poster_path: "images3/americanhistoryx.jpg",
            overview: "Irkçılık ve kefaret üzerine çarpıcı bir dram.",
            director_name: "Tony Kaye",
            isLocal: true
        }
        // Buraya images3 klasöründeki diğer filmlerini ekle
    ];

    // Dil Çevirileri
    const texts = {
        tr: {
            questions: ["Ruh halini hangi atmosfer yansıtıyor?", "Hangi detay seni içine çekiyor?", "Hangi manzarada kaybolmak istersin?", "Sessizliği hangisi daha iyi anlatıyor?"],
            moodTitle: "RUH HALİ SEÇKİSİ",
            listTitle: "CANVAS LİSTESİ",
            share: "Hikaye Olarak Paylaş",
            recLabel: "ÖNERİLEN FİLM",
            moodLabel: "RUH HALİNİ YANSITAN SEÇİMLER"
        },
        en: {
            questions: ["Which atmosphere reflects your mood?", "Which detail draws you in?", "Which landscape would you get lost in?", "Which one speaks silence better?"],
            moodTitle: "MOOD SELECTION",
            listTitle: "CANVAS LIST",
            share: "Share as Story",
            recLabel: "RECOMMENDED MOVIE",
            moodLabel: "CHOICES REFLECTING YOUR MOOD"
        }
    };

    let currentLang = 'tr';
    let questionIndex = 0;
    let userSelections = [];
    let currentMovie = {};

    // --- FONKSİYONLAR ---

    // 1. Ana Sayfa Görseli Ayarla (Rastgele f1-f29)
    function setLandingImages() {
        const randomNum = Math.floor(Math.random() * 29) + 1; // 1 ile 29 arası
        const imgPath = `images2/f${randomNum}.jpg`;
        
        const moodImg = document.getElementById('mood-card-img');
        if(moodImg) moodImg.src = imgPath;
    }

    // 2. Dil Değiştirme
    window.toggleLang = function() {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateUI();
    };

    function updateUI() {
        const t = texts[currentLang];
        document.getElementById('txt-mood-select').textContent = t.moodTitle;
        document.getElementById('txt-canvas-list').textContent = t.listTitle;
        document.getElementById('share-story-btn').textContent = t.share;
        document.getElementById('story-label-rec').textContent = t.recLabel;
        document.getElementById('story-label-mood').textContent = t.moodLabel;
        document.getElementById('selection-question').textContent = t.questions[questionIndex];
    }

    // 3. Tema Değiştirme
    window.toggleTheme = function() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    };

    // 4. Canvas Listesi Sıralama ve Gösterme
    window.showCanvasList = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('top-list-screen').classList.remove('hidden');
        
        const listContainer = document.getElementById('top-list-content');
        listContainer.innerHTML = '';

        // PUANA GÖRE SIRALA (Büyükten Küçüğe)
        const sortedList = [...canvasTopList].sort((a, b) => b.score - a.score);

        sortedList.forEach((movie, index) => {
            const rank = index + 1; // Sıralama numarası otomatik
            const itemHTML = `
                <div class="top-list-item">
                    <div class="rank">#${rank}</div>
                    <img src="${movie.poster}" class="mini-poster" onerror="this.src='images2/fff.jpg'">
                    <div class="info">
                        <h3 style="margin:0; color:var(--text-main)">${movie.title}</h3>
                        <p style="margin:0; font-size:0.8rem; color:var(--text-dim)">${movie.director}</p>
                    </div>
                    <div class="score-box">${movie.score}</div>
                </div>
            `;
            listContainer.innerHTML += itemHTML;
        });
    };

    // 5. Seçim Ekranı ve Rastgele Header
    window.startRecommender = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.remove('hidden');
        
        // Header için rastgele görsel
        const randomNum = Math.floor(Math.random() * 29) + 1;
        document.getElementById('random-header-img').src = `images2/f${randomNum}.jpg`;
        
        initializePage();
    };

    function initializePage() {
        questionIndex = 0;
        userSelections = [];
        updateUI();
        populateImageGrid();
    }

    // Görsel Grid'i Doldur (Örnek Data - images klasöründen)
   async function populateImageGrid() {
    const grid = document.getElementById('image-selection-grid');
    
    // Yükleniyor animasyonu
    grid.innerHTML = '<div class="spinner"></div>';
    
    // Gecikme simülasyonu (daha yumuşak geçiş için)
    await new Promise(r => setTimeout(r, 300));

    // 1. localImagePool boş mu kontrol et
    if (!localImagePool || localImagePool.length === 0) {
        grid.innerHTML = '<p style="color:red">Görsel havuzu boş! Lütfen script.js dosyasındaki localImagePool listesini kontrol et.</p>';
        return;
    }

    // 2. Havuzdan rastgele 4 görsel seç
    const shuffled = [...localImagePool].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    // 3. HTML'i oluştur
    grid.innerHTML = shuffled.map(item => {
        // Eğer listede sadece isim varsa ({id:...} değilse) düzelt
        const imgId = typeof item === 'object' ? item.id : item;
        const imgName = typeof item === 'object' ? item.name : "Seçim";

        return `
        <div class="image-item" onclick="handleChoice('images/${imgId}.jpg')">
            <img src="images/${imgId}.jpg" 
                 alt="${imgName}" 
                 onerror="this.src='images2/fff.jpg'; this.alt='Görsel Yüklenemedi'"> 
        </div>
        `;
    }).join('');
}
    window.handleChoice = function(src) {
        userSelections.push(src);
        questionIndex++;
        if(questionIndex < 4) {
            document.getElementById('selection-question').textContent = texts[currentLang].questions[questionIndex];
            populateImageGrid();
        } else {
            showRecommendation();
        }
    };

    // 6. ÖNERİ VE FALLBACK SİSTEMİ
    async function showRecommendation() {
        const screen = document.getElementById('recommendation-screen');
        const content = document.getElementById('recommendation-content');
        
        document.getElementById('selection-screen').classList.add('hidden');
        screen.classList.remove('hidden');
        document.getElementById('loading').classList.remove('hidden');
        content.innerHTML = '';

        try {
            // API ÇAĞRISI SİMÜLASYONU
            // Gerçek kodunda burası fetch(...) olacak
            // Hata simülasyonu için rastgele hata fırlatalım:
            if(Math.random() < 0.1) throw new Error("TMDB Ulaşılamadı");

            // Normal API akışı...
            // (Burada fetch kodların olacak)
            // Örnek başarılı sonuç:
            renderMovie({
                title: "Stalker",
                poster_path: "/lOe9qC9u2b1X6zX4qFw5.jpg",
                overview: "Bir iz sürücünün hikayesi...",
                isLocal: false
            }, "Özel Seçki");

        } catch (error) {
            console.warn("API Hatası, Yerel Fallback (images3) Devrede:", error);
            
            // FALLBACK: images3 Klasöründen Rastgele Film
            const localMovie = privateSpecialList[Math.floor(Math.random() * privateSpecialList.length)];
            
            renderMovie(localMovie, "Canvas Güvenli Mod");
        } finally {
            document.getElementById('loading').classList.add('hidden');
        }
    }

    function renderMovie(data, label) {
        const content = document.getElementById('recommendation-content');
        
        // Resim yolu kontrolü: Yerelse olduğu gibi, API ise başına link ekle
        const posterSrc = data.isLocal ? data.poster_path : `https://image.tmdb.org/t/p/w780${data.poster_path}`;

        currentMovie = { title: data.title, poster: posterSrc }; // Story için kaydet

        content.innerHTML = `
            <div class="recommendation-item fade-in">
                <img src="${posterSrc}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h2 style="margin: 1.5rem 0 0.5rem 0;">${data.title}</h2>
                <p style="color:var(--primary-red); font-weight:bold;">${label}</p>
                <p style="opacity:0.8;">${data.overview || ""}</p>
            </div>
        `;
    }

    window.goHome = function() {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById('landing-screen').classList.remove('hidden');
        setLandingImages(); // Ana sayfaya dönünce görseli yenile
    };

    // Başlangıçta ana sayfa görselini ayarla
    setLandingImages();
});