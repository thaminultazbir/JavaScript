function myValidation() {
  const error = document.getElementById('error');
  let text;
  let x = document.getElementById('numb').value;
  if (isNaN(x)) {
    text = 'Number Field should not be empty';
    error.style.color = 'red';
  } else if (x < 1) {
    text = 'Number is too short';
    error.style.color = 'red';
  } else if (x > 10) {
    text = 'Number is too long';
    error.style.color = 'red';
  } else {
    text = 'you enter the correct number';
    error.style.color = 'green';
  }
  error.innerHTML = text;
}
