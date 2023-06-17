var random1=Math.floor(Math.random()*6)+1; 
var imageLocation="dice"+random1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", imageLocation);


var random2=Math.floor(Math.random()*6)+1;
var imageLocation2="dice"+random2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", imageLocation2);



if(random1>random2){

    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(random2>random1)
{
    document.querySelector("h1").innerHTML="🚩Player 2 wins!"

}
else
{
    document.querySelector("h1").innerHTML="Draw!"
}