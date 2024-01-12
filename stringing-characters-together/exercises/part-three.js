//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language[0] + language[4])
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let abreviation = ((language[0])+(language[4]))
console.log(`The abreviation for JavaScript is ${abreviation}. `)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let mixUp = language.replace('a','s')
console.log(mixUp)
let weirdWay = mixUp.slice(0,2).toUpperCase()
console.log(weirdWay)
console.log(`Weird way to get JavaScript to change to ${weirdWay}`)
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
// let firstWord = notTitleCase.replace(notTitleCase.charAt(0), notTitleCase.charAt(0).toUpperCase());
// let secondWord = firstWord.replace(firstWord.charAt(6), firstWord.charAt(6).toUpperCase());
let titleCase = notTitleCase.replace(notTitleCase.charAt(0), notTitleCase.charAt(0).toUpperCase()).replace(notTitleCase.charAt(6), notTitleCase.charAt(6).toUpperCase());
console.log(titleCase)
