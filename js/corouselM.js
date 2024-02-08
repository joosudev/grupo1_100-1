document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById("carousel");

    setInterval(function() {
        carousel.scrollLeft += carousel.offsetWidth;
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
            carousel.scrollLeft = 0;
        }
    }, 3000);
});
