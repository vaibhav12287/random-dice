var d = Math.floor((Math.random()*6)+1);
var e = Math.floor((Math.random()*6)+1);
var a = document.querySelector("h1");
var b = document.querySelectorAll("img")[0]
var c = document.querySelectorAll("img")[1]
b.setAttribute("src","images/dice"+d+".png");
c.setAttribute("src","images/dice"+e+".png");
if(d>e){
  a.innerHTML="Player 1 Wins";
}
else if(d<e){
  a.innerHTML="Player 2 Wins";
}
else{
  a.innerHTML="Both wins";
}
