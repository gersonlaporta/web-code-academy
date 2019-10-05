/**
 * 
 */


var doraemon1;

doraemon1 = document.getElementById("doraemon1");

doraemon1.onclick = function (e){
    alert("hola");
    doraemon1.style.left="400px";
    doraemon1.style["left"]="250px";
};


/*
var doraemons;

doraemons = document.querySelectorAll("#fons>div");

console.log(doraemons);

for (i = 0; i < doraemons.length; i++) {
    doraemons[i].onclick = function() {
        alert("hola");
        console.log(doraemons);
        console.log(i);
        console.log(doraemons[i]);
        doraemons[i].style.left = "300px";
        var myNode = e.currentTarget;
        console.log(myNode.style);
        myNode.style.left = "300px";
    }
}
*/