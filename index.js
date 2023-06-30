var randomNo1 = Math.floor(Math.random()*6+1);
var randomDiceImage = "dice" + randomNo1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNo2 = Math.floor(Math.random()*6 +1);
// it's written to the sequence name of files that dice[no].png, 
// so "dice" + randomNo1 + ".png"
var randomDiceImage2 = "dice" + randomNo2 + ".png";
// original source in HTML code: "images/dice6.png"
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);
if(randomNo1 === randomNo2){
    document.querySelector("h1").innerHTML = "Match Draw! Better luck next time";
}
if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNo1 < randomNo2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw!";
}