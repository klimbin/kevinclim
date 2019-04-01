var lastScrollTop = 0;
$(window).scroll(function () {
    // calculate the percentage the user has scrolled down the page
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    // console.log(scrollPercent);
    $(".scene__content").css("left", 55 - scrollPercent + "%");
});
