"use strict";

// get string input from user
let userString = prompt("Please type a word", "fun");

let isThisAPalindrome = palindromeFunction(userString);

// check user string to see if it is a palindrome
function palindromeFunction(userString){

    let palindromeAnswer = "";
    // let comparisonCharacter = "";
    // let comparisonNumber = "";

    // iterate through half of string to check for palindrome
    for(let i = 0; i < userString.length / 2;i++){

        // get the index number for the string character we need
        let comparisonNumber = userString.length - (i + 1);

        // get the character we need to compare the current index character to
        let comparisonCharacter = userString.charAt(comparisonNumber);
        
        // compare letters to see if we might have a palindrome
        if (userString.charAt(i) === comparisonCharacter){
            // if letters match put result in here but keep the loop active
            palindromeAnswer = "This is a palindrome";
        }
        else {
            // if letters don't match put the result in here and end the loop
            palindromeAnswer = "This is not a palindrome";
            break;
        }
    }
    return palindromeAnswer;
}

// out put result
console.log(isThisAPalindrome);