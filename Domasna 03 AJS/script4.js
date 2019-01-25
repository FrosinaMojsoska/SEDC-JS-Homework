function find(array) {
    let firstPosiion;
    let i = 0;
    let missingFirst;
    let missingSecond;
    let secondPosition;
    let firstArray = [];
    let secondArray;
    let resultArray
    while (i < array.length) {

        if (Number(array[i + 1]) - Number(array[i]) > 1) {
            missingFirst = Number(array[i + 1]) - 1;

            firstPosiion = i + 1;

            break;
        }
        i++;



    }


    let j = firstPosiion;
    while (j < array.length - 1) {

        if (Number(array[j + 1]) - Number(array[j]) > 1) {

            missingSecond = Number(array[j + 1]) - 1;

            secondPosition = j + 2;

        }

        j++;




    }

    array.splice(firstPosiion, 0, missingFirst);
    array.splice(secondPosition, 0, missingSecond);
    console.log(`Result with missing numbers [${array}]`);
    console.log(`Missing numbers are :`);
    return `[${missingFirst},${missingSecond}]`



}


console.log(find([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19]))
