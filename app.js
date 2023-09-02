var player1Random = Math.floor((Math.random()*6))+1;
var player2Random = Math.floor((Math.random()*6))+1;

document.querySelector(".img1").setAttribute("src","images/dice"+player1Random+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+player2Random+".png");

var result = document.querySelector("h1");

if(player1Random == player2Random){
    result.textContent = "Draw!";
}
else if(player1Random > player2Random){
    result.textContent = "Player 1 wins";
}
else{
    result.textContent = "Player 2 wins";
}