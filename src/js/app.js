function validateForms(form) {
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
validateForms("#consultation-form");


