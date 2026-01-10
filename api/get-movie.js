// /api/get-movie.js
export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    const { lang = 'tr' } = req.query;
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    const weightedDirectors = ["Nuri Bilge Ceylan", "Stanley Kubrick", "Andrei Tarkovsky", "Zeki Demirkubuz", "Fatih Akın", "Krzysztof Kieślowski", "Ingmar Bergman", "Akira Kurosawa", "Wim Wenders"];
    const weightedMovies = ["The Godfather", "No Country for Old Men", "Citizen Kane", "Mulholland Drive", "Manchester by the Sea", "Holy Spider"];
    const specialMovies = [
        { title: "12 Angry Men", poster_path: "images3/12angrymen.jpg", overview: "Hukuk draması.", director_name: "Sidney Lumet", isLocal: true },
        { title: "One Flew Over the Cuckoo’s Nest", poster_path: "images3/gugukkusu.jpg", overview: "Özgür ruhlu bir mahkum.", director_name: "Miloš Forman", isLocal: true }
    ];

    try {
        const rand = Math.random();
        let selectedMovie = null;

        // --- DURUM 1: %40 - YÖNETMEN ---
        if (rand < 0.4) {
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            const pResp = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(director)}&language=${lang}`);
            const pData = await pResp.json();

            if (pData.results?.length > 0) {
                const mResp = await fetch(`https://api.themoviedb.org/3/person/${pData.results[0].id}/movie_credits?api_key=${API_KEY}&language=${lang}`);
                const mData = await mResp.json();
                const dMovies = mData.crew.filter(m => m.job === 'Director' && m.poster_path);
                
                if (dMovies.length > 0) {
                    const rMovie = dMovies[Math.floor(Math.random() * dMovies.length)];
                    selectedMovie = {
                        title: rMovie.title,
                        poster_path: `https://image.tmdb.org/t/p/w780${rMovie.poster_path}`,
                        overview: rMovie.overview,
                        director_name: director,
                        isLocal: false
                    };
                }
            }
        } 
        
        // --- DURUM 2: %40 - FİLM İSMİ ---
        else if (rand < 0.8) {
            const title = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
            const sResp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=${lang}`);
            const sData = await sResp.json();
            if (sData.results?.length > 0) {
                const top = sData.results[0];
                selectedMovie = {
                    title: top.title,
                    poster_path: `https://image.tmdb.org/t/p/w780${top.poster_path}`,
                    overview: top.overview,
                    director_name: "Kült Seçki",
                    isLocal: false
                };
            }
        } 
        
        // --- DURUM 3: %20 - ÖZEL LİSTE ---
        if (!selectedMovie) { // Eğer yukarıdakiler başarısız olursa veya rand > 0.8 ise
            selectedMovie = specialMovies[Math.floor(Math.random() * specialMovies.length)];
        }

        res.status(200).json(selectedMovie);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası" });
    }
}