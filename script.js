document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. VERİ VE AYARLAR
    // ==========================================

    let currentLang = 'tr';
    let questionIndex = 0;
    let userSelections = [];
    let currentMovie = {}; // Paylaşım için seçilen film burada tutulacak

    // SEÇİM EKRANI İÇİN GÖRSEL HAVUZU (images klasörü)
    // Eğer images klasöründeki dosyaların f1, f2 şeklindeyse burayı ona göre güncelle.
    // Şimdilik örnek olarak f1...f29 listesi oluşturuyoruz:
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



{ id: "71.60", name: "The Farrier" }];
  
    

    // CANVAS SİNEMA PUAN LİSTESİ (images3 klasörü - Yerel)
    const canvasTopList = [
         { rank: 5, title: "12 Angry Men", director: "Sidney Lumet", score: 92.32, year: 1957, poster: "images4/12angryman.webp" },
         { rank: 5, title: "2001: A Space Odyssey", director: "Stanley Kubrick", score: 92.22, year: 1968, poster: "images4/aspace.webp" },

        { rank: 5, title: "Ahlat Ağacı", director: "Nuri Bilge Ceylan", score: 86.02, year: 2018, poster: "images4/ahlatagaci.webp" },
         { rank: 5, title: "A Clockwork Orange", director: "Stanley Kubrick", score: 91.45, year: 1971, poster: "images4/aclock.webp" },

         { rank: 5, title: "Bir Zamanlar Anadolu'da", director: "Nuri Bilge Ceylan", score: 91.28, year: 2011, poster: "images4/birzamanlaranadoluda.webp" },
       
    ];

    // DİL ÇEVİRİLERİ
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

    // ==========================================
    // 2. TEMEL FONKSİYONLAR
    // ==========================================

    // Ana Sayfa Görseli Ayarla (Rastgele f1-f29)
    function setLandingImages() {
        // Ruh Hali Kartı için
        const randomNum = Math.floor(Math.random() * 29) + 1;
        const moodImg = document.getElementById('mood-card-img');
        if(moodImg) {
            moodImg.src = `images2/f${randomNum}.jpg`;
            moodImg.onerror = function() { this.src = 'images2/fff.jpg'; };
        }
    }

    // Dil Değiştirme
    window.toggleLang = function() {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateUI();
    };

    // UI Güncelleme
    function updateUI() {
        const t = texts[currentLang];
        document.getElementById('txt-mood-select').textContent = t.moodTitle;
        document.getElementById('txt-canvas-list').textContent = t.listTitle;
        document.getElementById('share-story-btn').textContent = t.share;
        document.getElementById('story-label-rec').textContent = t.recLabel;
        document.getElementById('story-label-mood').textContent = t.moodLabel;
        document.getElementById('selection-question').textContent = t.questions[questionIndex];
    }

    // Tema Değiştirme
    window.toggleTheme = function() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    };

    // Sayfa Yönlendirmeleri
    window.goHome = function() {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById('landing-screen').classList.remove('hidden');
        setLandingImages(); 
    };

    // ==========================================
    // 3. CANVAS LİSTESİ
    // ==========================================
    window.showCanvasList = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('top-list-screen').classList.remove('hidden');
        
        const listContainer = document.getElementById('top-list-content');
        listContainer.innerHTML = '';

        // PUANA GÖRE SIRALA (Büyükten Küçüğe)
        const sortedList = [...canvasTopList].sort((a, b) => b.score - a.score);

        sortedList.forEach((movie, index) => {
            const rank = index + 1;
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

    // ==========================================
    // 4. SEÇİM SİSTEMİ (REHBER)
    // ==========================================
    window.startRecommender = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.remove('hidden');
        
        initializePage();
    };

    function initializePage() {
        questionIndex = 0;
        userSelections = [];
        updateUI();
        
        // Header için rastgele görsel
        const randomNum = Math.floor(Math.random() * 29) + 1;
        const headerImg = document.getElementById('random-header-img');
        if(headerImg) headerImg.src = `images2/f${randomNum}.jpg`;

        populateImageGrid();
    }

    async function populateImageGrid() {
        const grid = document.getElementById('image-selection-grid');
        grid.innerHTML = '<div class="spinner"></div>';
        
        await new Promise(r => setTimeout(r, 300)); // Hafif gecikme efekti

        if (!localImagePool || localImagePool.length === 0) {
            grid.innerHTML = '<p>Görsel havuzu boş.</p>';
            return;
        }

        // Rastgele 4 görsel seç
        const shuffled = [...localImagePool].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        grid.innerHTML = shuffled.map(item => `
            <div class="image-item" onclick="handleChoice('images2/${item.id}.jpg')">
                <img src="images2/${item.id}.jpg" 
                     alt="${item.name}" 
                     onerror="this.src='images2/fff.jpg'"> 
            </div>
        `).join('');
    }

    window.handleChoice = function(src) {
        userSelections.push(src);
        questionIndex++;
        
        // Story için seçilen küçük resimleri doldur
        const choiceContainer = document.getElementById('story-choices-grid');
        if(choiceContainer) {
            if(questionIndex === 1) choiceContainer.innerHTML = ''; // İlk seçimde temizle
            choiceContainer.innerHTML += `<img src="${src}" class="story-choice-img">`;
        }

        if(questionIndex < 4) {
            document.getElementById('selection-question').textContent = texts[currentLang].questions[questionIndex];
            populateImageGrid();
        } else {
            showRecommendation();
        }
    };

    // ==========================================
    // 5. ÖNERİ VE API BAĞLANTISI
    // ==========================================
    async function showRecommendation() {
        const screen = document.getElementById('recommendation-screen');
        const loader = document.getElementById('loading');
        
        document.getElementById('selection-screen').classList.add('hidden');
        screen.classList.remove('hidden');
        loader.classList.remove('hidden');
        document.getElementById('recommendation-content').innerHTML = '';

        try {
            // GERÇEK API İSTEĞİ
            const resp = await fetch(`/api/get-movie?lang=${currentLang}`);
            if (!resp.ok) throw new Error("API Hatası");
            
            const data = await resp.json();
            
            // Etiket Belirleme
            let label = "Özel Seçki";
            if (data.isLocal) {
                label = "Canvas Güvenli Mod";
            } else if (data.director_name) {
                label = data.director_name === "Özel Seçki" ? "Kült Seçki" : "Yönetmen: " + data.director_name;
            }

            renderMovieResult(data, label);

        } catch (e) {
            console.warn("Hata, yerel listeye geçiliyor:", e);
            
            // Acil Durum Listesi (Fallback)
            const emergencyList = [
                 { title: "Bir Zamanlar Anadolu'da", poster_path: "images3/birzamanlar.jpg", isLocal: true, overview: "Bozkırın ortasında bir cinayet..." },
                 { title: "Sevmek Zamanı", poster_path: "images3/sevmekzamani.jpg", isLocal: true, overview: "Surete aşık olan adam..." },
                 { title: "Kış Uykusu", poster_path: "images3/kisuykusu.jpg", isLocal: true, overview: "Aydın'ın kış uykusu..." }
            ];
            const fallbackMovie = emergencyList[Math.floor(Math.random() * emergencyList.length)];
            renderMovieResult(fallbackMovie, "Canvas Güvenli Mod");
            
        } finally {
            loader.classList.add('hidden');
        }
    }

    function renderMovieResult(data, label) {
        const content = document.getElementById('recommendation-content');
        
        // Poster URL Ayarı
        let posterSrc = data.poster_path;
        if (!data.isLocal && posterSrc && !posterSrc.startsWith('http')) {
            posterSrc = `https://image.tmdb.org/t/p/w780${data.poster_path}`;
        }
        if (!posterSrc) posterSrc = "images2/fff.jpg";

        // Global değişkene kaydet (PAYLAŞIM İÇİN ÖNEMLİ)
        currentMovie = { 
            title: data.title, 
            poster: posterSrc,
            overview: data.overview || "",
            director: label
        };

        content.innerHTML = `
            <div class="recommendation-item fade-in">
                <img src="${posterSrc}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h2 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.8rem;">${data.title}</h2>
                <p style="color:var(--primary-red); font-weight:bold; letter-spacing:1px; margin-bottom:1rem;">${label}</p>
                <p style="max-width:600px; margin:0 auto; opacity:0.8; line-height:1.6; font-size:0.95rem;">
                    ${data.overview ? data.overview.substring(0, 250) + "..." : "Detay bulunamadı."}
                </p>
            </div>`;
    }

    // ==========================================
    // 6. HİKAYE OLARAK PAYLAŞ (html2canvas)
    // ==========================================
    const shareBtn = document.getElementById('share-story-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async function() {
            const btn = this;
            const originalText = btn.textContent;
            
            btn.textContent = "Hazırlanıyor...";
            btn.disabled = true;

            try {
                if (!currentMovie || !currentMovie.title) throw new Error("Film verisi yok");

                const storyContainer = document.getElementById('insta-story-container');
                const storyImg = document.getElementById('story-movie-poster');
                
                // Verileri doldur
                document.getElementById('story-movie-title').textContent = currentMovie.title;
                storyImg.crossOrigin = "anonymous"; // CORS için önemli
                storyImg.src = currentMovie.poster;
                
                // Resmin yüklenmesini bekle
                await new Promise((resolve) => {
                    if (storyImg.complete) resolve();
                    else {
                        storyImg.onload = resolve;
                        storyImg.onerror = resolve; // Hata olsa bile devam et
                    }
                    setTimeout(resolve, 3000); 
                });

                // Fotoğrafı Çek
                const canvas = await html2canvas(storyContainer, {
                    useCORS: true, 
                    allowTaint: true,
                    scale: 2,
                    backgroundColor: null
                });

                canvas.toBlob(async (blob) => {
                    if (!blob) throw new Error("Görsel oluşturulamadı");
                    const file = new File([blob], "canvas-story.png", { type: "image/png" });

                    // Mobilde Paylaş
                    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({
                            files: [file],
                            title: 'Canvas Sinema',
                            text: `Ruh halime göre çıkan film: ${currentMovie.title}`
                        });
                    } else {
                        // Bilgisayarda İndir
                        const link = document.createElement('a');
                        link.download = `canvas-${currentMovie.title.replace(/\s+/g, '-').toLowerCase()}.png`;
                        link.href = canvas.toDataURL();
                        link.click();
                        alert("Hikaye görseli indirildi!");
                    }
                }, 'image/png');

            } catch (error) {
                console.error("Paylaşım Hatası:", error);
                alert("Paylaşım yapılamadı. Tarayıcı desteği olmayabilir.");
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }

    // Başlangıç ayarları
    setLandingImages();
});