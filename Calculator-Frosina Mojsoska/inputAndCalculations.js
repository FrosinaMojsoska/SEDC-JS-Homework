$(document).ready(() => {
    $("#input").empty();

    let counter = 0;
    let obj = {};
    let numberNow = 0;
    let operator = '';
    let res = 0;
    let first = 0;
    let sec = 0;

    let isInputEmpty = false;

    let isDecimalNumber = false;
    let decimalFlag = false;

    let negativeNumber = false;
    //for keyboard input
    $(document).keypress((event) => {


        if (counter === 0) {
            if (Number(event.which) === 45) {

                negativeNumber = true;
            }
        }

        // if input is number
        if (isNumber(event.which)) {



            if (!isInputEmpty) {

                $("#input").empty();
                isInputEmpty = true;
            }

            // 46 is ASCII for point . (decimal number)

            if (event.which !== 46) {
                //if decimalFlag is true 
                if (!decimalFlag) {

                    // if number is not decimal  then
                    $("#input").append(ASCIItoNumber(event.which));
                    $("#result").append(ASCIItoNumber(event.which));
                    numberNow = numberNow * 10 + ASCIItoNumber(event.which);

                    //if number is decimal for value of the number after .
                    if (isDecimalNumber) {

                        numberNow = numberNow * 0.1;
                        numberNow = (parseFloat(numberNow)).toFixed(1);
                        numberNow = Number(numberNow);
                        isDecimalNumber = false;
                        decimalFlag = true;

                    }
                }

                else {


                    numberNow = numberNow.toString() + ASCIItoNumber(event.which);
                    isDecimalNumber = false;
                    numberNow = Number(numberNow);
                    $("#input").append(ASCIItoNumber(event.which));
                    $("#result").append(ASCIItoNumber(event.which));

                }
            }
            //if . is pressed then number is decimal so isDecimalNumber = true 
            else {

                $("#input").append(ASCIItoOperator(event.which));
                $("#result").append(ASCIItoOperator(event.which));
                isDecimalNumber = true;



            }




        }
        //  when number is entered save the number in a variable
        else {
            console.log(first);
            //save current enetered number
            if (first !== 0) {

                $("#input").empty();
                sec = numberNow;
                numberNow = 0;

            }

            else {
                //save previous entered number 
                sec = 0;
                $("#input").empty();
                if (res === 0) {
                    if (negativeNumber) {
                        first = numberNow * (-1);
                    }
                    else {
                        first = numberNow;
                    }

                    numberNow = 0;


                }

            }
            decimalFlag = false;


        }


        //if input is operator
        if (isOperator(event.which)) {
            console.log(first);
            console.log(obj);

            //obj is object which contains the current number as secound and first number is previous entered number and current operator
            obj = {
                first: first,
                sec: sec,
                operator: operator

            }

            console.log(first)
            operator = null;
            operator = ASCIItoOperator(event.which);
            counter++;

            $("#result").append(ASCIItoOperator(event.which));

            res = 0;


            // if there is more then one entered number call function calculation
            if ((counter > 1)) {


                res = calculation(obj);
                first = res;


            }

            // if we press enter or = than show only the final result
            if (operator === '=' || ((event.which).toString() === '13')) {


                $("#input").empty();
                $("#input").append(res);
                $("#result").empty();
                delete obj.first;
                delete obj.sec;
                delete obj.operator;
                sec = 0;
                first = 0;
                res = 0;
                counter = 0;
                isInputEmpty = false;
                negativeNumber = false;


            }
            //show current result in input div
            else {

                $("#input").empty();
                $("#input").append(res);
                isInputEmpty = false;
            }


        }

    });




    //  for input on click
    $("table").on("click", (event) => {

        if (counter === 0) {
            if ($(event.target).attr("id") === 'sub') {

                negativeNumber = true;
            }

        }

        if ($(event.target).attr("class").split(' ')[0] === 'numbers') {

            if (!isInputEmpty) {

                $("#input").empty();
                isInputEmpty = true;
            }

            // if clicked input is number 
            if ($(event.target).attr("class").split(' ')[1] !== 'change') {
                if ($(event.target).attr("id") !== 'point') {
                    if (!decimalFlag) {
                        $("#input").append($(event.target).text());
                        $("#result").append($(event.target).text());
                        numberNow = numberNow * 10 + Number($(event.target).text());


                        if (isDecimalNumber) {


                            numberNow = numberNow * 0.1;
                            numberNow = (parseFloat(numberNow)).toFixed(1);
                            numberNow = Number(numberNow);
                            isDecimalNumber = false;
                            decimalFlag = true;
                        }
                    }

                    else {


                        numberNow = numberNow.toString() + $(event.target).text();
                        isDecimalNumber = false;
                        numberNow = Number(numberNow);
                        $("#input").append($(event.target).text());
                        $("#result").append($(event.target).text());

                    }


                }


                else {
                    console.log(numberNow);
                    $("#input").append($(event.target).text());
                    $("#result").append($(event.target).text());
                    isDecimalNumber = true;


                }



            }
            else {


                if ($(event.target).attr("id") === 'ce') {

                    if (numberNow > 0) {

                        let numLength = (numberNow.toString()).length;
                        let resLength = ($("#result").text().length);
                        let newResult = ($("#result").text().substring(0, resLength - numLength));


                        numberNow = 0;

                        $("#result").empty();
                        $("#result").append(newResult);


                    }

                }
                if ($(event.target).attr("id") === 'x') {

                    if (numberNow > 0) {


                        let numLength = (numberNow.toString()).length;


                        let resLength = ($("#result").text().length);
                        let newResult = ($("#result").text().substring(0, resLength - 1));




                        numberNow = Number((numberNow.toString()).substring(0, numLength - 1));
                        $("#result").empty();
                        $("#result").append(newResult);


                    }

                }



                if ($(event.target).attr("id") === 'sqrt') {

                    let numLength = (numberNow.toString()).length;
                    let resLength = ($("#result").text().length);
                    let newResult = ($("#result").text().substring(0, resLength - numLength));
                    newResult += `${$(event.target).text()}`;

                    newResult += `${numberNow}`;
                    $("#result").empty();
                    $("#result").append(newResult);
                    numberNow = Math.sqrt(Number(numberNow));



                }
                else if ($(event.target).attr("id") === 'power') {
                    numberNow = Number(numberNow) ** 2;
                    $("#result").append(`<sup>${2}</sup>`);

                }
                else if ($(event.target).attr("id") === 'inverse') {
                    let numLength = (numberNow.toString()).length;
                    let resLength = ($("#result").text().length);
                    let newResult = ($("#result").text().substring(0, resLength - numLength));
                    newResult += `1/`;

                    newResult += `${numberNow}`;
                    $("#result").empty();
                    $("#result").append(newResult);
                    numberNow = parseFloat(1 / Number(numberNow));



                }
                else if ($(event.target).attr("id") === 'opposite') {

                    let numLength = (numberNow.toString()).length;
                    let resLength = ($("#result").text().length);
                    let newResult = ($("#result").text().substring(0, resLength - numLength));


                    newResult += `(-`;


                    newResult += `${numberNow})`;
                    $("#result").empty();
                    $("#result").append(newResult);
                    numberNow = Number(numberNow) * (-1);


                }
                $("#input").empty();
                $("#input").append(numberNow);


            }


        }

        else {

            if (first !== 0) {
                $("#input").empty();
                sec = numberNow;
                numberNow = 0;
            }

            else {
                sec = 0;
                $("#input").empty();
                if (res === 0) {
                    if (negativeNumber) {
                        first = numberNow * (-1);
                    }
                    else {
                        first = numberNow;
                    }

                    numberNow = 0;
                }


            }
            decimalFlag = false;



        }



        if ($(event.target).attr("class") === 'operator') {



            obj = {
                first: first,
                sec: sec,
                operator: operator

            }

            operator = null;
            operator = ($(event.target).text());
            counter++;

            $("#result").append($(event.target).text());

            res = 0;

            if ((counter > 1)) {

                res = calculation(obj);
                first = res;


            }

            if (operator === '=') {


                $("#input").append(res);
                $("#result").empty();
                delete obj.first;
                delete obj.sec;
                delete obj.operator;
                sec = 0;
                first = 0;
                res = 0;
                counter = 0;
                isInputEmpty = false;
                negativeNumber = false;

            }
            else {

                $("#input").empty();
                $("#input").append(res);
                isInputEmpty = false;
            }






        }

        if ($(event.target).attr("class") === 'delete') {

            if ($(event.target).attr("id") === 'c') {

                $("#input").empty();
                $("#input").text('');
                $("#result").empty();
                delete obj.first;
                delete obj.sec;
                delete obj.operator;
                sec = 0;
                first = 0;
                res = 0;
                counter = 0;
                isInputEmpty = false;
                negativeNumber = false;

            }





        }



    });



});


