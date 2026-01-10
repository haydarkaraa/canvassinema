// /api/get-movie.js
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { lang = 'tr' } = req.query;
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    // 1. LİSTELERİN TANIMLANMASI
    const weightedDirectors = [
        "Nuri Bilge Ceylan", "Stanley Kubrick", "Andrei Tarkovsky", 
        "Zeki Demirkubuz", "Fatih Akın", "Krzysztof Kieślowski", 
        "Ingmar Bergman", "Akira Kurosawa"
    ];

    const weightedMovies = [
        "Inception", "The Godfather", "Pulp Fiction", "The Dark Knight", 
        "Fight Club", "Interstellar", "Parasite", "The Matrix"
    ];

    const specialMovies = [
        { 
            title: "Persona", 
            poster_path: "images3/persona.jpg", 
            director_name: "Ingmar Bergman", 
            isLocal: true, 
            overview: "Ruhsal bir yer değiştirme ve kimlik karmaşası hikayesi." 
        },
        { 
            title: "Kış Uykusu", 
            poster_path: "images3/kisuykusu.jpg", 
            director_name: "Nuri Bilge Ceylan", 
            isLocal: true, 
            overview: "Kapadokya'da bir otelde geçen, insan doğasına dair derin bir yüzleşme." 
        }
    ];

    try {
        const rand = Math.random();
        let selectedMovie = null;

        // --- DURUM 1: %40 İHTİMAL - SEÇİLİ YÖNETMEN (TMDB ÜZERİNDEN) ---
        if (rand < 0.4) {
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            const personResp = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(director)}&language=${lang}`);
            const personData = await personResp.json();

            if (personData.results?.length > 0) {
                const personId = personData.results[0].id;
                const movieResp = await fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&language=${lang}`);
                const movieData = await movieResp.json();
                
                const directorMovies = movieData.crew.filter(m => m.job === 'Director' && m.poster_path);
                const randomTMDB = directorMovies[Math.floor(Math.random() * directorMovies.length)];
                
                selectedMovie = {
                    title: randomTMDB.title,
                    poster_path: `https://image.tmdb.org/t/p/w780${randomTMDB.poster_path}`,
                    overview: randomTMDB.overview,
                    director_name: director,
                    isLocal: false
                };
            }
        } 
        
        // --- DURUM 2: %40 İHTİMAL - SEÇİLİ FİLMLER (TMDB ÜZERİNDEN) ---
        else if (rand < 0.8) {
            const movieTitle = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
            const movieSearchResp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=${lang}`);
            const movieSearchData = await movieSearchResp.json();

            if (movieSearchData.results?.length > 0) {
                const topMovie = movieSearchData.results[0];
                selectedMovie = {
                    title: topMovie.title,
                    poster_path: `https://image.tmdb.org/t/p/w780${topMovie.poster_path}`,
                    overview: topMovie.overview,
                    director_name: "Kült Film", // TMDB aramasında direktör için ek istek gerekir, basitlik için sabitlendi
                    isLocal: false
                };
            }
        } 
        
        // --- DURUM 3: %20 İHTİMAL - ÖZEL SEÇKİ (YEREL images3) ---
        else {
            selectedMovie = specialMovies[Math.floor(Math.random() * specialMovies.length)];
        }

        // Fallback: Eğer API hataları nedeniyle selectedMovie hala boşsa
        if (!selectedMovie) {
            selectedMovie = specialMovies[0];
        }

        res.status(200).json(selectedMovie);

    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Sunucu hatası oluştu." });
    }
}