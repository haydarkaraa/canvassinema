// Vercel Serverless Function
// Bu kod sunucuda çalışır, API anahtarınızı gizler.
export default async function handler(req, res) {
    // Sadece GET isteklerine izin ver
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { director, lang } = req.query;
    
    // Vercel panbinden ayarlanacak Ortam Değişkeni
    const API_KEY =  "ff03b5e166257c0a8a91dc2a3d85360d" ; 

    if (!API_KEY) {
        return res.status(500).json({ error: 'Sunucu konfigürasyon hatası (API Key eksik).' });
    }

    try {
        // 1. Adım: Yönetmen ID'sini bul
        const personResp = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(director)}&language=${lang}`);
        
        if (!personResp.ok) throw new Error('TMDB Person API Hatası');
        
        const personData = await personResp.json();

        if (!personData.results || personData.results.length === 0) {
            return res.status(404).json({ error: "Yönetmen bulunamadı." });
        }

        const personId = personData.results[0].id;

        // 2. Adım: Yönetmenin filmlerini (filmografisini) getir
        const movieResp = await fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&language=${lang}`);
        
        if (!movieResp.ok) throw new Error('TMDB Movie Credits API Hatası');
        
        const movieData = await movieResp.json();
        
        // Başarılı yanıtı döndür
        res.status(200).json(movieData);

    } catch (error) {
        console.error("API Hatası:", error);
        res.status(500).json({ error: "TMDB bağlantısında bir sorun oluştu." });
    }
}