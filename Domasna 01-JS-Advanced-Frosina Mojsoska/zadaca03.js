// Write a JavaScript function that accepts a string 
// as a parameter and find the longest word 
// within the string.

// Sample Data and output: 

// Example string: 'Web Development Tutorial'; 

// Expected Output: 'Development';




function longestString(string) {
    let longestWord = '';
    let letterCounter = 0;
    let word = "";
    for (const char of string) {
        if (char.charCodeAt(0) !== 32) {

            letterCounter++;
            word += char.toString();

        }
        else {
            if (longestWord.toString().length < letterCounter) {
                longestWord = word;
            }
            letterCounter = 0;
            word = "";
        }



    }
    // for last word
    return (word.toString().length > longestWord.toString().length) ? word : longestWord;


}

console.log(longestString('Web Development Tutorial'));
console.log(longestString('Frosina Mojsoska'));
