function rollDicee(){
//for dice 1
let randomNumber1 =Math.floor(Math.random() * 6) +1;

let randomDiceImg ="dice" + randomNumber1 + ".png";//dice 1 to dice 6

let randomImgSource = "images/" + randomDiceImg ;//images /dice1.png - dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource);

// for Dice 2


let randomNumber2 =Math.floor (Math.random() * 6) +1;

let randomImgSource2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//if player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 Wins!";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}
}