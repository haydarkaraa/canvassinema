// /api/get-movie.js
export default async function handler(req, res) {
    const { lang = 'tr' } = req.query;
    const API_KEY = "ff03b5e166257c0a8a91dc2a3d85360d"; 

    const weightedDirectors = ["Zeki Demirkubuz", "Stanley Kubrick", "Fatih Akın", "Zeki Demirkubuz", "Ingmar Bergman", "Akira Kurosawa", "Fatih Akın", "Krzysztof Kieślowski","David Lynch","David Fincher"];
    const weightedMovies = ["The Godfather", "The Truman Show", "Citizen Kane", "Mulholland Drive", "Manchester by the Sea", "Holy Spider","American Psycho","Dead Poets Society","Eternal Sunshine of the Spotless Mind","Insomnia","Birdman or (The Unexpected Virtue of Ignorance)","The Grand Budapest Hotel",
        "American History X","The Silence of the Lambs","Jojo Rabbit","Prisoners","Memento","Uncut Gems","Babylon","Der Himmel über Berlin","The Usual Suspects","The Butterfly Effect","The Terminal","Anatomy of a Murder","One Flew Over the Cuckoo's Nest","Interstellar","Cidade de Deus","The Silence of the Lambs",
    "Perfect Days","Sevmek Zamanı","Piano Piano Bacaksız","Susuz Yaz","Duvara Karşı","Southpaw","Fargo","Naked","Zodiac","Shutter Island","Memories of Murder","There Will Be Blood","Lincoln","The Wrestler","Requiem for a Dream","The Elephant Man","Eraserhead","Manchester by the Sea","No Country for Old Men",
"Léon","The Great Dictator","Modern Times","One Flew Over the Cuckoo's Nest","Sarmaşık","Bir Zamanlar Anadolu'da","Filler ve Çimen","Come and See","La Haine","Il buono, il brutto, il cattivo","GoodFellas","Limonata","Sen Aydınlatırsın Geceyi","Dom za vešanje","Подземље","It’s a Wonderful Life","Interstellar",
"Whiplash","Μια αιωνιότητα και μια μέρα","Paris, Texas","The Thing","Nocturnal Animals","Tabutta Rövaşata","Good Bye, Lenin!","Gemide","Laleli'de Bir Azize","Her Şey Çok Güzel Olacak","Nuh Tepesi","Caché","Scent of a Woman","The Zone of Interest","Three Monkeys","They Live","Rain Man","Split","Identity",
"Trois couleurs : Rouge","Trois couleurs : Bleu","Trois couleurs : Blanc","Dzień świra","Whisky","The Man from Earth","Insomnia","Jagten","Nocturnal Animals","Funny Games","PERFECT DAYS","Der Himmel über Berlin"];
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
        { title: "Uzak", poster_path: "images3/uzak.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Yusuf kasabada ona bir gelecek olmadığına karar vererek İstanbul'a gelmiştir. Daha önce şehre yerleşmiş akrabası Mahmut'un yanında kalıp uzaklara giden gemilerde miço olarak iş bulmak ister. " },
        { title: "Sen Aydınlatırsın Geceyi", poster_path: "images3/sengeceyi.jpg", director_name: "Onur Ünlü", isLocal: true, overview: "Cemal, Akhisar'da babası ile aynı evde yaşayan ve aynı berber dükkanında çalışan genç bir adamdır. Herkesin birbirini tanıdığı bu kasabada, gayet sıradan gibi görünen insanların bazı olağanüstü güçleri vardır. Ama hiçbiri süper kahraman değildir, bilakis sıradan problemleri olan, sıradan insanlardır. " },
         { title: "Underground", poster_path: "images3/underground.jpg", director_name: "Emir Kusturica", isLocal: true, overview: "Alman ordusunun bombardımanı altında kalan Belgrad’da komünist Marko’nun hedeflediği ortam fazlasıyla sağlanmıştır. Zekasını sinsiliğiyle birleştiren Marko, arkadaşı Blacky ve yoldaşlarını yeraltında bulunan bir mahzene silah üretmek için yerleştirir. " },
          { title: "İklimler", poster_path: "images3/iklimler.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Farklı bölgelerinin kendine has iklimleri olduğu gibi, ruhların da kendi iklimleri vardır. Üstelik değişmek için mevsimlerin dönüşünü beklemeyen. " },
           { title: "Gemide", poster_path: "images3/gemide.jpg", director_name: "Serdar Akar", isLocal: true, overview: "Mürettebat toplanıp Laleli'ye iner ve Boksör'ün parasını çaldırdığını iddia ettiği bir grup insana saldırır, içlerinden Rumen bir kadını kaçırırlar. Gemiye döndüklerinde esrarlı kafadan dolayı pek bir şey hatırlanmaz ancak Kaptan, kadının geri yollanmasını söyler.. " },
            { title: "Üç Maymun", poster_path: "images3/ücmaymun.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Yaklaşan genel seçimlere bir muhalefet partisinden aday olarak girecek iş adamı Servet, ıssız bir yolda trafik kazası yapar. Ölümle sonuçlanan kaza sırasında araçta bile olmayan şoförü Eyüp’e para verip yalan söyleterek ölümün sorumluluğunu almasını ister. " },
             { title: "Muhsin Bey", poster_path: "images3/muhsinbey.jpg", director_name: "Yavuz Turgul", isLocal: true, overview: "İstanbullu Muhsin Bey, Türk musikisine ve çiçeklerine düşkün, değerlerine bağlı bir 'eski usül' adamdır. 80’lerde hızla değişen şehire, köyden kente göçün getirdiği kültür erozyonuna yabancı ve ilkeleriyle yaşayan bir adam. Bir gün kaset çıkarmak için şehre gelmiş, yanık sesli türkücü Ali Nazik’le kesişir yolları." },
              { title: "Yozgat Blues", poster_path: "images3/yozgatblues.jpg", director_name: "Mahmut Fazıl Coşkun", isLocal: true, overview: "Aldıkları bir iş teklifi sonrasında Yozgat'a taşınan müzik öğretmeni ve şarkıcı Yavuz ve öğrencisi Neşe hayatlarının önemli bir dönüm noktasına adım atmak üzeredir. İcra ettikleri müzik türüyle bu yeni şehirde kimsenin ilgisini çekemeyen ikilinin çabalarına, buraya taşındıkları ilk günlerde tanıştıkları Sabri'nin yardımları da eklenir ancak sonuç yine olumsuzdur. Bu olumsuz sonuç beklenmedik gelişmeleri de beraberinde getirir..." },
               { title: "Kuru Otlar Üstüne", poster_path: "images3/kuruotlar.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Genç bir öğretmen olan Samet, Doğu Anadolu'da zorunlu görevini yapmaktadır. Onun en büyük hayali, zorunlu hizmetini tamamlamasının ardından İstanbul'a tayin olmaktır. Ancak onun hayatı, meslektaşı Kenan ile bir kız öğrenci tarafından asılsız olarak tacizle suçlanmasıyla altüst olur. " },
                { title: "Hakkâri'de Bir Mevsim", poster_path: "images3/hakkari.jpg", director_name: "Erden Kıral", isLocal: true, overview: "Sürgün olarak Hakkari'ye giden bir öğretmenin, orada güçlükler içinde geçirdiği bir kış mevsimi anlatılmaktadır. Film Ferit Edgü'nün romanından uyarlanmıştır. " },
                 { title: "Uzak", poster_path: "images3/uzak.jpg", director_name: "Nuri Bilge Ceylan", isLocal: true, overview: "Yusuf kasabada ona bir gelecek olmadığına karar vererek İstanbul'a gelmiştir. Daha önce şehre yerleşmiş akrabası Mahmut'un yanında kalıp uzaklara giden gemilerde miço olarak iş bulmak ister. " },

    ];

    try {
        const rand = Math.random();
        let selected = null;

        // --- %20 YÖNETMEN ---
        if (rand < 0.2) {
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
        // --- %60 FİLM İSMİ (YÖNETMEN BİLGİSİ EKLENDİ) ---
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