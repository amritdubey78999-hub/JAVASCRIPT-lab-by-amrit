// Name: Amrit kumar dubey | Roll: BCS2025539 | Assignment 12 | Task 1
function applyTwice(fn, value) {
  const result = fn(value);
  return fn(result);
}

function addTen(n) {
  return n + 10;
}

console.log(applyTwice(addTen, 5));
