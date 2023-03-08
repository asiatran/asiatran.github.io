

let img = document.getElementById('img');

window.addEventListener("scroll", function() {
    img.style.backgroundPosition = +window.pageYOffset+"px"; 

})
