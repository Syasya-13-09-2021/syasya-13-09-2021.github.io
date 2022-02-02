const background = document.querySelector('#background'); // background derived from album cover below
const thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

const description = document.querySelector('#desc');
const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songIndexLabel = document.querySelector('.songindex');
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['./assets/music/pinkmatter.mp3', './assets/music/rememberthatnight.mp3', './assets/music/canicallyoutonight.mp3', './assets/music/breathe.mp3', './assets/music/alliwant.mp3']; // object storing paths for audio objects
thumbnails = ['./assets/images/1.png', './assets/images/2.png', './assets/images/3.png', './assets/images/4.png', './assets/images/5.png']; // object storing paths for album covers and backgrounds
songArtists = ['Frank Ocean', 'Sara Kays', 'Dayglow', 'Mako', 'Olivia Rodrigo']; // object storing track artists
songTitles = ["Pink Matter", "Remember That Night", "Can I Call You Tonight", "Breathe", "All I Want"]; // object storing track titles
descriptions = ["This is the first song that you have recommended to me. Even though I actually do not listen to this kind of music but I still hear it everyday because the person who recommended it is so special to me.", "This is the first song in the 'sad' playlist and I always listen to this song when I am sad. During our breakup I listened to this song almost everyday. ", "A very special song, without this song I don't know if I could call you that night when we decided to get back. This song has a special place in my heart <3", "I have become so obsessed with this song. You recommended it to me. It is also the song that I played when I think about you when we broke up.", "This is one of my favourite song in the 'sad' playlist. I really love this song because it sounds so good, or maybe I just love sad song. :)"];

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
var relement = document.getElementById("container");
function restart(){
    relement.style.animationDelay = "0.5s";
    //relement.classList.remove("animate__fadeInRight");
    //relement.classList.remove("animate__fadeInLeft");
    //relement.classList.remove("animate__flipInY");
    relement.classList.remove("animate__fadeIn");
    void relement.offsetWidth;

    relement.classList.add("animate__fadeIn");

    background.classList.remove("animate__fadeIn");
    void background.offsetWidth;

    background.classList.add("animate__fadeIn");

}
function Lrestart(){
    relement.style.animationDelay = "0s";
    relement.classList.remove("animate__fadeInRight");
    relement.classList.remove("animate__fadeInLeft");
    relement.classList.remove("animate__flipInY");

    void relement.offsetWidth;

    relement.classList.add("animate__fadeInLeft");

}

function playPause() {
    if (playing) {
        const song = document.querySelector('#song'),
        thumbnail = document.querySelector('#thumbnail');

        pPause.src = "./assets/icons/pause.png"
        thumbnail.style.transform = "scale(1.15)";
        
        song.play();
        playing = false;
    } else {
        pPause.src = "./assets/icons/play.png"
        thumbnail.style.transform = "scale(1)"
        
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex++;
    if (songIndex > 4) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    songIndexLabel.innerHTML = (songIndex+1)+'/5';
    description.innerHTML = descriptions[songIndex];

    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 4;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    songIndexLabel.innerHTML = (songIndex+1)+'/5';
    description.innerHTML = descriptions[songIndex];

    playing = true;
    playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};