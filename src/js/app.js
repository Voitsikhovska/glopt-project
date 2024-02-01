/*function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Please, enter your name",
        minlength: jQuery.validator.format("Enter {0} symbols"),
      },
      phone: "Please, enter your phone number",
      email: {
        required: "Please, enter your email",
        email: "Uncorrect email",
      },
    },
  });
}
validateForms("#consultation-form");*/



$(document).ready(function () {
  $(".carousel_inner").slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/carousel-left.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/carousel-right.png" /></button>',
    responsive: [

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  });
});

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu_close");
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

