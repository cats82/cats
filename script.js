const tracks = [
    {
        title: "Страсть к курению",
        artist: "Буерак",
        src: "1.mp3",
        cover: "1.png",
        background: "#1e1e1e"
    },
    {
        title: "Маша",
        artist: "СЕРЕГА ПИРАТ",
        src: "2.mp3",
        cover: "2.png",
        background: "#1e1e1e"
    },
    {
        title: "Спокойной ночи",
        artist: "Аудиокассета",
        src: "3.mp3",
        cover: "3.png",
        background: "#1e1e1e"
    },
    {
        title: "Не туда",
        artist: "Холодный звонок",
        src: "4.mp3",
        cover: "4.png",
        background: "#1e1e1e"
    },
    {
        title: "Меня отпускает",
        artist: "Несогласие",
        src: "5.mp3",
        cover: "5.png",
        background: "#1e1e1e"
    },
    {
        title: "Крыша",
        artist: "bishkek",
        src: "6.mp3",
        cover: "6.png",
        background: "#1e1e1e"
    },
    {
        title: "Летний дождь",
        artist: "небо над головой",
        src: "7.mp3",
        cover: "7.png",
        background: "#1e1e1e"
    },
    {
        title: "Тонкая нить",
        artist: "Улица Восток",
        src: "8.mp3",
        cover: "8.png",
        background: "#1e1e1e"
    },
    {
        title: "Мы",
        artist: "Дайте танк (!)",
        src: "9.mp3",
        cover: "9.png",
        background: "#1e1e1e"
    },
    {
        title: "Наваждение",
        artist: "Холодный звонок",
        src: "10.mp3",
        cover: "10.png",
        background: "#1e1e1e"
    },
    {
        title: "На последних трамваях",
        artist: "Едешь",
        src: "11.mp3",
        cover: "11.png",
        background: "#1e1e1e"
    },
    {
        title: "Гипербореи",
        artist: "Чернозем и Звезды",
        src: "12.mp3",
        cover: "12.png",
        background: "#1e1e1e"
    },
    {
        title: "Я хотел быть космонавтом",
        artist: "небо над головой",
        src: "13.mp3",
        cover: "13.png",
        background: "#1e1e1e"
    },
    {
        title: "Наши дни",
        artist: "Улица восток",
        src: "14.mp3",
        cover: "14.png",
        background: "#1e1e1e"
    },
    {
        title: "Дорога, шум и я",
        artist: "Холодный звонок",
        src: "15.mp3",
        cover: "15.png",
        background: "#1e1e1e"
    },
    {
        title: "Поговорить с тобой",
        artist: "Плейлист Венкова",
        src: "16.mp3",
        cover: "16.png",
        background: "#1e1e1e"
    },
    {
        title: "Все Мои Друзья",
        artist: "Валентин Стрыкалo",
        src: "17.mp3",
        cover: "17.png",
        background: "#1e1e1e"
    },
    {
        title: "Аптека",
        artist: "Ночь. Улица. Фонарь",
        src: "18.mp3",
        cover: "18.png",
        background: "#1e1e1e"
    },
    {
        title: "Огни",
        artist: "Холодный звонок",
        src: "19.mp3",
        cover: "19.png",
        background: "#1e1e1e"
    },
    {
        title: "Люди Надоели",
        artist: "Молчат Дома",
        src: "20.mp3",
        cover: "20.png",
        background: "#1e1e1e"
    },
    {
        title: "Лошади",
        artist: "Улица Восток",
        src: "21.mp3",
        cover: "21.png",
        background: "#1e1e1e"
    },
    {
        title: "Механизм",
        artist: "Холодный Звонок",
        src: "22.mp3",
        cover: "22.png",
        background: "#1e1e1e"
    },
    {
        title: "Под песни одиноких планет",
        artist: "Едешь",
        src: "23.mp3",
        cover: "23.png",
        background: "#1e1e1e"
    },
    {
        title: "Таксист",
        artist: "Буерак",
        src: "24.mp3",
        cover: "24.png",
        background: "#1e1e1e"
    },
    {
        title: "Танцы по расчету",
        artist: "Буерак",
        src: "25.mp3",
        cover: "25.png",
        background: "#1e1e1e"
    },
    {
        title: "ответа нет",
        artist: "молчат дома",
        src: "26.mp3",
        cover: "26.png",
        background: "#1e1e1e"
    },
    {
        title: "Белая ночь",
        artist: "Chernikovskaya Hata",
        src: "27.mp3",
        cover: "27.png",
        background: "#1e1e1e"
    },
    {
        title: "Первый снег",
        artist: "Перемотка",
        src: "28.mp3",
        cover: "28.png",
        background: "#1e1e1e"
    },
    {
        title: "Спортивные очки",
        artist: "Буерак",
        src: "29.mp3",
        cover: "29.png",
        background: "#1e1e1e"
    },
    {
        title: "Крыши",
        artist: "Молчат Дома",
        src: "30.mp3",
        cover: "30.png",
        background: "#1e1e1e"
    },
    {
        title: "Вольны",
        artist: "Молчат Дома",
        src: "31.mp3",
        cover: "31.png",
        background: "#1e1e1e"
    },
    {
        title: "Коммерсанты",
        artist: "Молчат дома",
        src: "32.mp3",
        cover: "32.png",
        background: "#1e1e1e"
    },
    {
        title: "Клетка",
        artist: "Молчат Дома",
        src: "33.mp3",
        cover: "33.png",
        background: "#1e1e1e"
    },
    {
        title: "Ответа Нет",
        artist: "Молчат Дома",
        src: "34.mp3",
        cover: "34.png",
        background: "#1e1e1e"
    },
    {
        title: "Это так архаично",
        artist: "Где Фантом?",
        src: "35.mp3",
        cover: "35.png",
        background: "#1e1e1e"
    }, 
];

let currentTrack = 0;

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const progress = document.getElementById('progress');
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const background = document.getElementById('background');

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    albumCover.src = track.cover;
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    background.style.backgroundColor = track.background;
}

function playNextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
}

document.getElementById('prev').addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playButton.innerHTML = '&#10074;&#10074;';
});

document.getElementById('next').addEventListener('click', () => {
    playNextTrack();
    playButton.innerHTML = '&#10074;&#10074;';
});

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    } else {
        audio.pause();
        playButton.innerHTML = '&#9654;'; // Play icon
    }
});

audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.value = percentage;
});

audio.addEventListener('ended', () => {
    playNextTrack();
});

progress.addEventListener('input', () => {
    const time = (progress.value * audio.duration) / 100;
    audio.currentTime = time;
});

// Load the initial track
loadTrack(currentTrack);