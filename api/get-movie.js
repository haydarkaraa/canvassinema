// /api/get-movie.js
export default async function handler(req, res) {
    const { lang = 'tr' } = req.query;
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    const weightedDirectors = ["Nuri Bilge Ceylan", "Stanley Kubrick", "Andrei Tarkovsky", "Zeki Demirkubuz", "Ingmar Bergman", "Akira Kurosawa", "Fatih Akın", "Wim Wenders","Krzysztof Kieślowski"];
    const weightedMovies = ["The Godfather", "The Truman Show", "Citizen Kane", "Mulholland Drive", "Manchester by the Sea", "Holy Spider","American Psycho","Dead Poets Society","Eternal Sunshine of the Spotless Mind","Insomnia",
        "American History X","The Silence of the Lambs","Jojo Rabbit","Prisoners","Memento","Uncut Gems","Babylon","Der Himmel über Berlin","The Usual Suspects","The Butterfly Effect","The Terminal","Anatomy of a Murder","One Flew Over the Cuckoo's Nest",
    "Perfect Days","Sevmek Zamanı"];
    const specialMovies = [
        { title: "One Flew Over the Cuckoo's Nest", poster_path: "images3/gugukkusu.jpg", director_name: "Miloš Forman", isLocal: true, overview: "McMurphy, damarlarında kan yerine elektrik dolaşan, ağzı çok iyi laf yapan özgür ruhlu bir mahkumdur." },
        { title: "Come and See", poster_path: "images3/comeandsee.jpg", director_name: "Elem Klimov", isLocal: true, overview: "Savaşın dehşetini bir çocuğun gözünden anlatan sarsıcı bir yapıt." },
        { title: "Sarmaşık", poster_path: "images3/sarmasik.jpg", director_name: "Tolga Karaçelik", isLocal: true, overview: "Bir armatör iflas eder ve o sırada seferde olan gemisindek mürettebat gemide mahsur kalır.." },
        { title: "Sevmek Zamanı", poster_path: "images3/sevmekzamani.jpg", director_name: "Metin Erksan", isLocal: true, overview: "Fakir bir ressam, İstanbul Adalar'daki devasa villalardan birinde çalışırken bir kadının fotoğrafına aşık olur." }

    ];

    try {
        const rand = Math.random();
        let selected = null;

        // --- %40 YÖNETMEN ---
        if (rand < 0.4) {
            const director = weightedDirectors[Math.floor(Math.random() * weightedDirectors.length)];
            const pRes = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(director)}&language=${lang}`);
            const pData = await pRes.json();
            if (pData.results?.length > 0) {
                const mRes = await fetch(`https://api.themoviedb.org/3/person/${pData.results[0].id}/movie_credits?api_key=${API_KEY}&language=${lang}`);
                const mData = await mRes.json();
                const dMovies = mData.crew.filter(m => m.job === 'Director' && m.poster_path);
                if (dMovies.length > 0) {
                    const m = dMovies[Math.floor(Math.random() * dMovies.length)];
                    selected = { title: m.title, poster_path: `https://image.tmdb.org/t/p/w780${m.poster_path}`, overview: m.overview, director_name: director, isLocal: false };
                }
            }
        } 
        // --- %40 FİLM İSMİ (YÖNETMEN BİLGİSİ EKLENDİ) ---
        else if (rand < 0.8) {
            const title = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
            const sRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=${lang}`);
            const sData = await sRes.json();
            
            if (sData.results?.length > 0) {
                const movie = sData.results[0];
                
                // EK ADIM: Filmin kadrosuna gidip yönetmeni buluyoruz
                const creditsRes = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}&language=${lang}`);
                const creditsData = await creditsRes.json();
                const directorObj = creditsData.crew.find(member => member.job === 'Director');
                
                selected = { 
                    title: movie.title, 
                    poster_path: `https://image.tmdb.org/t/p/w780${movie.poster_path}`, 
                    overview: movie.overview, 
                    director_name: directorObj ? directorObj.name : "Bilinmiyor", // Kült Seçki yerine gerçek isim
                    isLocal: false 
                };
            }
        }

        if (!selected) {
            selected = specialMovies[Math.floor(Math.random() * specialMovies.length)];
        }

        return res.status(200).json(selected);
    } catch (e) {
        return res.status(200).json(specialMovies[0]);
    }
}