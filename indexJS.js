//Declaracion de variabels
// let paletaColores = ["B5E48C", "99D98C", "76C893", "52B69A", "34A0A4", "168AAD", "1A759F", "1E6091", "184E77"];
let paletaColores = ["005F73", "0A9396", "94D2BD", "E9D8A6", "EE9B00", "CA6702", "BB3E03", "AE2012", "9B2226"];


// for heading
// window.onload = windowWidthChange;
$(window).on("load", function(){
  if (window.innerWidth < 992) {
    //Update Navbar shadow
    $(".navbar").css({
      backgroundColor: `rgba(52,58,64, 1)`
    });
}
});


window.onload = updateCarouselSeparator;
$(window).scroll(windowScrollChange);
window.addEventListener('resize', windowWidthChange);

//Update the paleta de colores
function updateCarouselSeparator() {
  var allCards = document.querySelectorAll('.card');
  let paletaIndex = 0;
  for (var i = 0; i < allCards.length; i++) {
    var self = allCards[i];

    $(`.${self.className.slice(5, 11)} .separatorCard`).css({
      backgroundColor: `#${paletaColores[paletaIndex]}`,
    });

    paletaIndex += 1;
    if (paletaIndex == paletaColores.length) paletaIndex = 0;
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
  console.log(`scrollLeft ${fila.scrollLeft}, offsetwidth ${card.offsetWidth}, scrollLeftMax${fila.scrollLeftMax}`);
if(Number.isInteger(fila.scrollLeft / card.offsetWidth))
(fila.scrollLeft + card.offsetWidth <= fila.scrollLeftMax+1) ? fila.scrollLeft = fila.scrollLeft + card.offsetWidth :
fila.scrollLeft = 0;
});

leftArrow.addEventListener("click", () => {
  console.log("before", fila.scrollLeft, card.offsetWidth);
  if(Number.isInteger(fila.scrollLeft / card.offsetWidth)) fila.scrollLeft -= card.offsetWidth;
  console.log("after", fila.scrollLeft, card.offsetWidth);
});


function windowScrollChange(evento) {
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

       //Código para el parallax del Showcase
    $(".parallax").css({
      top: "0 px",
    });

    $(".publicaciones .card").css({
      minWidth: "100%"
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

    $(".publicaciones .card").css({
      minWidth: "100%"
    });

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

  } else {
    // MEDIA QUERY > 1420//

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

  }
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

  } else {
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
$('form.ajax').submit(function (evento) {

  evento.preventDefault();  // avoid to execute the actual submit of the form.
  if (inputCheck()) {

    //Data already validated - proceed to submit using AJAX-SUBMITFORM
    let that = $(this),
      url = that.attr('action'),
      method = that.attr('method'),
      data = {}; //this is gonna be a JS object holding data

    //Loop through all the elements in the Form

    that.find('[name]').each(function (index, value) {
      var that = $(this),
        name = that.attr('name'),
        value = that.val();

      data[name] = value;

      console.log(data);

    });



    $.ajax({
      method: method,
      url: url,
      dataType: 'json',
      accepts: 'application/json',
      data: data,
      success: (data) => {
        document.querySelector("form.ajax").reset();
        console.log(data);
        updateSubmitButton();

      },
      error: (err) => console.log(err)
    });

    return false;
  }
});


//Function inputCheck, receives the form and returns True ok False error
function inputCheck() {

  let contactForm = document.querySelector(".ajax");
  console.log(contactForm);
  let arrayCheck = []; // este array contiene los valores de cada input y del textarea
  for (i = 0; i < 4; i++)arrayCheck.push(contactForm[i].value);
  console.log(arrayCheck);

  if (arrayCheck.some((item) => item == "")) {  // pregunto si algun item de arrayChek es null
    console.log("complete fields");

    for (i = 0; i < 4; i++) {
      //declaro variables temporales
      let inputClassName = contactForm[i].className.slice(6, contactForm[i].className.length);
      let inputValue = contactForm[i].value;
      let inputParentClassName = contactForm[i].parentNode.className;

      if (inputValue == "") {
        document.querySelector(`.${inputClassName}`).style.border = "1px solid red";
        console.log("input error " + inputParentClassName);
        document.querySelector(`.${inputParentClassName} .inputError`).textContent = "Debe completar este campo";
      } else {
        document.querySelector(`.${inputClassName}`).style.border = "none";
        document.querySelector(`.${inputParentClassName} .inputError`).textContent = "";
      }
    }

    return false;

  } else {
    // los campos fueron completados, pero hay que validar el email

    for (i = 0; i < 4; i++) {
      let inputParentClassName = contactForm[i].parentNode.className;
      document.querySelector(`.${contactForm[i].className.slice(6, contactForm[i].className.length)}`).style.border = "none"; //limpio todos los border red
      document.querySelector(`.${inputParentClassName} .inputError`).textContent = "";
    }

    if (contactForm[2].value.includes('@') && contactForm[2].value.includes('.')) { // valido que el email ingresado sea valido
      return true;
    } else {
      document.querySelector(`.${contactForm[2].className.slice(6, contactForm[2].className.length)}`).style.border = "1px solid red"; //vuelvo a poner border red
      document.querySelector(`.inputAreaEmail .inputError`).textContent = "Debe ingresar un e-mail válido";
      return false;
    }

  }

}

//Funcion que actualiza el Submit Button con OK
function updateSubmitButton() {
  console.log("updateButton");
  $("#formSubmit").val("Enviado");
  $("#formSubmit").addClass("btnSubmit");

  setTimeout(function () {
    $("#formSubmit").val("Enviar");
    $("#formSubmit").removeClass("btnSubmit");
  }, 3000);

}



//Update input style
// var allInput = document.querySelectorAll('.input');

// for (var i = 0; i < allInput.length; i++) {
//   var self = allInput[i];

//   self.addEventListener("click", function (evento) {
//     // prevent browser's default action
//     evento.preventDefault();
//     updateInputForm(this.className.slice(6, 20));
//   });
// }

// function updateInputForm(inputClass){
// console.log(inputClass);
//   $(`.input.${inputClass}`).css({
//     backgroundColor: "#fcfcfc",
//   });
// }