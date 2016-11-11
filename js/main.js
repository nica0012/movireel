    $('.handle').on('click', function () {
        $('nav ul').toggleClass('showing');
    });

    $(window).scroll(function () {
        var h = window.innerHeight;
        $(window).on('scroll', function () {
            var st = $(this).scrollTop();
            $('#headHome').css('opacity', (1 - st / 350));
            $('.ul-fade').css('opacity', (1 - st / 20));
            $('#mock-showcase').css('opacity', (1 - st / 3700));
        });

    });


    jQuery(function ($) {

        // Function which adds the 'animated' class to any '.animatable' in view
        var doAnimations = function () {

            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');

            // Unbind scroll handler if we have no animatables
            if ($animatables.width() == 0) {
                $(window).off('scroll', doAnimations);
            }

            // Check all animatables and animate them if necessary
            $animatables.each(function (i) {
                var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animatedScroll');
                }
            });

        };

        // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');

    });


    // Scroll on click

    $(".downHead").click(function () {
        $('html, body').animate({
            scrollTop: $("#open-reels").offset().top
        }, 800);
        return false;

    });
    $(".downOR").click(function () {
        $('html, body').animate({
            scrollTop: $("#customize").offset().top
        }, 800);
        return false;

    });
    $(".downPreview").click(function () {

        $('html, body').animate({
            scrollTop: $("#preview").offset().top
        }, 800);
        return false;


    });
    $(".upFooter").click(function () {
        $('#blueReel').toggleClass('rotated');

        $('html, body').animate({
            scrollTop: $(".scrollDestinationHead").offset().top
        }, 800);
        return false;

    });
    

    //var images = ['lake-louise-overlay.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpeg', 'bg5.jpeg'];
    //$('.loginBody').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
    //
    //$('.loginBody').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

    //
    //
    //    $('.message a').click(function () {
    //        $('form').animate({
    //            height: "toggle",
    //            opacity: "toggle"
    //        }, "slow");
    //    });

//
//    var colors = new Array(
//  [90, 115, 255], [125, 145, 255], [90, 115, 255], [71, 99, 255], [71, 92, 209], [133, 151, 255]);
//
//    var step = 0;
//    //color table indices for: 
//    // current color left
//    // next color left
//    // current color right
//    // next color right
//    var colorIndices = [0, 1, 2, 3];
//
//    //transition speed
//    var gradientSpeed = 0.005;
//
//    function updateGradient() {
//
//        if ($ === undefined) return;
//
//        var c0_0 = colors[colorIndices[0]];
//        var c0_1 = colors[colorIndices[1]];
//        var c1_0 = colors[colorIndices[2]];
//        var c1_1 = colors[colorIndices[3]];
//
//        var istep = 1 - step;
//        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
//        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
//        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
//        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
//
//        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
//        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
//        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
//        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
//
//        $('.loginBody').css({
//            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
//        }).css({
//            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
//        });
//
//        step += gradientSpeed;
//        if (step >= 1) {
//            step %= 1;
//            colorIndices[0] = colorIndices[1];
//            colorIndices[2] = colorIndices[3];
//
//            //pick two new target color indices
//            //do not pick the same as the current one
//            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
//            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
//
//        }
//    }
//
//    setInterval(updateGradient, 10);