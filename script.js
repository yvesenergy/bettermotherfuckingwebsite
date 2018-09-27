setTimeout(function(){
    document.getElementById("popup").setAttribute("style", "display:block");}
, 10000);

function nono(){
    document.getElementById('popup').setAttribute("style", "display:none");
}
function colorf(){
    document.body.style.backgroundColor= "magenta";
    var x = document.getElementsByTagName("P");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.color = "blue";
    x[i].style.fontFamily = "Papyrus";

} 
}