console.log("JS")

//Button to Top
var scrollToTop = {
    init: function () {
        console.log("scrollToTop")
        const $scrollButton = $('#scrollToTopBtn');

        function showButton() {
            if ($(window).scrollTop() > 150) {
                $scrollButton.stop(true, true).fadeIn();
            } else {
                hideButton();
            }
        }

        function hideButton() {
            $scrollButton.stop(true, true).fadeOut();
        }

        $(window).scroll(function () {
            showButton();
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function () {
                hideButton();
            }, 2000));
        });

        $scrollButton.click(function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    }
}


$(function () {
    console.log("JQuery")
    scrollToTop.init();
})