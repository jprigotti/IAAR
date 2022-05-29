// for heading
window.onload = function () {
  // let navNode = document.querySelector(".navbar-brand");
  // let spanNode = document.createElement("span");
  // spanNode.innerHTML = `<span class="navbarImg"><img src="./images/IAAR.png" alt="Logo CaC"></span>`;
  // spanNode.className = 'navbarImg';
  // navNode.append(spanNode);
}

// MEDIA QUERY //

window.addEventListener('resize', function (event) {
  let newWidth = window.innerWidth;

if (newWidth<576){
  $(".navbar").css({
    backgroundColor: `rgba(52,58,64,1)`
  });
}


  if (newWidth < 992) {
    $(".navbarImg").css({
      display: "none",
    });
  } else {
    console.log("mostrar IMG");
    $(".navbarImg").css({
      display: "contents",
    });
  }
});


$(window).scroll(function () {
  //Código para el parallax del Showcase
  let imgHeight = document.querySelector(".showcase");

  const
    a = $(this).scrollTop(),
    b = imgHeight.offsetHeight;
  // console.log(`a= ${a}, b= ${b}, a/b)${a / b}`);

  $(".parallax").css({
    top: a / 1.6 + "px",
    //opacity:  1 - a / b
  });

  // Este código agrega o remueve una clase dependiendo del scroll en pantalla
  // let navNode = document.querySelector(".navbar-brand");
  // let spanNode = document.createElement("span");
  // spanNode.innerHTML = `<span class="navbarImg order-1"><a href="./code.html" target="_blank"><img src="./images/IAAR.png" alt="Logo CaC"></a></span>`;
  // spanNode.className = 'navbarImg';
  // if (a < 600) {
  //   if (!document.querySelector(".navbarImg")) navNode.append(spanNode);

  // } else {
  //   if (document.querySelector(".navbarImg")) document.querySelector(".navbarImg").remove();
  // }

  //
  $(".navbarImg img").css({
    width: `${100 * (1 - (a / b))}`,
    transform: `translateX(-${a / 3}px)`
  });


  $(".parallax").css({
    top: a / 1.6 + "px",
    //opacity:  1 - a / b
  });

  $(".showcase .shadow").css({
    // backgroundColor: `rgba(73,80,87, ${2*(a/b)})`
  });

  // $(".content").css({
  //   bottom: a * 0.5 + "px",
  //   //opacity: 1 - a / b 
  // });


if (window.innerWidth > 576){
  $(".navbar").css({
    backgroundColor: `rgba(52,58,64, ${2 * a / b})`
  });
}
});


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