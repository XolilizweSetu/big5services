document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from auto-submitting
  
    // Get form values
    const fullName = document.querySelector('[placeholder="Siya Killer"]').value;
    const email = document.querySelector('[placeholder="example@gmail.com"]').value;
    const address = document.querySelector('[placeholder="Room Street"]').value;
    const province = document.querySelector('[placeholder="Western Cape"]').value;
    const country = document.querySelector('[placeholder="South Africa"]').value;
    const zip = document.querySelector('[placeholder="7100"]').value;
    const cardName = document.querySelector('[placeholder="Mr Siya Killer"]').value;
    const cardNumber = document.querySelector('[placeholder="1111 2222 3333 4444"]').value;
    const exp = document.querySelector('[placeholder="08/24"]').value;
    const cvv = document.querySelector('[placeholder="123"]').value;
  
    // Validation functions
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!validateCardNumber(cardNumber)) {
      alert("Please enter a valid credit card number.");
      return;
    }
  
    if (!validateCVV(cvv)) {
      alert("Please enter a valid CVV (3 digits).");
      return;
    }
  
    // If all validations pass, proceed with form submission (you can replace this alert with actual processing)
    alert("Form submitted successfully!");
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Credit card number validation function (16 digits)
  function validateCardNumber(cardNumber) {
    const re = /^[0-9]{16}$/;
    return re.test(cardNumber);
  }
  
  // CVV validation function (3 digits)
  function validateCVV(cvv) {
    const re = /^[0-9]{3}$/;
    return re.test(cvv);
  }