// Write a JavaScript function that reverse a number.

// Sample Data and output: 

// Example x = 32243; 

// Expected Output: 34223

function reverse(num) {
    let reverseNumber = '';
    let number = num.toString();

    for (let i = number.length - 1; i > -1; i--) {
        reverseNumber += number[i];
    }
    return reverseNumber;
}
console.log(reverse(123456));
console.log(reverse(32243));
