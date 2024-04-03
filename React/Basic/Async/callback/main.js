const myDisplay = (some) => {
  document.getElementById('demo').innerHTML = some;
};

const getFile = (myCallback) => {
  let req = new XMLHttpRequest();
  req.onload = () => {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback('Error: ' + req.status);
    }
  };
  req.open('GET', './test.html');
  req.send();
};
getFile(myDisplay);
