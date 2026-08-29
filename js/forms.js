(function () {
  var form = document.querySelector("[data-appointment-form]");
  if (!form) return;

  var phone = form.querySelector("#phone");
  var error = form.querySelector("[data-form-error]");
  var success = form.querySelector("[data-form-success]");
  var pakistanMobile = /^03\d{2}-?\d{7}$/;

  function setError(message) {
    if (error) error.textContent = message;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    setError("");

    if (!form.checkValidity()) {
      setError("Please complete the required fields before sending.");
      form.reportValidity();
      return;
    }

    if (phone && !pakistanMobile.test(phone.value.trim())) {
      setError("Please enter a Pakistani mobile number, for example 0344-5166788.");
      phone.focus();
      return;
    }

    if (success) {
      success.hidden = false;
      success.focus();
    }
    form.reset();

    // Future hook: send this request to Formspree, EmailJS, PHP mail, or an SMS reminder API.
  });
})();
