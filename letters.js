const background = document.querySelector('#background'); // background derived from album cover below
const thumbnail = document.querySelector('#thumbnail'); // album cover 

const description = document.querySelector('#desc');
const songIndexLabel = document.querySelector('.lettersindex');
const songTitle = document.querySelector('.letters-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
thumbnails = ['./assets/images/letters1.jpg', './assets/images/letters2.jpg', './assets/images/letters3.jpg', './assets/images/letters4.jpg', './assets/images/letters5.jpg']; // object storing paths for album covers and backgrounds
songTitles = ["Dear Syasya", "For Syasya's Family,", "For mama,", "Syasya,", "You are amazing,"]; // object storing track titles
descriptions = ["First of all I'm sorry because I don't reply earlier. I want to make all this and give to you on 14th Feb but I can't make it on time and I'm sorry .All I can do is apologize and nothing more. I've realized I've been such a dick to you and all the things you said is right. You are truly an amazing partner. The reason why I send you the link of website is just because I want to truly 'give' it to you, cuz I made it for you. I want you to be able to keep it and open in not just keep that website in my computer. It wasn't my intention to make you feel guilty, but in the past I did mention that I feel like you didn't appreciate the website. I was wrong, so wrong. I always say how we should get our emotions together and all but me myself pon always lose control of my own emotions. So I'm sorry. I'm sorry for taking things for granted and let all of this happen. ",
"I'm sorry everyone I can't seem to take care of Syasya properly. I wasn't matured and responsible enough, and I do a lot of stupid mistakes. I'm sorry I can't make it to the wedding and meet everyone. I'm sorry sebab banyak buat salah dekat syasya. I hope and pray everyone is doing well and sentiasa sihat dan murah rezeki.",
"Thank you mama sebab banyak tolong jai. Mama belikan cake untuk birthday jai, mama tolong bukakkan bank account untuk jai. Mama tolong tumpangkan jai pergi KTM. Jai nak minta maaf sebab jai banyak buat salah dekat syasya. Jai banyak pengaruh yang bukan bukan dekat syasya. Jai mintak maaf sebab tak appreciate apa yang banyak mama buat untuk jai. Jai just harap mama maafkan jai. Thank you mama, stay safe and jai doakan mama sentiasa murah rezeki.",
"I'm sorry that I tainted you. I really did, I remembered the first time you said it's okay sebab sya yang mintak jai ajar but i really should know that I never have the right to teach or influence you anything bad. I want to be responsible for it but I just keep on doing more and more mistakes. You deserves so much better syasya, and I'm sorry for not being the best partner for you.",
"Sya, sweetheart you are truly a beautiful sweet cute matured and loving partner. You deserves to be love and to love. Maybe I wasn't even meant to be yours all this while. Or maybe I was but I just messed it all up. I know I said I won't give up but I know you just hate me now. Thank you Sya, I'm beyond grateful to had such lovely partner like you. Thank you for everything you did, spending time with me, accompany me, listen to my problems, cheer up my day, be with me, help me with my problems and all. I still will never give up, I will always try my best to be better and better until I'm truly ready to be a better partner. Even if it's not you in the future, I will still be grateful since you are the one who help be to always be better. You are truly an angel. Keep on being yourself, keep on that contagious pure smile on your face, keep on being the one who brighten the world, maybe not my world, but others. Do what you love to do and don't forget to rest once in a while, appreciate the people around you like how i should have done. Happy belated Valentine's day too sayang, I'm sorry for being a bad partner and messed up our relationship. Like i always said, keep your head up princess, don't let it down, cuz you deserve the whole world and I know you will get it one day. I'm sorry for letting you feel not appreciated and letting you down. Take care syasya."];

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
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
    background.src = thumbnails[songIndex];

    songTitle.innerHTML = songTitles[songIndex];
    songIndexLabel.innerHTML = (songIndex+1)+'/5';
    description.innerHTML = descriptions[songIndex];

}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 4;
    };
    background.src = thumbnails[songIndex];

    songTitle.innerHTML = songTitles[songIndex];
    songIndexLabel.innerHTML = (songIndex+1)+'/5';
    description.innerHTML = descriptions[songIndex];

}


