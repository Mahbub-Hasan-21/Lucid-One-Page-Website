$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})