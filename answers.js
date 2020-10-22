// Question 1
function hello(name) {
 return`Hello, ${name}!`;
}
  console.log(hello ("Emmanuel"))
  
// Question 2
function findProduct(num1, num2) {
  return num1 * num2 ;
}
 console.log(findProduct(5,10));
// Question 3
function getSquare(num) {
  //Write your code here
  return num*num;
}
console.log(getSquare(2));
// Question 4
function makeOpposite(num) {
  return -num;
  //Write your code here
}
console.log(makeOpposite(3));
// Question 5
function logEvenNumbers() {
  // Write your code here
}

// Question 6
function sumFoursAndSevens() {
  // Write your code here
}

// Question 7
function exsAndOhs() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  hello,
  getSquare, 
  makeOpposite,
  logEvenNumbers,
  findProduct,
  sumFoursAndSevens,
  exsAndOhs,
};
