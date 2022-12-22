let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Natural",
    artist: "Imagine Dragons",
    image: "https://th.bing.com/th/id/OIP.-4DFFbZYm3usWTPDOXXerAHaHa?pid=ImgDet&rs=1?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/IMDNATURAL.mp3"
  },
  {
    name: "Perfect Strangers",
    artist: "Deep Purple",
    image: "https://th.bing.com/th/id/R.be1a9b73a70b87f44c29b943a2a85c8f?rik=HD%2btGHDLhiL1MQ&pid=ImgRaw&r=0?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/deep purple.mp3"
  },
  {
    name: "Hail To The King",
    artist: "ASF",
    image: "https://th.bing.com/th/id/R.c3d3f8a517e61b3a28f7507a18132c11?rik=88LWs8uKfJ2Dvw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-YE9DmoXuSbY%2fUjLLRyLVhBI%2fAAAAAAAABQw%2faha3517s1Yc%2fs1600%2fAvenged_Sevenfold_-_Hail_To_The_King.jpg&ehk=6qqrqg6PA7HhtmEF26gRAfpLzDkKGnRuWBcrOdKWK1o%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/ASFHTK.mp3",
  },
  {
    name: "Hypnotize",
    artist: "SOAD",
    image: "https://media.pitchfork.com/photos/5929a62bea9e61561daa52ef/1:1/w_600/ed2f5909.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/SOAD.mp3",
  },
  {
    name: "Hotel California",
    artist: "Eagles",
    image: "https://th.bing.com/th/id/OIP.wfuJqkAGyq6pBePwqS-IIQHaHa?pid=ImgDet&rs=1?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/CALI.mp3",
  },
  {
    name: "Sen Trope",
    artist: "AZIS",
    image: "https://images-na.ssl-images-amazon.com/images/I/7107mbEMgNL._SX522_.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/AZIS.mp3",
  },
  {
    name: "I WANNA BE YOUR SLAVE",
    artist: "Måneskin",
    image: "https://corp-assets-prod.skiomusic.com/assets/wishlist/maaneskin-moriro-da-re-dabz-remix-stem-pack.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/gei.mp3",
  },
  {
    name: "Unholy",
    artist: "Sam Smith",
    image: "https://th.bing.com/th/id/OIP.XnNUPBQGu0sQ-_wQFvwQJwHaHa?pid=ImgDet&rs=1?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/Unholy.mp3",
  },
  {
    name: "Bloody Stream",
    artist: "Coda",
    image: "https://vignette2.wikia.nocookie.net/jjba/images/3/34/Jojo_OP2.jpg/revision/latest?cb=20121215082647?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/jojogei.mp3",
  },
  {
    name: "Fairytale",
    artist: "Alexander Rybak",
    image: "https://th.bing.com/th/id/OIP.4q2psQFExANhYXikw3wXfwHaHa?pid=ImgDet&rs=1?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/jojogei.mp3",
  },
  {
    name: "Valhala Calling",
    artist: "Peyton Parrish",
    image: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/56/ff/9e/56ff9e82-e618-fa78-f64a-5828c1ad0a27/artwork.jpg/400x400cc.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/VALHALA.mp3",
  },
  {
    name: "Time Back",
    artist: "2Pac",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Tupac_Amaru_Shakur2.jpg",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/TimeBack.mp3",
  },
  {
    name: "Gangsta's Paradise",
    artist: "Coolio ",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e9/Coolio_-_Gangsta%27s_Paradise.jpg",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/GangstaParadise.mp3",
  },
  {
    name: "Mockingbird ",
    artist: "Eminem ",
    image: "https://i.discogs.com/DJlkS4zt8aDnF3UYsw7el-HvNbPcaHlWmTu4plRuZZ0/rs:fit/g:sm/q:90/h:600/w:554/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1MzQ2/MDAtMTYyOTgwNzUx/Mi04NDI0LmpwZWc.jpeg",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/Mockingbird.mp3",
  },
  {
    name: "The Real Slim Shady ",
    artist: "Eminem ",
    image: "https://i.discogs.com/KF1Ohif7t1otwYOWsALQwsk1Gat49muvjbx1jjbAl-U/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0ODE3/NDUtMTQyNjQ5NDEw/MC01OTgwLmpwZWc.jpeg",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/SlimShady.mp3",
  },
  {
    name: "War Of Change ",
    artist: "Thousand Foot Krutch ",
    image: "https://lastfm.freetls.fastly.net/i/u/ar0/6c3e3689e2a776c58407a616dabd89de.jpg",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/WarofChange.mp3",
  },
  {
    name: "Untraveled Road ",
    artist: "Thousand Foot Krutch ",
    image: "https://m.media-amazon.com/images/I/41IEp-mNtvL._SY580_.jpg",
    path: "C:/Users/Student/Desktop/Site Wiktor i Denis/mp3FIles/UntraveledRoad.mp3",
  },
];



function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}