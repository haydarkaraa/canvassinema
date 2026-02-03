// /api/get-movie.js
export default async function handler(req, res) {
    const { lang = 'tr' } = req.query;
    
    // API KEY (Doğrudan tanımlı)
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    // YEREL LİSTE (images3 Klasörü)
    const specialMovies = [
        { title: "Bir Zamanlar Anadolu'da", poster_path: "images3/birzamanlar.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Bozkırın ortasında süren bir cinayet soruşturması..." },
        { title: "Kış Uykusu", poster_path: "images3/kisuykusu.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Aydın emekli bir tiyatrocudur..." },
        { title: "Sevmek Zamanı", poster_path: "images3/sevmekzamani.jpg", director_name: "Metin Erksan", isLocal: true, overview: "Surete aşık olan bir adamın hikayesi..." },
        { title: "Susuz Yaz", poster_path: "images3/susuzyaz.jpg", director_name: "Metin Erksan", isLocal: true, overview: "Suyun mülkiyeti üzerine bir çatışma..." },
        { title: "Duvara Karşı", poster_path: "images3/duvarakarsi.jpg", director_name: "Fatih Akın", isLocal: true, overview: "İntiharın eşiğindeki iki insanın tutkulu hikayesi..." },
        { title: "Yol", poster_path: "images3/yol.jpg", director_name: "Yılmaz Güney", isLocal: true, overview: "İzinli çıkan mahkumların yol hikayesi..." },
        { title: "Kader", poster_path: "images3/kader.jpg", director_name: "Zeki Demirkubuz", isLocal: true, overview: "Bekir, Uğur ve Zagor arasındaki imkansız döngü..." },
        { title: "Masumiyet", poster_path: "images3/masumiyet.jpg", director_name: "Zeki Demirkubuz", isLocal: true, overview: "Hayatını bir fahişeye adamış bir adam ve hapisten yeni çıkan Yusuf..." },
        { title: "Tabutta Rövaşata", poster_path: "images3/tabuttarovasata.jpg", director_name: "Derviş Zaim", isLocal: true, overview: "Rumeli Hisarı'nda yaşayan evsiz bir araba hırsızının hikayesi..." },
        { title: "Gemide", poster_path: "images3/gemide.jpg", director_name: "Serdar Akar", isLocal: true, overview: "Bir gemi mürettebatının Laleli'de başına gelen olaylar..." }
    ];

    const weightedDirectors = ["Zeki Demirkubuz", "Stanley Kubrick", "Fatih Akın", "Nuri Bilge Ceylan", "Ingmar Bergman", "Akira Kurosawa", "Krzysztof Kieślowski", "David Lynch", "David Fincher", "Andrei Tarkovsky"];
    
    const weightedMovies = [
        "The Godfather", "Stalker", "Pulp Fiction", "Inception", "Fight Club", 
        "Goodfellas", "The Matrix", "Interstellar", "Parasite", "Spirited Away", 
        "City of God", "Seven", "The Silence of the Lambs", "Se7en", "Psycho",
        "Rear Window", "Modern Times", "City Lights", "Whiplash", "The Intouchables",
        "The Prestige", "Memento", "Apocalypse Now", "Alien", "The Shining"
    ];

    try {
        const rand = Math.random();
        let selected = null;

        // --- %20 YÖNETMEN MODU ---
        if (rand < 0.20) {
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            const pRes = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(director)}&language=${lang}`);
            const pData = await pRes.json();
            
            if (pData.results && pData.results.length > 0) {
                const personId = pData.results[0].id;
                const mRes = await fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&language=${lang}`);
                const mData = await mRes.json();
                
                // Yönetmenin yönettiği (Director) filmleri filtrele
                const dMovies = mData.crew.filter(m => m.job === 'Director' && m.poster_path);
                
                if (dMovies.length > 0) {
                    const m = dMovies[Math.floor(Math.random() * dMovies.length)];
                    selected = { 
                        title: m.title, 
                        poster_path: m.poster_path, // Başında URL yok, frontend ekleyecek
                        overview: m.overview, 
                        director_name: director, 
                        isLocal: false 
                    };
                }
            }
        } 
        // --- %60 AĞIRLIKLI FİLM MODU ---
        else if (rand < 0.80) {
            const title = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
            const sRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=${lang}`);
            const sData = await sRes.json();
            
            if (sData.results && sData.results.length > 0) {
                const movie = sData.results[0];
                selected = { 
                    title: movie.title, 
                    poster_path: movie.poster_path, 
                    overview: movie.overview, 
                    director_name: "Özel Seçki", // API'den yönetmen çekmek ekstra istek gerektirir, şimdilik bu yeterli
                    isLocal: false 
                };
            }
        }

        // --- EĞER API BOŞ DÖNERSE VEYA %20 YEREL MOD ---
        if (!selected) {
            // Rastgele bir yerel film seç
            selected = specialMovies[Math.floor(Math.random() * specialMovies.length)];
        }

        return res.status(200).json(selected);

    } catch (e) {
        console.error("API Hatası:", e);
        // HATA DURUMUNDA: Rastgele bir yerel film seç (Artık hep ilkini seçmiyor)
        const fallback = specialMovies[Math.floor(Math.random() * specialMovies.length)];
        return res.status(200).json(fallback);
    }
}