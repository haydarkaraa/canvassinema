// Değişkenler
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const selectionScreen = document.getElementById('selection-screen');
const artGrid = document.getElementById('art-grid');
const resultScreen = document.getElementById('result-screen');
const shareStoryBtn = document.getElementById('share-story-btn');

let currentMovie = null; // Paylaşma için globalde tutuyoruz

// Sanat Eserleri (Dosya yollarının doğruluğundan emin ol)
const artworks = [
    { id: 1, mood: "melancholic", src: "images/art1.jpg" },
    { id: 2, mood: "hopeful", src: "images/art2.jpg" },
    { id: 3, mood: "anxious", src: "images/art3.jpg" },
    { id: 4, mood: "romantic", src: "images/art4.jpg" }
];

// Başla
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    selectionScreen.classList.remove('hidden');
    renderArt();
});

function renderArt() {
    artGrid.innerHTML = '';
    artworks.forEach(art => {
        const img = document.createElement('img');
        img.src = art.src;
        img.addEventListener('click', () => fetchMovie(art.mood));
        artGrid.appendChild(img);
    });
}

async function fetchMovie(mood) {
    selectionScreen.classList.add('hidden');
    try {
        const res = await fetch(`/api/get-movie?mood=${mood}`);
        const data = await res.json();
        currentMovie = data.movie;
        displayResult(currentMovie);
    } catch (err) {
        alert("Film yüklenemedi, lütfen tekrar deneyin.");
        location.reload();
    }
}

function displayResult(movie) {
    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('movie-overview').innerText = movie.overview;
    document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    resultScreen.classList.remove('hidden');
}

// INSTAGRAM STORY OLUŞTURUCU
shareStoryBtn.addEventListener('click', async () => {
    if (!currentMovie) return;
    
    shareStoryBtn.innerText = "Hazırlanıyor...";
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1080;
    canvas.height = 1920;

    // Zemin
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    try {
        // Logo
        const logo = new Image();
        logo.src = 'canvas-logo.svg';
        await new Promise(r => logo.onload = r);
        ctx.drawImage(logo, 390, 150, 300, 100);

        // Poster
        const poster = new Image();
        poster.crossOrigin = "anonymous";
        poster.src = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;
        await new Promise(r => poster.onload = r);
        
        ctx.strokeStyle = '#3b7b75';
        ctx.lineWidth = 15;
        ctx.strokeRect(145, 395, 790, 1190);
        ctx.drawImage(poster, 150, 400, 780, 1180);

        // Yazılar
        ctx.fillStyle = '#e5d1b8';
        ctx.textAlign = 'center';
        ctx.font = 'bold 50px Georgia';
        ctx.fillText(currentMovie.title.toUpperCase(), 540, 1680);
        
        ctx.font = '30px Arial';
        ctx.fillStyle = '#3b7b75';
        ctx.fillText("canvassinema.vercel.app", 540, 1850);

        const link = document.createElement('a');
        link.download = 'canvas-story.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (e) {
        alert("Görsel oluşturulamadı.");
    } finally {
        shareStoryBtn.innerText = "Instagram Hikayede Paylaş";
    }
});