const myDisplay = (data) => {
  console.log(data);
};
let x = 0;
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (x == 1) {
      resolve('I love you, Medha');
    } else {
      reject(":'(");
    }
  }, 3000);
});

myPromise.then(
  (data) => {
    myDisplay(data);
  },
  (value) => {
    myDisplay(Error.message);
  }
);
