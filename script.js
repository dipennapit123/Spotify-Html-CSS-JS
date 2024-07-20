let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salem-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime < 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
}
else{
      audioElement.pause();
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");

  }
});

//Listen to  Events
myProgressBar.addEventListener("timeupdate", () => {
  console.log('timeupdate')
 

  //Update Seekbar
});
