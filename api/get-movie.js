// /api/get-movie.js
export default async function handler(req, res) {
    const { lang = 'tr' } = req.query;
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    const weightedDirectors = ["Zeki Demirkubuz", "Stanley Kubrick", "Fatih Akın", "Zeki Demirkubuz", "Ingmar Bergman", "Akira Kurosawa", "Fatih Akın", "Wim Wenders","Krzysztof Kieślowski","David Lynch","David Fincher"];
    const weightedMovies = ["The Godfather", "The Truman Show", "Citizen Kane", "Mulholland Drive", "Manchester by the Sea", "Holy Spider","American Psycho","Dead Poets Society","Eternal Sunshine of the Spotless Mind","Insomnia","Birdman or (The Unexpected Virtue of Ignorance)","The Grand Budapest Hotel",
        "American History X","The Silence of the Lambs","Jojo Rabbit","Prisoners","Memento","Uncut Gems","Babylon","Der Himmel über Berlin","The Usual Suspects","The Butterfly Effect","The Terminal","Anatomy of a Murder","One Flew Over the Cuckoo's Nest","Interstellar","Cidade de Deus","The Silence of the Lambs",
    "Perfect Days","Sevmek Zamanı","Piano Piano Bacaksız","Susuz Yaz","Duvara Karşı","Southpaw","Fargo","Naked","Zodiac","Shutter Island","Memories of Murder","There Will Be Blood","Lincoln","The Wrestler","Requiem for a Dream","The Elephant Man","Eraserhead","Manchester by the Sea","No Country for Old Men",
"Léon","The Great Dictator","Modern Times","One Flew Over the Cuckoo's Nest","Sarmaşık","Bir Zamanlar Anadolu'da","Filler ve Çimen","Come and See"];
    const specialMovies = [
        { title: "Bir Zamanlar Anadolu'da", poster_path: "images3/birzamanlar.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Gece bitmek bilmez. Anadolu’nun bozkırında saatlerdir süren bir cinayet soruşturması herkesi yormuştur. Savcı, komiser, jandarma ve doktordan oluşan bir ekip, Kenan’la Ramazan’ın gömdüğü cesedi aramaktadır. Kenan, Yaşar’ı gömerken sarhoş olduğunu, yalnızca top gibi bir ağacı ve bir çeşmeyi hatırladığını söylemiştir. Ceset ya o tepenin ardındadır, ya bu tepenin… Engebeli, yılankavi yolların sırtında iş uzadıkça uzar.." },
        { title: "Kış Uykusu", poster_path: "images3/kisuykusu.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Aydın emekli bir tiyatrocudur; oyunculuğu bıraktıktan sonra Kapadokya'ya babasından yadigar kalan butik oteli işletmek için geri döner. Aydın o günden sonra başlayan kış uykusu..." },
        { title: "Sevmek Zamanı", poster_path: "images3/sevmekzamani.jpg", director_name: "Metin Erksan", isLocal: true, overview: "Fakir bir ressam, İstanbul Adalar'daki devasa villalardan birinde çalışırken bir kadının fotoğrafına aşık olur." },
        { title: "Susuz Yaz", poster_path: "images3/susuzyaz.jpg", director_name: "Metin Erksan", isLocal: true, overview: "Necati Cumalı'nın aynı adlı eserinden uyarlandı. Anadolu'da suyun ve kadının önemi çok büyüktür. Film suya ve kadına sahip olmak için çalışan tütün işçilerinin zorlu çalışmasını perdeye taşıyor." },
        { title: "Aşk Filmlerinin Unutulmaz Yönetmeni", poster_path: "images3/askfilmlerinin.jpg", director_name: "Yavuz Turgul", isLocal: true, overview: "Aşk filmi çekmekten sıkılmış olan Haşmet, elinde kendi deyimiyle “toplumsal içerik taşıyan dönem filmi” ne ilişkin bir senaryo ile her kapıyı çalar." },
        { title: "Duvara Karşı", poster_path: "images3/duvarakarsi.jpg", director_name: "Fatih Akın", isLocal: true, overview: "Almanya'da yaşayan 40'lı yaşlarındaki Cahit ile genç Sibel intihardan vazgeçmiş 2 insandır. Psikoloğunun yardımıyla sorunlarını bir nebze de olsa yenmeyi başaran Cahit, Sibel'e yardım etmek ister. Sibel'se çıkış yolunu evlilikte arar ve eşi doğru dürüst tanımadığı Cahit olur." },
        { title: "Yol", poster_path: "images3/yol.jpg", director_name: "Yılmaz Güney", isLocal: true, overview: "Yol, yarı açık cezaevinden bir haftalığına izine çıkmış beş mahkumun yol hikayesidir. Önce otobüs ve trenle süren yolculuk boyunca, ayrı ayrı beş mahkumun hayat hikayeleri ve yaşantılarından kesitler aracılığıyla, alabildiğine geniş ve ayrıntılı bir Türkiye panoraması çizer." },
        { title: "Kader", poster_path: "images3/kader.jpg", director_name: "Zeki Demirkubuz", isLocal: true, overview: "Kör düğüm olmuş bir aşk üçgeni, Bekir, Uğur ve Zagor. Bekir Uğur'a, Uğur Zagor'a, Zagor da serseriliğe aşıktır." },
        { title: "Sonbahar", poster_path: "images3/sonbahar.jpg", director_name: "Özcan Alper", isLocal: true, overview: "Yusuf, 1997 yılında 22 yaşında üniversite öğrencisiyken girdiği cezaevinden 10 yıl sonra sağlık nedenleriyle tahliye edilir." },
        { title: "Brothers", poster_path: "images3/brothers.jpg", director_name: "Jim Sheridan", isLocal: true, overview: "Sam Cahill, Afganistan dağlarında terörle savaşmak üzere gönderilmiş bir Amerikan askeridir. Eşi Grace ve çocuklarının yanına erkek kardeşi Tommy taşınır. Tommy kardeşinin ailesini korumak için onların yanındadır, oysa değişken karakteri ve tuhaf alışkanlıkları aile içinde sorun yaratır. Zaman geçtikçe Tommy ve Grace birbirlerini daha iyi anlamaya ve birbirlerinden hoşlanmaya başlarlar. Sam'in Afganistan'da yaşadığı travmalarla birlikte eve dönmesi ise bütün dengeleri değişecektir." },
       
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