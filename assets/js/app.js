let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.song__bar');
const songName = document.querySelector('.song__title');
const artistName = document.querySelector('.song__subtitle');
const lyrcsLetter = document.querySelector('.lyrcs__p');
const disk = document.querySelector('.song__img');
const currentTime = document.querySelector('.current__time');
const musicDuration = document.querySelector('.song__duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward');
const backwardBtn = document.querySelector('.backward');
const repeatBtn = document.querySelector('.repeat');

playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play();
    } else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
})

// setup music

const setMusic = (i) => {
    seekBar.value = 0; // set range slide value to 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    lyrcsLetter.innerHTML = song.letter;
    disk.style.backgroundImage = `url('${song.cover}')`;


    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

setMusic(0);

// formating time in min and seconds format

function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + ((sec<10) ? ('0' + sec) : sec);
  }

// seek baar
setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
  if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
      forwardBtn.click();
  }
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}

// forward and backward button
forwardBtn.addEventListener('click' ,() => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click' ,() => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})

// repeat button