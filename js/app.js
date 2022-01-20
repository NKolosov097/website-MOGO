$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight();
        scrollOffSet = $(window).scrollTop();


        /* Fixed Header */
        checkScrroll(scrollOffSet);

    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop();

        checkScrroll(scrollOffSet);

    });

    function checkScrroll(scrollOffSet) {        
        if( scrollOffSet >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffSet = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500);
    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Collapse */
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        Infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});



















