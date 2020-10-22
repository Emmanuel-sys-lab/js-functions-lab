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
 for (let i = 0; i <= 50; i++){
   if (i % 2 === 0){
      console.log(i);
   }
 }
 return `Why is 6 afraid of 7?`;
}
console.log(logEvenNumbers());

// Question 6
function sumFoursAndSevens(num) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i <= num; i ++) {
    if(i%4 === 0 || i%7=== 0){
    sum = sum + i;
    }
  }
  return sum;
}
console.log(sumFoursAndSevens(21));
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
