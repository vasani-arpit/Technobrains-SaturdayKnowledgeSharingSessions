$(document).ready(function () {
    console.log("loaded");
    $("p").click(changeColor);
    $("h1").hover(changeColor);
});
var x,y;
function changeColor() {
    var a=10,b;
    x=10;
    console.log("changeing color");
    console.log("color color1");
    x=20;
    $("p").addClass("changeing");
    x=30;
    changeColor1();
    localStoragep["sample"]="This is test";
}
function changeColor1(){
    console.log("function called");
    x=20;
    console.log("function called2");
    console.log("function called7");
}