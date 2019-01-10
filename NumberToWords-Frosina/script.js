let nulaDoDevet = ["нула", "еден", "два", "три", "четири", "пет", "шест", "седум", "осум", "девет"];
let desetDoDevetnaeset = ["десет", "единаесет", "дванаесет", "тринаесет", "четиринаесет", "петнаесет", "шеснаесет", "седумнаесет", "осумнаесет", "деветнаесет"];
let dvaesetDoSto = ["дваесет", "триесет", "четириесет", "педесет", "шеесет", "седумдесет", "осумдесет", "деведесет"];
let stotki = ["сто", "двесте", "триста", "четиристотини", "петстотини", "шестотини", "седумстотини", "осумстотини", "деветстотини"];


$("button").on("click", () => {



    let number = 0;
    let result = [];
    let n = 0;


    let numberArray = [];

    function check(number) {
        let numberArray = [];


        $("#result").empty();
        if (number.toString().length === 3) {
            n = Number(number);
            numberArray.push(trocifren(n));

            return numberArray;

        }
        else if (number.toString().length === 2) {
            n = Number(number);
            numberArray.push(dvocifren(n));

            return numberArray;


        }
        else {

            n = Number(number);

            if (n !== 0) {
                numberArray.push(ednocifren(n));
                return numberArray;
            }
        }
    }





    function ednocifren(n) {
        for (let i = 0; i < nulaDoDevet.length; i++) {

            if (n === i) {
                return nulaDoDevet[i];
                break;
            }
        }
    }
    function dvocifren(n) {

        let a = [];
        if (parseInt(n / 10) === 1) {

            for (let i = 0; i < desetDoDevetnaeset.length; i++) {
                if (n === i + 10) {
                    return desetDoDevetnaeset[i];
                    break;
                }
            }
        }
        else {
            let cifra = 0;
            cifra = parseInt(n % 10);
            for (let i = 0; i < dvaesetDoSto.length; i++) {


                if (parseInt(n / 10) === i + 2) {

                    a.push(dvaesetDoSto[i]);
                    break;
                }
            }
            if (cifra !== 0) {
                a.push(" и ");
                a.push(ednocifren(cifra));

            }
            return a.join(" ");
        }

    }

    function trocifren(n) {
        let array = [];
        let first = parseInt(n / 100);
        let num = parseInt(n % 100);
        for (let i = 0; i < stotki.length; i++) {

            if (first === i + 1) {
                array.push(stotki[i]);
                array.push(" ");
                break;
            }

        }

        if ((parseInt(num / 10) === 1)) {
            array.push(" и ");
        }


        array.push(dvocifren(num));
        return array.join(" ");
    }





    let resultArray = [];
    function kolkuCifri(number) {
        let NumNumber = Number(number);
        resultArray = [];
        $("#final").empty();
        if ((Math.floor(NumNumber / 1000000000)) !== 0) {

            miliardaF(NumNumber);
        }

        else if ((Math.floor(NumNumber / 1000000)) !== 0) {
            milionF(NumNumber);
        }


        else if ((Math.floor(NumNumber / 1000)) !== 0) {

            iljadaF(NumNumber);
        }

        else {
            $("#final").append(check(NumNumber));

        }






    }
    function miliardaF(NumNumber) {
        resultArray.push(check(Math.floor(NumNumber / 1000000000)));
        if (Math.floor((NumNumber / 1000000000) % 10) === 1) {
            resultArray.push(" - милијарда ");
        }
        else {
            resultArray.push(" - милијарди ");
        }

        if (NumNumber % 1000000000 !== 0) {
            milionF(NumNumber % 1000000000);
        }
        else {
            $("#final").append(resultArray);
        }

    }

    function milionF(NumNumber) {

        resultArray.push(check(Math.floor(NumNumber / 1000000)));
        if (Math.floor((NumNumber / 1000000) % 10) === 1) {

            resultArray.push(" - милион ");
        }
        else {
            resultArray.push(" - милиони ");
        }

        if (NumNumber % 1000000 !== 0) {

            if (parseInt((NumNumber % 1000000) / 1000) !== 0) {
                iljadaF(NumNumber % 1000000);
            }
            else {

                resultArray.push(check(NumNumber % 1000));
                $("#final").append(resultArray);

            }
        }
        else {
            $("#final").append(resultArray);
        }

    }

    function iljadaF(NumNumber) {

        resultArray.push(check(Math.floor(NumNumber / 1000)));

        if (Math.floor((NumNumber / 1000) % 10) === 1) {
            resultArray.push("- илјадa ");
        }
        else {
            resultArray.push("- илјади ");
        }
        if (NumNumber % 1000 !== 0) {
            resultArray.push(check(NumNumber % 1000));
        }
        $("#final").append(resultArray);
    }
    if(($("#inputNumber").val().length)<13)
    {
        $("#error").empty();
    kolkuCifri($("#inputNumber").val());
    }
    else
    {
        $("#final").empty();
        $("#error").text("Внесениот број на цифри треба да биде помал од 13!").css("color","red");
    }




    let rezultat = $("#final").text();
    let r = (($.trim(rezultat).split(" ")));
    let arr = [];
    let finalAr = [];
    for (let i = 0; i < r.length; i++) {
        if (r[i] !== "") {
            arr.push(r[i]);
        }

    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 'еден-') {

            if ((arr[j + 1] === 'илјадa') || (arr[j + 1] === 'милијарда')) {
                finalAr.push('една-')
            }
            else {
                finalAr.push(arr[j]);
                finalAr.push(" ");
            }
        }

        else if (arr[j] === 'два-') {


            if ((arr[j + 1] === 'илјади') || (arr[j + 1] === 'милијарди')) {

                finalAr.push('две-')
            }
            else {
                finalAr.push(arr[j]);
                finalAr.push(" ");
            }
        }
        else {

            finalAr.push(arr[j]);
            finalAr.push(" ");

        }
    }

    $("#final").text(" ");
    $("#final").append(finalAr);


});
