let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let lengthOfNumber = String(num).length;
console.log(lengthOfNumber)
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let myDecimal = 123.45;
// let decimalString = String(myDecimal)
// let numberOfdigits = decimalString.replace(".", "").length;
// console.log(numberOfdigits);
let numberOfdigits = myDecimal.toString().replace(".", "").length;
console.log(numberOfdigits)
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
// if (String(num).includes('.')){
//     console.log(String(num).length-1);
// } else {
//     console.log(String(num).length);
// }

if (num.toString().includes(".")) {
    let lengthOfNumber = num.toString().replace(".", '').length;
    console.log(lengthOfNumber)
} else{
    let lengthOfNumber = num.toString().length;
    console.log(lengthOfNumber)
} 