var rn1 = Math.floor(Math.random() * 6) + 1;
var rnimg1 = "images/dice" + rn1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rnimg1);

var rn2 = Math.floor(Math.random() * 6) + 1;
var rnimg2 = "images/dice" + rn2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rnimg2);

if (rn1 < rn2)
{
    document.querySelector("h2").innerHTML="player 2 won";
}else if(rn2 < rn1){
    document.querySelector("h2").innerHTML="player 1 won";
}else if(rn2 === rn1){
    document.querySelector("h2").innerHTML="Draw";
}
