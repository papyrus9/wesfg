var manzana=["manzana","pera","piña"];
document.getElementById("b").innerHTML=manzana;
document.getElementById("c").innerHTML=manzana[0];
document.getElementById("d").innerHTML=manzana[1];
document.getElementById("e").innerHTML=manzana[2];
document.getElementById("f").innerHTML=manzana.length;
var pera="";
for(var m=0; m<manzana.length; m++){
    pera=pera+manzana[m]+"<br>";
}
document.getElementById("g").innerHTML=pera;