// 1. Write a function that returns the sum of any two integers passed as arguments
function addTwoNumbers(x , y){
  let total = x + y;
  console.log(total);
  return total;
};

// addTwoNumbers(3, 4);

// 2. Write a function that returns the difference of the second argument from the first
function subtractTwoNumbers(x , y){
  let total = x - y;
  console.log(total);
  return total;
};

// subtractTwoNumbers(7, 2);

// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greetUser(firstName) {
  let greeting = `Hello ${firstName}!`;
  console.log(greeting);
  return greeting;
};

// greetUser(`Maggie`);

// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplyTwoNumbers(x , y){
  let total = x * y;
  console.log(total);
  return total;
};

// multiplyTwoNumbers(5, 5);

// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function volume(l, w, h) {
  let total = l*w*h;
  console.log(total);
  return total;
};

// volume(5, 5, 5);

console.log(`The dimensions of the box are ${volume(5, 5, 5)} cubic meters`);
