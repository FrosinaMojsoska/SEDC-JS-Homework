// Write a function that will clean up an array, and return the cleaned up value. 
//Cleaning up of an array consists of removing all falsy values it they appear as elements in the array. 
//If the array has an array as an element, that element should be cleaned up too.

// i.e. if the array is [1, NaN, 2, [3, NaN, 5] ], the result of cleanUp(array) should be [1, 2, [3, 5] ].

// const dataToClean = [1, NaN, 2, [3, NaN,'', 5] ];





function cleanArray(array) {

    clean(array)

    for (const element of array) {

        if (isNestedArray(element)) {
            cleanArray(element)

        }

    }

    return array;

}

console.log(cleanArray([1, '', 2, NaN, [3, NaN, 5], 6, NaN, [7, [8, [10, NaN]], 9]]))
console.log(cleanArray([1, NaN, 2, [3, NaN, '', 5]]))

console.log(cleanArray([NaN, '', 3, [NaN, 4, '', [5]]]))
console.log(cleanArray(['', NaN, 3, [NaN, 4, '', [5]]]))


function isNestedArray(element) {


    if (isNaN(element)) {


        if (element.toString() !== 'NaN') {


            return true;
        }

    }
    else
        return false;
}


let index;
function clean(array) {
    let i = 0;
    cleanSpace(array);


    while (i < array.length) {

        // if (array[i].toString() === '') {
        //     array.splice(i, 1);
        // }

        if (isNaN(array[i])) {


            if (array[i].toString() === 'NaN') {

                array.splice(i, 1);

            }


        }
        i++;
    }
    return array
}
function cleanSpace(array) {
    let i = 0;


    while (i < array.length) {

        if (array[i].toString() === '') {
            array.splice(i, 1);
        }


        i++;
    }
    return array
}