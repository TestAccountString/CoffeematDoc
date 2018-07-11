$(document).ready(function () {
    function navBarFloat() {
        $("#navBar").css({"position": "fixed", "-index": "99"});
        if ($(document).scrollTop() < 40) {
            $("#navBar").css({"position": "relative", "-index": "99"});
        }
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
        navBarFloat();
    });

    navBarFloat();
    positionFooter();
});
