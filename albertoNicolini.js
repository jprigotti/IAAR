$('.buttonMaximize').click(function (event) {
    document.querySelector("body").style.overflowY = 'hidden';
    $('body, html').scrollTop(0);
    $('.popup').css({ 'display': 'block' });
});

$('.popupContainerClose').click(function (event) {
    $('.popup').css({ 'display': 'none' });
    $("body").css("overflow", "visible");
});