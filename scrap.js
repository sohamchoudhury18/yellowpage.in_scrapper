/* global $ */

window.counter = 25;
setInterval(function() {

    if (window.s > 0) {
        $(document).scrollTop($(document).height());
        $(".loadMoreBtn").click();
        window.counter--;
    }
    else {
        clearInterval(this);
    }

}, 1000);
//