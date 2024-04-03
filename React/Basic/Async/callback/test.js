function Display() {
  document.getElementById('demo').innerHTML = this.responseText;
}
//var XMLHttpRequest = require('xhr2');
const req = new XMLHttpRequest();
req.addEventListener('load', Display);
req.open('GET', './test.html');
req.send();
