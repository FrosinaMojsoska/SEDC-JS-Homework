
// for  keyboard input -ascii from clicked number 
//and return ascii to 
function isNumber(number) {

    let numbers = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    for (const num of numbers) {

        if (number === num) {

            return true;
            break;
        }
    }

    return false;

}

function ASCIItoNumber(number) {
    return number - 48;
}


// for  keyboard input -ascii from clicked operator 

function isOperator(operator) {

    //42 * ; 43 + ; 45 - ; 46 . ; 47 / ; 61 = ; 37 % ; 13 - enter
    let operators = [42, 43, 45, , 47, 61, 37, 13];
    for (const i of operators) {

        if (i === operator) {



            return true;
            break;
        }
    }

    return false;

}


function ASCIItoOperator(operator) {
    return String.fromCharCode(operator);
}

// function for operations with two numbers(+,-,/,*,%)
function calculation(obj) {
    if (obj.operator === '+') {
        return obj.first + obj.sec;

    }

    else if (obj.operator === '-') {

        return obj.first - obj.sec;

    }

    else if (obj.operator === '*') {

        return obj.first * obj.sec;


    }

    else if (obj.operator === '/') {

        return obj.first / obj.sec;

    }

    else if (obj.operator === '%') {
        return obj.first % obj.sec;

    }

}