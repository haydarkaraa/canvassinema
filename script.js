document.addEventListener('DOMContentLoaded', () => {
    // Met Museum API'den çekilecek görsel ID'leri
    const localImagePool = ["17.120.234", "29.100.113", "30.95.250", "32.100.11", "48.190.2", "49.30", "56.13", "56.135.1"]; 
    // Ağırlıklı Yönetmen Havuzu
    const weightedDirectors = ["Nuri Bilge Ceylan", "Zeki Demirkubuz", "Stanley Kubrick", "Andrei Tarkovsky", "Ingmar Bergman", "Akira Kurosawa", "Krzysztof Kieślowski", "Fatih Akın", "Wong Kar-wai", "Abbas Kiarostami"];

    let questionIndex = 0;
    let currentLang = 'tr';
    let currentMovie = { title: '', poster: '' };

    const texts = {
        tr: {
            questions: ["Ruh halini hangi atmosfer yansıtıyor?", "Hangi detay seni içine çekiyor?", "Hangi manzarada kaybolmak istersin?", "Sessizliği hangisi daha iyi anlatıyor?"],
            loading: "Seçimlerin analiz ediliyor, sana uygun sinema eseri bulunuyor...",
            contact: "İletişim: info@canvassinema.com"
        },
        en: {
            questions: ["Which atmosphere reflects your mood?", "Which detail draws you in?", "Which landscape would you get lost in?", "Which one speaks silence better?"],
            loading: "Analyzing choices, finding the cinematic piece for you...",
            contact: "Contact: info@canvassinema.com"
        }
    };

    // --- BAŞLATMA VE YARDIMCI FONKSİYONLAR ---
    function initializePage() {
        document.getElementById('start-screen').classList.remove('hidden');
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById('recommendation-screen').classList.add('hidden');
        setRandomHeroPoster();
        questionIndex = 0;
    }

    function setRandomHeroPoster() {
        const posterImg = document.getElementById('random-hero-poster');
        if (posterImg) {
            // images2 klasöründeki f1.jpg - f10.jpg arası rastgele kapak
            const rnd = Math.floor(Math.random() * 10) + 1;
            posterImg.src = `images2/f${rnd}.jpg`;
            posterImg.onerror = () => { posterImg.src = 'https://via.placeholder.com/260x380?text=Canvas+Sinema'; };
        }
    }

    // --- NAVİGASYON İKONLARI ---
    document.getElementById('random-movie-btn').onclick = () => showRecommendation(true); // Rastgele mod
    document.getElementById('suggest-movie-btn').onclick = () => window.location.href = `mailto:info@canvassinema.com?subject=Film Tavsiyesi`;
    document.getElementById('contact-btn').onclick = () => alert(texts[currentLang].contact);
    document.getElementById('theme-toggle-btn').onclick = () => {
        const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme);
    };
    document.getElementById('lang-toggle-btn').onclick = () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        initializePage();
    };

    // --- TEST AKIŞI ---
    document.getElementById('start-test-btn').onclick = () => {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.remove('hidden');
        updateSelectionScreen();
    };

    async function populateImageGrid() {
        const grid = document.getElementById('image-selection-grid');
        grid.innerHTML = '<div class="spinner"></div>';
        // Havuzdan rastgele 4 görsel seç
        const ids = [...localImagePool].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        const imagePromises = ids.map(id => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = `images/${id}.jpg`;
                img.onload = () => resolve(`<div class="image-item" onclick="nextQuestion()"><img src="${img.src}"></div>`);
                img.onerror = () => resolve(`<div class="image-item placeholder" onclick="nextQuestion()">Görsel Yüklenemedi</div>`);
            });
        });

        const imageElements = await Promise.all(imagePromises);
        grid.innerHTML = imageElements.join('');
    }

    window.nextQuestion = function() {
        questionIndex++;
        if (questionIndex < 4) {
            updateSelectionScreen();
        } else {
            showRecommendation(false); // Test sonucu mod
        }
    };

    function updateSelectionScreen() {
        document.getElementById('selection-question').textContent = texts[currentLang].questions[questionIndex];
        populateImageGrid();
    }

    // --- ÖNERİ FONKSİYONU (GÜVENLİ VERCEL API) ---
    async function showRecommendation(isRandomMode) {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById('recommendation-screen').classList.remove('hidden');
        
        const content = document.getElementById('recommendation-content');
        const loader = document.getElementById('loading');
        loader.classList.remove('hidden');
        content.innerHTML = '';
        document.getElementById('loading-text').textContent = isRandomMode ? (currentLang === 'tr' ? 'Rastgele bir başyapıt seçiliyor...' : 'Selecting a random masterpiece...') : texts[currentLang].loading;

        try {
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            
            // GÜVENLİ İSTEK: Vercel Serverless Function'a çağrı
            const resp = await fetch(`/api/get-movie?director=${encodeURIComponent(director)}&lang=${currentLang}`);
            
            if (!resp.ok) throw new Error('API Hatası');
            
            const movieData = await resp.json();
            
            // Yönetmenin posteri ve özeti olan filmlerini filtrele
            const validMovies = movieData.crew.filter(m => m.job === 'Director' && m.poster_path && m.overview);
            
            if (validMovies.length === 0) throw new Error('Uygun film bulunamadı');
            
            // Rastgele birini seç
            const movie = validMovies[Math.floor(Math.random() * validMovies.length)];
            
            currentMovie = { title: movie.title, poster: `https://image.tmdb.org/t/p/w780${movie.poster_path}` };

            content.innerHTML = `
                <div class="recommendation-item" style="animation: fadeIn 0.5s ease;">
                    <img src="${currentMovie.poster}" style="max-width:280px; border-radius:12px; box-shadow: 0 15px 40px rgba(0,0,0,0.2);">
                    <h2 style="margin-top:1.5rem; font-size:1.8rem;">${currentMovie.title}</h2>
                    <p style="opacity:0.8; font-weight:500; color:var(--accent-color)">Yönetmen: ${director}</p>
                    <p style="font-size:1rem; padding:0 5%; line-height:1.6; opacity:0.9;">${movie.overview}</p>
                </div>`;
        } catch (e) { 
            console.error(e);
            content.innerHTML = `<p>${currentLang === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.'}</p>`; 
        } finally { 
            loader.classList.add('hidden'); 
        }
    }

    // --- PAYLAŞMA ---
    document.getElementById('share-story-btn').onclick = async () => {
        const btn = document.getElementById('share-story-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<div class="spinner" style="width:20px; height:20px; border-width:2px;"></div> Hazırlanıyor...';
        btn.disabled = true;

        try {
            document.getElementById('story-movie-title').textContent = currentMovie.title;
            const storyPoster = document.getElementById('story-movie-poster');
            // CORS sorununu aşmak için proxy kullanımı (Gerekirse)
            storyPoster.src = currentMovie.poster.replace('image.tmdb.org', 'corsproxy.io/?https://image.tmdb.org');

            // Görselin yüklenmesini bekle
            await new Promise((resolve, reject) => {
                if (storyPoster.complete) resolve();
                storyPoster.onload = resolve;
                storyPoster.onerror = reject;
            });

            const canvas = await html2canvas(document.getElementById('insta-story-container'), { 
                useCORS: true, 
                scale: 2, // Daha yüksek kalite için
                backgroundColor: getComputedStyle(document.body).getPropertyValue('--bg-color')
            });
            
            canvas.toBlob(async (blob) => {
                const file = new File([blob], `canvas-sinema-${currentMovie.title.replace(/\s+/g, '-').toLowerCase()}.png`, { type: 'image/png' });

                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({ files: [file], title: 'Canvas Sinema' });
                } else {
                    const link = document.createElement('a');
                    link.download = file.name;
                    link.href = URL.createObjectURL(blob);
                    link.click();
                    URL.revokeObjectURL(link.href);
                    alert(currentLang === 'tr' ? 'Görsel indirildi. Hikayende paylaşabilirsin!' : 'Image downloaded. You can share it on your story!');
                }
            }, 'image/png', 0.95);
            
        } catch (error) {
            console.error('Paylaşım hatası:', error);
            alert(currentLang === 'tr' ? 'Paylaşım görseli oluşturulurken bir hata oldu.' : 'Error generating share image.');
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    };

    document.getElementById('main-page-button').onclick = () => initializePage();
    
    // Başlat
    initializePage();
});