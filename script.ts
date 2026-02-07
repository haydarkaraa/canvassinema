document.addEventListener('DOMContentLoaded', () => {
    console.log("Canvas Sinema Başlatılıyor...");

    // ==========================================
    // 1. VERİ HAVUZLARI
    // ==========================================

    // A) SANAT ESERLERİ
    const artImages = [
        { id: "13.66", name: "View of the Domaine Saint-Joseph" },
        { id: "13.130", name: "A Ship in a Stormy Sea" },
        { id: "1972.118.281", name: "Nursery on Schenkweg" },
        { id: "1974.356.32", name: "A Road in Louveciennes" },
        { id: "1975.1.160", name: "Trees and Houses" },
        { id: "1975.1.163", name: "Valley with Fir" },
        { id: "1975.1.164", name: "Pines Along the Shore" },
        { id: "1975.1.167", name: "View of Saint-Valéry" },
        { id: "1975.1.168", name: "Palace of Westminster" },
        { id: "1975.1.180", name: "Railroad Bridge" },
        { id: "1975.1.182", name: "Rocky Path" },
        { id: "1975.1.194", name: "Olive Trees" },
        { id: "1975.1.202", name: "Versailles" },
        { id: "1975.1.208", name: "The Town Beach" },
        { id: "1975.1.209", name: "Evening Calm" },
        { id: "1975.1.642", name: "Landscape Distant Town" },
        { id: "1975.1.644", name: "View of Moulins" },
        { id: "1975.1.691", name: "Landscape" },
        { id: "1975.280.2", name: "Ship by Moonlight" },
        { id: "1975.280.4", name: "Shepherd with Sheep" },
        { id: "1977.258.2", name: "New York Harbor" },
        { id: "1978.493", name: "Outer Harbor of Brest" },
        { id: "1979.272", name: "Mountain Lake Scene" },
        { id: "1979.490.4", name: "Sea Cove" },
        { id: "1980.342", name: "Landscape at Saint-Ouen" },
        { id: "1985.117", name: "Newburyport Meadows" },
        { id: "1988.221", name: "Porte de la Reine" },
        { id: "1990.196", name: "Forest at Dawn" },
        { id: "1991.130", name: "Arques-la-Bataille" },
        { id: "1992.103.4", name: "Seine at Bougival" },
        { id: "1993.132", name: "Wheat Field" },
        { id: "1994.420", name: "Mont Sainte-Victoire" },
        { id: "1996.382", name: "Surf, Isles of Shoals" },
        { id: "1997.149.2", name: "View of Cagnes" },
        { id: "1998.325.1", name: "Olive Trees" },
        { id: "1998.325.2", name: "Water Lilies" },
        { id: "1999.442", name: "Kearsarge at Boulogne" },
        { id: "2001.202.5", name: "Poppy Fields" },
        { id: "2001.39", name: "Lago Avernus" },
        { id: "2001.45", name: "View near Rouen" },
        { id: "2002.62.3", name: "Gray Weather" },
        { id: "2003.42.1", name: "Edge of a Wood" },
        { id: "2003.42.3", name: "Classical Landscape" },
        { id: "2003.42.4", name: "Lake Fucino" },
        { id: "2003.42.12", name: "View of Beirut" },
        { id: "2003.42.13", name: "Waterfall at Terni" },
        { id: "2003.42.40", name: "Shepherd and Rider" },
        { id: "2003.42.44", name: "Gardens of Villa d'Este" },
        { id: "2003.42.45", name: "View of Porta Pinciana" },
        { id: "2003.42.48", name: "Colosseum" },
        { id: "2003.42.54", name: "Banks of the Rance" },
        { id: "2003.435", name: "Brook in the Woods" },
        { id: "2009.400.109", name: "Pyramid of Gaius Cestius" },
        { id: "2009.400.110", name: "Colosseum Rome" },
        { id: "29.100.64", name: "Mont Sainte-Victoire" },
        { id: "29.100.67", name: "Gulf of Marseille" },
        { id: "29.100.112", name: "La Grenouillère" },
        { id: "29.100.113", name: "Bridge over Pond" },
        { id: "29.100.194", name: "Rocks at Fontainebleau" },
        { id: "49.30", name: "Cypresses" },
        { id: "54.143.2", name: "Farm in Brittany" },
        { id: "56.13", name: "Flowering Orchard" },
        { id: "56.135.1", name: "View of Vétheuil" },
        { id: "56.135.4", name: "Morning on the Seine" },
        { id: "56.135.5", name: "Ile aux Fleurs" },
        { id: "56.135.7", name: "Seacoast near Wargemont" },
        { id: "56.135.9", name: "Hills around Moulin Huet" },
        { id: "57.181", name: "Gardanne" },
        { id: "59.16.5", name: "View of the Seine" },
        { id: "61.190", name: "Farm at Les Collettes" },
        { id: "61.101.5", name: "Pool at Jas de Bouffan" },
        { id: "64.210", name: "Bodmer Oak" },
        { id: "71.60", name: "The Farrier" }
    ];

    // B) EN İYİLER LİSTESİ
    const canvasTopList = [
        { rank: 1, title: "The Lord of the Rings: Return of the King", director: "Peter Jackson", score: 93.79, poster: "images4/lotr3.webp" },
        { rank: 2, title: "The Godfather", director: "Francis Ford Coppola", score: 93.49, poster: "images4/godfather.webp" },
        { rank: 3, title: "The Shining", director: "Stanley Kubrick", score: 89.21, poster: "images4/theshining.webp" },
        { rank: 4, title: "Parasite", director: "Bong Joon-ho", score: 87.99, poster: "images4/parasite.webp" },
        { rank: 5, title: "12 Angry Men", director: "Sidney Lumet", score: 92.32, poster: "images4/12angryman.webp" },
        { rank: 6, title: "Interstellar", director: "Christopher Nolan", score: 92.28, poster: "images4/interstellar.webp" },
        { rank: 7, title: "One Flew Over the Cuckoo's Nest", director: "Miloš Forman", score: 91.38, poster: "images4/oneflew.webp" },
        { rank: 8, title: "Seven Samurai", director: "Akira Kurosawa", score: 93.37, poster: "images4/sevensamurai.webp" },
        { rank: 9, title: "The Silence of the Lambs", director: "Jonathan Demme", score: 89.33, poster: "images4/silenceofthelamb.webp" },
        { rank: 10, title: "The Shawshank Redemption", director: "Frank Darabont", score: 88.21, poster: "images4/theshawshank.webp" },
        { rank: 11, title: "The Dark Knight", director: "Christopher Nolan", score: 89.4, poster: "images4/thedarkknight.webp" },
        { rank: 12, title: "The Godfather Part II", director: "Francis Ford Coppola", score: 93.18, poster: "images4/godfather2.webp" },
        { rank: 13, title: "Schindler's List", director: "Steven Spielberg", score: 88.2, poster: "images4/schindlerslist.webp" },
        { rank: 14, title: "The Lord of the Rings: Fellowship", director: "Peter Jackson", score: 92.59, poster: "images4/lotr1.webp" },
        { rank: 15, title: "Pulp Fiction", director: "Quentin Tarantino", score: 88.4, poster: "images4/pulpfiction.webp" },
        { rank: 16, title: "The Good, the Bad and the Ugly", director: "Sergio Leone", score: 90.7, poster: "images4/goodbadugly.webp" },
        { rank: 17, title: "The Lord of the Rings: The Two Towers", director: "Peter Jackson", score: 91.29, poster: "images4/lotr2.webp" },
        { rank: 18, title: "Forrest Gump", director: "Robert Zemeckis", score: 87.21, poster: "images4/forrestgump.webp" },
        { rank: 19, title: "Fight Club", director: "David Fincher", score: 87.34, poster: "images4/fightclub.webp" },
        { rank: 20, title: "Inception", director: "Christopher Nolan", score: 87.24, poster: "images4/inception.webp" },
        { rank: 21, title: "Star Wars: Empire Strikes Back", director: "Irvin Kershner", score: 87.14, poster: "images4/starwars5.webp" },
        { rank: 22, title: "The Matrix", director: "Wachowski Brothers", score: 87.94, poster: "images4/matrix.webp" },
        { rank: 23, title: "Goodfellas", director: "Martin Scorsese", score: 87.2, poster: "images4/goodfellas.webp" },
        { rank: 24, title: "Se7en", director: "David Fincher", score: 86.11, poster: "images4/se7en.webp" },
        { rank: 25, title: "It's a Wonderful Life", director: "Frank Capra", score: 87.29, poster: "images4/wonderfullife.webp" },
        { rank: 26, title: "Come and See", director: "Elem Klimov", score: 91.47, poster: "images4/comeandsee.webp" },
        { rank: 27, title: "High and Low", director: "Akira Kurosawa", score: 91.34, poster: "images4/highandlow.webp" },
        { rank: 28, title: "City of God", director: "Fernando Meirelles", score: 91.39, poster: "images4/cityofgod.webp" },
        { rank: 29, title: "Ikiru", director: "Akira Kurosawa", score: 90.04, poster: "images4/ikuru.webp" },
        { rank: 30, title: "La Haine", director: "Mathieu Kassovitz", score: 88.04, poster: "images4/lahaine.webp" },
        { rank: 31, title: "Paths of Glory", director: "Stanley Kubrick", score: 88.39, poster: "images4/pathsofglory.webp" },
        { rank: 32, title: "Faraway, So Close!", director: "Wim Wenders", score: 90.19, poster: "images4/faraway.webp" },
        { rank: 33, title: "Das Boot", director: "Wolfgang Petersen", score: 88.35, poster: "images4/dasboot.webp" },
        { rank: 34, title: "Underground", director: "Emir Kusturica", score: 88.38, poster: "images4/underground.webp" },
        { rank: 35, title: "Paris, Texas", director: "Wim Wenders", score: 90.25, poster: "images4/paristexas.webp" },
        { rank: 36, title: "Three Colours: Red", director: "Krzysztof Kieślowski", score: 90.26, poster: "images4/red.webp" },
        { rank: 37, title: "Three Colours: Blue", director: "Krzysztof Kieślowski", score: 90.45, poster: "images4/blue.webp" },
        { rank: 38, title: "Three Colours: White", director: "Krzysztof Kieślowski", score: 86.01, poster: "images4/white.webp" },
        { rank: 39, title: "Wings of Desire", director: "Wim Wenders", score: 91.49, poster: "images4/derhimmel.webp" },
        { rank: 40, title: "Perfect Days", director: "Wim Wenders", score: 92.13, poster: "images4/perfectdays.webp" },
        { rank: 41, title: "Oldboy", director: "Park Chan-wook", score: 91.26, poster: "images4/oldboy.webp" },
        { rank: 42, title: "Eyes Wide Shut", director: "Stanley Kubrick", score: 92.16, poster: "images4/eyeswide.webp" },
        { rank: 43, title: "A Clockwork Orange", director: "Stanley Kubrick", score: 91.45, poster: "images4/aclock.webp" },
        { rank: 44, title: "2001: A Space Odyssey", director: "Stanley Kubrick", score: 92.22, poster: "images4/aspace.webp" },
        { rank: 45, title: "Dr. Strangelove", director: "Stanley Kubrick", score: 88.34, poster: "images4/drstrangelove.webp" },
        { rank: 46, title: "Full Metal Jacket", director: "Stanley Kubrick", score: 87.32, poster: "images4/fullmetaljacket.webp" },
        { rank: 47, title: "Kış Uykusu", director: "Nuri Bilge Ceylan", score: 88.12, poster: "images4/kisuykusu.webp" },
        { rank: 48, title: "Bir Zamanlar Anadolu'da", director: "Nuri Bilge Ceylan", score: 91.28, poster: "images4/birzamanlaranadoluda.webp" },
        { rank: 49, title: "Ahlat Ağacı", director: "Nuri Bilge Ceylan", score: 86.02, poster: "images4/ahlatagaci.webp" },
        { rank: 50, title: "Uzak", director: "Nuri Bilge Ceylan", score: 89.37, poster: "images4/uzak.webp" },
        { rank: 51, title: "Üç Maymun", director: "Nuri Bilge Ceylan", score: 87.26, poster: "images4/ücmaymun.webp" },
        { rank: 52, title: "Kuru Otlar Üstüne", director: "Nuri Bilge Ceylan", score: 87.18, poster: "images4/kuruotlar.webp" },
        { rank: 53, title: "İklimler", director: "Nuri Bilge Ceylan", score: 87.12, poster: "images4/iklimler.webp" },
        { rank: 54, title: "American History X", director: "Tony Kaye", score: 88.32, poster: "images4/americanhistoryx.webp" },
        { rank: 55, title: "Léon: The Professional", director: "Luc Besson", score: 87.23, poster: "images4/leon.webp" },
        { rank: 56, title: "Cinema Paradiso", director: "Giuseppe Tornatore", score: 84.21, poster: "images4/cinemaparadiso.webp" },
        { rank: 57, title: "Casablanca", director: "Michael Curtiz", score: 85.02, poster: "images4/casablanca.webp" },
        { rank: 58, title: "Kader", director: "Zeki Demirkubuz", score: 89.41, poster: "images4/kader.webp" },
        { rank: 59, title: "Masumiyet", director: "Zeki Demirkubuz", score: 88.26, poster: "images4/masumiyet.webp" },
        { rank: 60, title: "C Blok", director: "Zeki Demirkubuz", score: 86.09, poster: "images4/cblok.webp" },
        { rank: 61, title: "Yeraltı", director: "Zeki Demirkubuz", score: 83.1, poster: "images4/yeralti.webp" }
    ];

    // C) YEDEK LİSTE
    const fallbackList = [
         { title: "Bir Zamanlar Anadolu'da", poster_path: "images3/birzamanlar.jpg", isLocal: true, overview: "Bozkırın ortasında bir cinayet soruşturması..." },
         { title: "Sevmek Zamanı", poster_path: "images3/sevmekzamani.jpg", isLocal: true, overview: "Surete aşık olan bir adamın hikayesi..." },
         { title: "Kış Uykusu", poster_path: "images3/kisuykusu.jpg", isLocal: true, overview: "Aydın emekli bir tiyatrocudur..." },
         { title: "Oldboy", poster_path: "images3/oldboy.jpg", isLocal: true, overview: "15 yıl hapis kalan bir adamın intikamı..." }
    ];

    // D) METİNLER
    const texts = {
        tr: {
            questions: ["Ruh halini hangi atmosfer yansıtıyor?", "Hangi detay seni içine çekiyor?", "Hangi manzarada kaybolmak istersin?", "Sessizliği hangisi daha iyi anlatıyor?"],
            moodTitle: "RUH HALİ SEÇKİSİ",
            listTitle: "CANVAS SİNEMA PUANLARI",
            share: "Hikaye Olarak Paylaş",
            recLabel: "ÖNERİLEN FİLM",
            moodLabel: "RUH HALİNİ YANSITAN SEÇİMLER"
        },
        en: {
            questions: ["Which atmosphere reflects your mood?", "Which detail draws you in?", "Which landscape would you get lost in?", "Which one speaks silence better?"],
            moodTitle: "MOOD SELECTION",
            listTitle: "CANVAS CINEMA SCORES",
            share: "Share as Story",
            recLabel: "RECOMMENDED MOVIE",
            moodLabel: "CHOICES REFLECTING YOUR MOOD"
        }
    };

    let currentLang = 'tr';
    let questionIndex = 0;
    let userSelections = [];
    let currentMovie = {}; 

    // --- TEMEL FONKSİYONLAR ---

    function setLandingImages() {
        const moodImg = document.getElementById('mood-card-img');
        if (moodImg) {
            const r = Math.floor(Math.random() * 29) + 1;
            moodImg.src = `images2/f${r}.jpg`;
            moodImg.onerror = () => { moodImg.src = 'images2/fff.jpg'; };
        }
    }
    setLandingImages();

    // 1. Dil Değiştir
    window.toggleLang = function() {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateUI();
    };

    function updateUI() {
        const t = texts[currentLang];
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if(el) el.textContent = val;
        };
        setTxt('txt-mood-select', t.moodTitle);
        setTxt('txt-canvas-list', t.listTitle);
        setTxt('share-story-btn', t.share);
        setTxt('story-label-rec', t.recLabel);
        setTxt('story-label-mood', t.moodLabel);
        setTxt('selection-question', t.questions[questionIndex]);
    }

    // 2. Tema Değiştir (10 Farklı Tema)
    window.toggleTheme = function() {
        const body = document.body;
        const themes = ['default', 'light', 'ocean', 'forest', 'cyber', 'coffee', 'sunset', 'purple', 'mono', 'midnight'];
        let currentTheme = body.getAttribute('data-theme') || 'default';
        let nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
        body.setAttribute('data-theme', themes[nextIndex]);
        console.log("Tema:", themes[nextIndex]);
    };

    // 3. Ana Menü
    window.goHome = function() {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById('landing-screen').classList.remove('hidden');
        setLandingImages(); 
    };

    // 4. Liste Göster
    window.showCanvasList = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('top-list-screen').classList.remove('hidden');
        const container = document.getElementById('top-list-content');
        if (!container) return;
        container.innerHTML = '';
        const sorted = [...canvasTopList].sort((a, b) => b.score - a.score);
        sorted.forEach((m, i) => {
            container.innerHTML += `
                <div class="top-list-item">
                    <div class="rank">#${i + 1}</div>
                    <img src="${m.poster}" class="mini-poster" onerror="this.src='images2/fff.jpg'">
                    <div class="info">
                        <h3 style="color:var(--text-main)">${m.title}</h3>
                        <p style="color:var(--text-dim)">${m.director}</p>
                    </div>
                    <div class="score-box">${m.score}</div>
                </div>`;
        });
    };

    // 5. Seçim Başlat
    window.startRecommender = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.remove('hidden');
        const headerImg = document.getElementById('random-header-img');
        if(headerImg) {
            const r = Math.floor(Math.random() * 29) + 1;
            headerImg.src = `images2/f${r}.jpg`;
        }
        questionIndex = 0;
        userSelections = [];
        updateUI();
        populateImageGrid();
    };

    async function populateImageGrid() {
        const grid = document.getElementById('image-selection-grid');
        if (!grid) return;
        grid.innerHTML = '<div class="spinner"></div>';
        await new Promise(r => setTimeout(r, 200));

        if (!artImages || artImages.length === 0) {
            grid.innerHTML = '<p>Görsel havuzu boş.</p>';
            return;
        }
        const shuffled = [...artImages].sort(() => 0.5 - Math.random()).slice(0, 4);
        grid.innerHTML = shuffled.map(item => `
            <div class="image-item" onclick="handleChoice('images/${item.id}.jpg')">
                <img src="images/${item.id}.jpg" alt="${item.name}" onerror="this.src='images2/fff.jpg'"> 
            </div>
        `).join('');
    }

    window.handleChoice = function(src) {
        userSelections.push(src);
        questionIndex++;
        const storyGrid = document.getElementById('story-choices-grid');
        if (storyGrid) {
            if (questionIndex === 1) storyGrid.innerHTML = '';
            storyGrid.innerHTML += `<img src="${src}" class="story-choice-img" crossorigin="anonymous">`;
        }
        if (questionIndex < 4) {
            updateUI();
            populateImageGrid();
        } else {
            showRecommendation();
        }
    };

    // 6. Öneri Sistemi
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
            if (!resp.ok) throw new Error("API Hatası");
            const data = await resp.json();
            let label = "Özel Seçki";
            if (data.isLocal) label = "Canvas Güvenli Mod";
            else if (data.director_name) label = "Yönetmen: " + data.director_name;
            renderResult(data, label);
        } catch (error) {
            console.warn("API Hatası:", error);
            const fallback = fallbackList[Math.floor(Math.random() * fallbackList.length)];
            renderResult(fallback, "Canvas Güvenli Mod");
        } finally {
            loader.classList.add('hidden');
        }
    }

    function renderResult(data, label) {
        let poster = data.poster_path;
        if (!data.isLocal && poster && !poster.startsWith('http')) {
            poster = `https://image.tmdb.org/t/p/w780${data.poster_path}`;
        }
        if (!poster) poster = "images2/fff.jpg";

        currentMovie = { title: data.title, poster: poster, director: label };

        const content = document.getElementById('recommendation-content');
        content.innerHTML = `
            <div class="recommendation-item fade-in">
                <img src="${poster}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h2 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.8rem;">${data.title}</h2>
                <p style="color:var(--primary-red); font-weight:bold; letter-spacing:1px; margin-bottom:1rem;">${label}</p>
                <p style="max-width:600px; margin:0 auto; opacity:0.8; line-height:1.6;">${data.overview ? data.overview.substring(0, 300) + "..." : "Detay yok."}</p>
            </div>`;
    }

    // 7. Hikaye Paylaş
    const shareBtn = document.getElementById('share-story-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async function() {
            const btn = this;
            const originalText = btn.textContent;
            if (!currentMovie.title) return alert("Film verisi yok!");
            btn.textContent = "Hazırlanıyor...";
            btn.disabled = true;

            try {
                const container = document.getElementById('insta-story-container');
                const imgEl = document.getElementById('story-movie-poster');
                document.getElementById('story-movie-title').textContent = currentMovie.title;
                imgEl.crossOrigin = "anonymous";
                imgEl.src = currentMovie.poster;

                await new Promise((resolve) => {
                    if (imgEl.complete) resolve();
                    else { imgEl.onload = resolve; imgEl.onerror = resolve; }
                    setTimeout(resolve, 3000); 
                });

                const canvas = await html2canvas(container, { useCORS: true, scale: 2, backgroundColor: null });
                canvas.toBlob(async (blob) => {
                    const file = new File([blob], "canvas-story.png", { type: "image/png" });
                    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({ files: [file], title: 'Canvas Sinema', text: `Ruh halim: ${currentMovie.title}` });
                    } else {
                        const link = document.createElement('a');
                        link.download = `canvas-${currentMovie.title.replace(/\s+/g,'-')}.png`;
                        link.href = canvas.toDataURL();
                        link.click();
                        alert("Görsel indirildi!");
                    }
                }, 'image/png');
            } catch (err) {
                console.error("Hata:", err);
                alert("Hata oluştu.");
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }
});