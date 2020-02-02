let lastWidth = Infinity;

$(document).ready(function() {
    update_padding();
    if(window.attachEvent) {
        window.attachEvent('onresize', function() {
            update_padding();
        });
    }
    else if(window.addEventListener) {
        window.addEventListener('resize', function() {
            update_padding();
        }, true);
    }
});

function update_padding() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768 && lastWidth > 768) {
        const divs = $(".px-5");

        for (element of divs) {
            console.log(element);
            $(element).removeClass("px-5");
            $(element).addClass("px-3");
        }
    }
    else if (width >= 768 && lastWidth <= 768) {
        const divs = $(".px-3");

        for (element of divs) {
            $(element).removeClass("px-3");
            $(element).addClass("px-5");
        }
    }
    lastWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}