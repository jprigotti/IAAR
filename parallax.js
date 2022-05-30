// for heading
window.onload = windowWidthChange;
$(window).scroll(windowWidthChange);
window.addEventListener('resize', windowWidthChange);

function loadPage(){
  alert("Load detected");
}

function windowWidthChange(evento) {
  let imgHeight = document.querySelector(".showcase");
  const
    a = $(this).scrollTop(),
    b = imgHeight.offsetHeight;
    console.log(`a is ${a}`)

    
  // MEDIA QUERY < 576//
  if (window.innerWidth < 576) {

    //Remove Logo Image
    $(".navbarImg").css({
      display: "none",
    });

    // document.querySelector(".navbar-brand").textContent= "IAAR";

    //Update Navbar shadow
    $(".navbar").css({
      backgroundColor: `rgba(52,58,64, 1)`
    });

    //Código para el parallax del Showcase
    $(".parallax").css({
      top: "0 px",
    });



  } else if (window.innerWidth < 992) {
  // MEDIA QUERY < 992//

    //Remove Logo Image
    $(".navbarImg").css({
      display: "none",
    });

    //Update Navbar shadow
    $(".navbar").css({
      backgroundColor: `rgba(52,58,64, 1)`
    });
    
    //Código para el parallax del Showcase
    $(".parallax").css({
      top: a / 1.6 + "px",
    });

  } else {
  // MEDIA QUERY > 992//

     //Add Logo Image
    $(".navbarImg").css({
      display: "contents",
    });

      $(".parallax").css({
        top: a / 1.6 + "px",
      });


      $(".navbar img").css({
        width: `${100 * (1 - (a / b))}`,
        transform: `translateX(-${a / 3}px)`
      });


      $(".navbar").css({
        backgroundColor: `rgba(52,58,64, ${2 * a / b})`
      });

  }
}




// $(window).scroll(function () {
//   //Código para el parallax del Showcase
//   let imgHeight = document.querySelector(".showcase");

//   const
//     a = $(this).scrollTop(),
//     b = imgHeight.offsetHeight;
//   // console.log(`a= ${a}, b= ${b}, a/b)${a / b}`);

//   $(".parallax").css({
//     top: a / 1.6 + "px",
//   });


//   $(".navbarImg img").css({
//     width: `${100 * (1 - (a / b))}`,
//     transform: `translateX(-${a / 3}px)`
//   });


//   $(".parallax").css({
//     top: a / 1.6 + "px",

//   });

//   $(".showcase .shadow").css({

//   });



// if (window.innerWidth > 576){
//   $(".navbar").css({
//     backgroundColor: `rgba(52,58,64, ${2 * a / b})`
//   });
// }

// });


// Parallax 2 ArtGallery
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  console.log(`scrollTop: ${scroll}, screenHeight: ${screenHeight}`);

  $('.parallax2').each(function () {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight

    if (offset > screenHeight && offset) {
      // $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.3) + 'px'); Original Line
      $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.3) + 'px');
    } else {
      // $(this).css('background-position', 'center ' + ((-scroll) * 0.3) + 'px'); Original Line
      $(this).css('background-position', 'center ' + ((-scroll) * 0.3) + 'px');
    }
  })
});

document.addEventListener("scroll", () => {
  const
    top = window.pageYOffset,
    one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five");


});

// Código para expandir los Submenue
let navLink = document.querySelector(".navLink1");
navLink.addEventListener("mouseover", expandDrowpdownMenu);
navLink.addEventListener("mouseleave", compressDrowpdownMenu);

// // let navBarSubMenu = document.querySelector(".navBarSubMenu .nav-link");
// let navBarSubMenu = document.querySelector(".navBarSubMenu");
// navBarSubMenu.addEventListener("mouseover", expandSubMenu);
// navBarSubMenu.addEventListener("mouseleave", compressSubMenu);

function expandDrowpdownMenu() {
  $(".dropDown1").css({
    display: "contents",
  });
}

function compressDrowpdownMenu() {
  $(".dropDown1").css({
    display: "none"
  });
}

// function expandSubMenu(){
//   $(".navBarSubMenuSH").css({
//     display: "contents"
//   });
// }


// function compressSubMenu(){
//   $(".navBarSubMenuSH").css({
//     display: "none"
//   });
// }