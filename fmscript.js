const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === '') {
    setErrorFor(firstname, 'First Name cannot be empty');
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === '') {
    setErrorFor(lastname, 'Last Name cannot be empty');
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(email, 'Please provide a valid email address');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  // A simple regular expression to validate email format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
