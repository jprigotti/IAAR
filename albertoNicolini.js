$('.buttonMaximize').click(function (event) {
    $('body, html').scrollTop(0);
        $('.popup').css({ 'display': 'block' });
        $("body").css("overflow", "hidden");
});

$('.popupContainerClose').click(function (event) {
    $('.popup').css({ 'display': 'none' });
    $("body").css("overflow", "visible");
});