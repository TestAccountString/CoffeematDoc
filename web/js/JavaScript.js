$(document).ready(function () {
    var red;
    var green;
    var blue;

    function reactiveNavBar() {
        red = 255;
        green = 255;
        blue = 255;
        red = red - 1;
        $("#navBar").css("background-color: ", red);
    }

    function positionFooter() {
        if ($(document).height() > $(window).height()) {
            $("#footer").css({
                position: "absolute", top: $(window).height() - $("#footer").height() + $(document).scrollTop()
            });
        } else {
            $("#footer").css({
                position: "static"
            })
        }
    }

    $(window)
        .on("resize", function () {
            positionFooter();
        }).on("scroll", function () {
        positionFooter();
        reactiveNavBar();
    });

    positionFooter();
});
