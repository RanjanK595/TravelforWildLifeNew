//const multipleItemCarousel = document.querySelector("#carouselExampleControls");

//if (window.matchMedia("(min-width:576px)").matches) {
//    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
//        interval: false
//    });

//    var carouselWidth = $("#carouselExampleControls .carousel-inner")[0].scrollWidth;
//    var cardWidth = $("#carouselExampleControls .carousel-item").width();

//    var scrollPosition = 0;

//    $("#carouselExampleControls .carousel-control-next").on("click", function () {
//        if (scrollPosition < carouselWidth - cardWidth * 4) {
//            console.log("next");
//            scrollPosition = scrollPosition + cardWidth;
//            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//        }
//    });
//    if (scrollPosition < carouselWidth - cardWidth * 4) {
//        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//            if (scrollPosition > 0) {
//                console.log("prev");
//                scrollPosition = scrollPosition - cardWidth;
//                $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//            }
//        });
//    } else {
//        $(multipleItemCarousel).addClass("slide");
//    }
//}
function CarosoulSlidersettings() {
    let items = document.querySelectorAll('#recipeCarousel.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}

