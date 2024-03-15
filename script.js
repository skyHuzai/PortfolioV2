document.addEventListener("DOMContentLoaded", function() {
    var divs = document.querySelectorAll('.full-screen-div');
    var currentDivIndex = 0;

    function scrollToNextDiv() {
        if (currentDivIndex < divs.length - 1) {
            currentDivIndex++;
            divs[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    window.addEventListener('scroll', function() {
        if (isScrolledIntoView(divs[currentDivIndex]) === false) {
            scrollToNextDiv();
        }
    });

    function isScrolledIntoView(elem) {
        var rect = elem.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
});