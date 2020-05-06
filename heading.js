let bg = document.getElementById("bg");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let heading = document.getElementById("heading");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value *0.5 + "px";
    mountain.style.top = -value *0.15 + "px"; 
    road.style.top = value *0.15 + "px"; 
    heading.style.top = value *1 + "px"; 
    heading.style.opacity = value *0.5 + 'px';

})