// Name: Amrit Kumar dubey| Roll: BCS2025539 | Assignment 14 | Task 2
const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");
