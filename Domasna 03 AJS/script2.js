// Write a JavaScript function to convert an amount to coins.

// Sample function : amountToCoins(46, [25, 10, 5, 2, 1]) Here 46 is the amount and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1

//recursion

let result = [];
let coins = [25, 10, 5, 2, 1];
let i = 0;
function amountToCoins(amount, coins) {
    coins = [25, 10, 5, 2, 1];

    if (amount === 0) {

        i = 0;
        return [];
    }


    if (amount > 0) {
        if (Number(amount) >= Number(coins[i])) {

            // result.push(coins[i]);
            amount = Number(amount) - Number(coins[i]);
            return [coins[i]].concat(amountToCoins(amount, coins[i]));

        }
        else {

            i++;

            return amountToCoins(amount, coins[i])
        }

    }
    //  return result;
}


// let coins = [25, 10, 5, 2, 1];
// let result = [];

// function amountToCoins(amount, coins) {
//     result = [];
//     for (let c = 0; c < coins.length; c++) {
//         let i;

//         if (Number(amount) >= Number(coins[c])) {

//             i = Math.floor(Number(amount) / Number(coins[c]));
//             for (let j = 0; j < i; j++) {
//                 amount = Number(amount) - Number(coins[c]);

//                 result.push(coins[c]);

//             }
//         }
//     }
//     return `The amount is ${result.join(", ")} coins`;
// }

// console.log(amountToCoins(46, coins))

// console.log(amountToCoins(55, coins))


console.log(amountToCoins(46, [25, 10, 5, 2, 1]))

console.log(amountToCoins(55, [25, 10, 5, 2, 1]))