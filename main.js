
$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    transitionStyle:"fade",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1      
         },
        1000:{
            items:1
        }
    }
})
// $('.owl-two').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    transitionStyle:"fade",
    items:1,
    singleItem: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2     
         },
        1000:{
            items:3
        }
    }
})

// $(".hamburger").click(function(){
//     $(".hamburgerCLICK").toggle("slow");
//   });
// $(".foto").click(function(){
//     var src=document.getElementById('foto1').src;
//     var img = document.createElement('img');
//     img.src=src;
//     document.getElementById('body').appendChild = img;
// });
