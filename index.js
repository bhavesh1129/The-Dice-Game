var randomVariable1 = Math.floor(Math.random() * 6) + 1; //Gives a number between 1 to 6

var randomDiceImage1 = "dice" + randomVariable1 + ".png"; //Gives an image between dice number 1 to dice number 6

var randomDiceSourceFolder1 = "images/" + randomDiceImage1; //Gives the extact location of dice image

var firstImage = document.querySelectorAll("img")[0]; //First image of dice

firstImage.setAttribute("src", randomDiceSourceFolder1);



var randomVariable2 = Math.floor(Math.random() * 6) + 1; //Gives a number between 1 to 6

var randomDiceImage2 = "dice" + randomVariable2 + ".png"; //Gives an image between dice number 1 to dice number 6

var randomDiceSourceFolder2 = "images/" + randomDiceImage2; //Gives the extact location of dice image

var secondImage = document.querySelectorAll("img")[1]; //Second image of dice

secondImage.setAttribute("src", randomDiceSourceFolder2);

if (randomVariable1 > randomVariable2) {
    document.querySelector("h2").innerHTML = "🚩Player1 Wins";
} else if (randomVariable1 < randomVariable2) {
    document.querySelector("h2").innerHTML = "Player2 Wins🚩";
} else {
    document.querySelector("h2").innerHTML = "Draw😃";
}