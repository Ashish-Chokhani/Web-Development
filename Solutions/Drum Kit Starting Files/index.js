
var noOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

//Detecting button press
function handleClick(){
  var drumName=this.innerHTML;
  handleSound(drumName);
  this.style.color="white";
  addAnimations(drumName);
}

//Detecting keyboard press
document.addEventListener("keydown",function(event) {
  var keyName=event.key;
  handleSound(keyName);
  addAnimations(keyName);
});

function addAnimations(drumName){
  document.querySelector("." + drumName).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + drumName).classList.remove("pressed")
  },100);
}

function handleSound(drumName){
  switch (drumName) {
    case "w":
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
    break;
    case "a":
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
    break;
    case "s":
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
    break;
    case "d":
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
    break;
    case "j":
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
    break;
    case "k":
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
    break;
    case "l":
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
    break;
    default:
    alert("Wrong Press!");
  }
}
