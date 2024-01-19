const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
let modifiedStr = str.slice(3) + newStr
console.log(modifiedStr)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original: ${removedChars}`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userNum = Number(input.question("Please input number of letters to remove: "));


console.log(userNum);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userNum > str.length | userNum < 0){
    newStr = newStr = str.splice(0,3);
    modifiedStr = str.slice(3) + newStr
    console.log(modifiedStr)
}else{
    newStr = newStr = str.splice(0,3);
    modifiedStr = str.slice(3) + newStr
    console.log(modifiedStr)
