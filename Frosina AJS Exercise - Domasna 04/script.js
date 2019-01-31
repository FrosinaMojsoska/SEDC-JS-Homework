
$("#spinner").append(`<img src="./assets/spinner3.gif"/>`);
$("#spinner").hide();


$(".error").append(`<div class="error-message"><p>No results found. </p></div>`);
$(".error-message").hide()


const PeopleUrl = 'https://swapi.co/api/people/'
const PlanetsUrl = 'https://swapi.co/api/planets/';

let people = [];
let planets = []


$(() => {


    $("#getPeople").on("click", () => {
        $(".logo").hide();
        $("#table").hide();
        $("#spinner").show();
        $(".error-message").hide()
        getPeopleData(PeopleUrl)

    })

    $('#getPlanets').on('click', () => {

        $(".logo").hide();
        $("#table").hide();
        $("#spinner").show();
        $(".error-message").hide()
        getPlanetsData(PlanetsUrl)
    })




    console.log(planets)
    console.log(people)

})

function getPeopleData(PeopleUrl) {
    fetch(PeopleUrl)
        .then(result => result.json())
        .then(result => {
            people.push(...result.results)

            return result
        })
        .then(result => {

            if (result.next)

                getPeopleData(result.next)
            else {

                showPeople(people);
                $("#spinner").hide();

            }
        })
        .catch(error => console.log(error));
}


function getPlanetsData(PlanetsUrl) {

    fetch(PlanetsUrl)
        .then(result => result.json())
        .then(result => {

            planets.push(...result.results)
            return result
        })
        .then(result => {

            if (result.next)

                getPlanetsData(result.next)

            else {
                showPlanets(planets)
                $("#spinner").hide();
            }
        })
        .catch(error => console.log(error))
}

function showPeople(people) {
    $("#table").show();
    $("#body").empty();
    $("#people").show();
    $("#planets").hide();

    for (const i of people) {

        $("#body").append(`<tr>
                    <td>${i.name}</td>
                    <td>${i.gender} </td>
                    <td>${i.birth_year} </td>
                    <td>${i.height} </td>
                    <td>${i.mass} </td>
                </tr>`);

    }




    $("#table").removeClass("display-none")
    $("#people").removeClass("display-none")

}
function showPlanets(planets) {
    $("#table").show();
    $("#body").empty();
    $("#people").hide();
    $("#planets").show();
    for (const planet of planets) {
        $('#body').append(`
        <tr>
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
            <td>${planet.rotation_period}</td>
            <td>${planet.population}</td>
        </tr>
        `)
    }
    $("#table").removeClass("display-none")
    $("#planets").removeClass("display-none")
}

$("#goHome").on("click", () => {
    $("#table").hide();
    $(".logo").show();
    $(".error-message").hide()


})


$("#search").on("click", () => {
    let flag = false;
    $(".error-message").hide()
    let input = $(".form-control").val();

    if ((planets.length === 0) && (people.length === 0)) {
         $(".error-message").hide()
         $(".error-message").show()

     }
     else {
    $(".error-message").hide()
    for (const p of people) {

        if ((p.name).toString()===input.toString()) {


            flag = true;
            $("#table").show();
            $("#body").empty();
            $("#people").show();
            $("#planets").hide();
            $("#body").append(`<tr><td>${p.name}</td>
                                        <td>${p.gender} </td>
                                        <td>${p.birth_year} </td>
                                        <td>${p.height} </td>
                                        <td>${p.mass} </td>
                                        </tr>`)
            $("#table").removeClass("display-none")
            $("#people").removeClass("display-none")
            break;
        }

    }
    if (!flag) {
        for (const planet of planets) {

            if ((planet.name).toString()===input.toString()) {
                $("#table").show();
                $("#body").empty();
                $("#people").hide();
                $("#planets").show();

                $('#body').append(`
                        <tr>
                            <td>${planet.name}</td>
                            <td>${planet.diameter}</td>
                            <td>${planet.climate}</td>
                            <td>${planet.terrain}</td>
                            <td>${planet.rotation_period}</td>
                            <td>${planet.population}</td>
                        </tr>
                        `)
                $("#table").removeClass("display-none")
                $("#planets").removeClass("display-none")
                flag = true;
                break;


            }

        }
    }

    if (!flag) {

        $("#table").hide();
        $("#body").empty();
        $("#people").hide();
        $("#planets").hide();
        $(".error-message").show()

    }
    else {
       

        flag = false;
    }

    }



})

