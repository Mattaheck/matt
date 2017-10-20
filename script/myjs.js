$(document).ready(function() {

    // Parallax Function
    ////////////////////////////////////////////
    function parallax() {
        var scrolled = $(window).scrollTop();
        $(".front-page").css('top', (scrolled * 0.6) + "px");
    }
    // Parallax Function Execution
    ////////////////////////////////////////////
    $(window).scroll(function() {
        parallax();
    })
    //

    // Top Bar Click Animations
    ////////////////////////////////////////////
    $("#home-button").click(function() {
        $('html, body').animate({scrollTop: (0)}, 500);
    });

    $("#navbar-about").click(function() {
        $('html, body').animate({
            scrollTop: ($("#about-section").offset().top - 50)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#navbar-music").click(function() {
        $('html, body').animate({
            scrollTop: ($("#music-section").offset().top - 50)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#navbar-community").click(function() {
        $('html, body').animate({
            scrollTop: ($("#community-section").offset().top - 50)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#navbar-resume").click(function() {
        $('html, body').animate({
            scrollTop: ($("#resume-section").offset().top - 50)
        }, 500);
    });
    //

});
