// Name: Amrit Kumar dubey  | Roll: BCS2025539 | Assignment 14 | Task 3
let count = 0;

const id = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(id);
  }
}, 200);
