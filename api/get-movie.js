// /api/get-movie.js
export default async function handler(req, res) {
    const { lang = 'tr' } = req.query;
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    const weightedDirectors = ["Nuri Bilge Ceylan", "Stanley Kubrick", "Andrei Tarkovsky", "Zeki Demirkubuz", "Ingmar Bergman", "Akira Kurosawa", "Fatih Akın", "Wim Wenders","Krzysztof Kieślowski"];
    const weightedMovies =["The Godfather", "No Country for Old Men", "Citizen Kane", "Mulholland Drive", "Manchester by the Sea", "Holy Spider","City of God","Dead Poets Society","Eternal Sunshine of the Spotless Mind","Insomnia",
        "Seven","The Silence of the Lambs","Jojo Rabbit","Prisoners","Memento","Uncut Gems","Babylon","Der Himmel über Berlin","The Usual Suspects","The Butterfly Effect"];
    const specialMovies = [
        { title: "Anatomy of a Murder", poster_path: "images3/anatomyofmurder.jpg", director_name: "Otto Preminger", isLocal: true, overview: "James Stewart'ın devleştiği bir mahkeme dramı." },
        { title: "Come and See", poster_path: "images3/comeandsee.jpg", director_name: "Elem Klimov", isLocal: true, overview: "Savaşın dehşetini bir çocuğun gözünden anlatan sarsıcı bir yapıt." }
    ];

    try {
        const rand = Math.random();
        let selected = null;

        // %40 Yönetmen Araması
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
        // %40 Film İsmi Araması
        else if (rand < 0.8) {
            const title = weightedMovies[Math.floor(Math.random() * weightedMovies.length)];
            const sRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=${lang}`);
            const sData = await sRes.json();
            if (sData.results?.length > 0) {
                const m = sData.results[0];
                selected = { title: m.title, poster_path: `https://image.tmdb.org/t/p/w780${m.poster_path}`, overview: m.overview, director_name: "Kült Seçki", isLocal: false };
            }
        }

        // Eğer yukarıdaki API çağrıları başarısız olursa veya %20'lik dilime girilirse Özel Liste döner
        if (!selected) {
            selected = specialMovies[Math.floor(Math.random() * specialMovies.length)];
        }

        return res.status(200).json(selected);
    } catch (e) {
        console.error("API Error:", e);
        // Hata anında boş dönmek yerine özel listeden rastgele bir tane döndür
        return res.status(200).json(specialMovies[0]);
    }
}