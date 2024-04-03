let first = 0;
let second = 1;
console.log(first + '\n' + second);
const n = 9;
for (i = 0; i < n - 2; i++) {
  next = first + second;
  console.log(next);
  first = second;
  second = next;
}
