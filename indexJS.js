//Declaracion de variabels
let paletaColores = ["B5E48C", "99D98C", "76C893", "52B69A", "34A0A4", "168AAD", "1A759F", "1E6091", "184E77"];


// for heading
window.onload = windowWidthChange;
window.onload = updateCarouselSeparator;
$(window).scroll(windowWidthChange);
window.addEventListener('resize', windowWidthChange);

//Update the paleta de colores
function updateCarouselSeparator(){
var allCards = document.querySelectorAll('.card');
let paletaIndex = 0;
for (var i = 0; i < allCards.length; i++) {
  var self = allCards[i];

  $(`.${self.className.slice(5, 11)} .separatorCard`).css({
    backgroundColor: `#${paletaColores[paletaIndex]}`,
  });

  paletaIndex+=1;
if (paletaIndex == paletaColores.length) paletaIndex=0;
}
}

var allCards = document.querySelectorAll('.card');
for (var i = 0; i < allCards.length; i++) {
  var self = allCards[i];

  self.addEventListener('mouseover', function (evento) {
    // prevent browser's default action
    evento.preventDefault();

    // call your awesome function here
    cardDisplay(this.className.slice(5, 11)); // 'this' refers to the current button on for loop
  }, false);

}



var allCards = document.querySelectorAll('.card');
for (var i = 0; i < allCards.length; i++) {
  var self = allCards[i];

  self.addEventListener('mouseleave', function (evento) {
    // prevent browser's default action
    evento.preventDefault();

    // call your awesome function here
    cardHide(this.className.slice(5, 11)); // 'this' refers to the current button on for loop
  }, false);
}

function cardDisplay(card) {
  $(`.${card} .targetClass`).css({
    display: "contents",
  });
}

function cardHide(card) {
  $(`.${card} .targetClass`).css({
    display: "none",
  });
}


// Codigo para el scroll del Carousel
const fila = document.querySelector(".containerCarousel");
const card = document.querySelector(".card");


const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

rightArrow.addEventListener("click", () => {
  console.log(`fila ${fila.offsetWidth}, card ${card.offsetWidth}`)
  // fila.scrollLeft =+ card.offsetWidth*(fila.offsetWidth/card.offsetWidth);
  fila.scrollLeft += card.offsetWidth;
})

leftArrow.addEventListener("click", () => {
  // fila.scrollLeft =- card.offsetWidth*(fila.offsetWidth/card.offsetWidth);
  fila.scrollLeft -= card.offsetWidth;
})


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

    $(".publicaciones .card").css({
      minWidth: "100%"
    });

    fila.scrollLeft = 0;

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

    $(".publicaciones .card").css({
      minWidth: "100%"
    });

    fila.scrollLeft = 0;

  } else if (window.innerWidth < 1420) {
    // MEDIA QUERY < 1420//

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

    $(".publicaciones .card").css({
      minWidth: "33.33%"
    });

  } else{
    // MEDIA QUERY > 992//

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
    
    $(".publicaciones .card").css({
      minWidth: "25%"
    });
    fila.scrollLeft = 0;
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

// CODIGO PARA EL FORM DE CONTACT
// let formSubmit = document.querySelector("#formSubmit");
// formSubmit.addEventListener("click", formSubmit({

// }));



