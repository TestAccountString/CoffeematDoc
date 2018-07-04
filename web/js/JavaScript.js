$(document).ready(function () {
    $footer = $("#footer");

    function positionFooter() {
        if ($(document).height() > $(window).height()) {
            $footer.css({
                position: "absolute", top: $(window).height() - $footer.height() + $(document).scrollTop()
            });
            console.log($(window).height() - $footer.height());
        } else {
            $footer.css({
                position: "static"
            })
        }
    }

    $(window)
        .on("resize", function () {
            positionFooter();
        }).on("scroll", function () {
        positionFooter();
    });

    positionFooter();
});
