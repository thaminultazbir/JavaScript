const myDisplay = (some) => {
  console.log(some);
};

let myPromise = new Promise((resolve, reject) => {
  let x = 3;

  if (x == 0) {
    resolve('OK');
  } else {
    reject('Error');
  }
});

myPromise.then(
  function (value) {
    myDisplay(value);
  },
  function (value) {
    myDisplay(Error);
  }
);
