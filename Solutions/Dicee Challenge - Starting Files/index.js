var randomNumber1=Math.floor(Math.random()*6)+1;

var des=document.querySelector(".img1");
if(randomNumber1===1){
  des.src="./images/dice1.png";
}
else if(randomNumber1===2){
  des.src="./images/dice2.png";
}
else if(randomNumber1===3){
  des.src="./images/dice3.png";
}
else if(randomNumber1===4){
  des.src="./images/dice4.png";
}
else if(randomNumber1===5){
  des.src="./images/dice5.png";
}
else if(randomNumber1===6){
  des.src="./images/dice6.png";
}

var randomNumber2=Math.floor(Math.random()*6)+1;
var des=document.querySelector(".img2");
if(randomNumber2===1){
  des.src="./images/dice1.png";
}
else if(randomNumber2===2){
  des.src="./images/dice2.png";
}
else if(randomNumber2===3){
  des.src="./images/dice3.png";
}
else if(randomNumber2===4){
  des.src="./images/dice4.png";
}
else if(randomNumber2===5){
  des.src="./images/dice5.png";
}
else if(randomNumber2===6){
  des.src="./images/dice6.png";
}

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
