
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
        $("#peopleDetailsT").hide();
        getPeopleData(PeopleUrl)

    })

    $('#getPlanets').on('click', () => {

        $(".logo").hide();
        $("#table").hide();
        $("#spinner").show();
        $(".error-message").hide()
        $("#peopleDetailsT").hide();
        getPlanetsData(PlanetsUrl)
    })




    // console.log(planets)
    //console.log(people)

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
    $("#peopleDetailsT").hide();

    let counter = 1;

    for (const i of people) {

        $("#body").append(`<tr id="${counter}" value="${counter}">
                    <td class="${counter}">${i.name}</td>
                    <td>${i.gender} </td>
                    <td>${i.birth_year} </td>
                    <td>${i.height} </td>
                    <td>${i.mass} </td>
                </tr>`);
        counter++;
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
    $("#peopleDetailsT").hide();


})


$("#search").on("click", () => {
    $("#peopleDetailsT").hide();
    let flag = false;
    $(".error-message").hide()
    let input = $(".form-control").val();
    input = input.toLowerCase();
    if ((planets.length === 0) && (people.length === 0)) {
        $(".error-message").hide()
        $(".error-message").show()

    }
    else {
        $(".error-message").hide()
        let flagName = false;
        for (const p of people) {

            let fullName = ((p.name).toLowerCase()).split(" ");
            fullName.forEach(name => {
                if (name === (input.toString())) {
                    flagName = true;
                }
            })

            // || ((fullName[0])===(input.toString()))
            if ((((p.name).toString()) === (input.toString()))) {
                flagName = true;
            }
            if (flagName) {
                console.log(fullName.length)



                // let fullName = (p.name.split(" "))
                // console.log(fullName[0])
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
                flagName = false;
                break;
            }

        }
        if (!flag) {
            let flagPlanets = false;
            for (const planet of planets) {
                let planetFullName = ((planet.name).toLowerCase()).split(" ")
                planetFullName.forEach(planetName => {
                    if (planetName === (input.toString())) {
                        flagPlanets = true;
                    }
                })

                if (((planet.name).toString()).toLowerCase() === input.toString()) {
                    flagPlanets = true
                }
                if(flagPlanets)
                {
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

$("tbody").on("click", function (e) {

    let id = e.target.parentElement.id;
    let newUrl = PeopleUrl.toString() + `${id}/`;

    getPeopleDetails(newUrl)


})


function getPeopleDetails(newUrl) {
    fetch(newUrl)
        .then(result => result.json())
        .then(result => {

            createPeopleTable(result)
        }


        )
        .catch(error => console.log(error))
}



function createPeopleTable(result) {

    $("#resultPeople").empty();
    $("#table").hide();
    $("#body").empty();
    $("#people").hide();
    if ($("#peopleDetailsT")) {
        $("peopleDetailsT").remove()
    }
    $("body").append(`<div id="peopleDetailsT" >
    <div id="moviesDetails">

    </div></div>`)

    $("#peopleDetailsT").show()


    $((`<ul id="resultPeople"><li><h1>${result.name}</h1></li>
    <li>Height : ${result.height} </li> 
    <li>Mass : ${result.mass} </li>  
    <li>Hair color : ${result.hair_color} </li>    
    <li>Birth year : ${result.birth_year}</li>
    <li>Gender : ${result.gender}</li>
    <li>Eye color : ${result.eye_color}</li>                                         


</ul>`)).prependTo("#peopleDetailsT")

    $("#moviesDetails").empty()

    createListFromMovies(result.films)

}




let titleMovie;
function createListFromMovies(movies) {
    $("#moviesDetails").append("Movies :")

    movies.forEach(film => {
        $("#moviesDetails").append(`<li>${film}</li>`)


    })

}


$('body').on('click', '#moviesDetails', function (e) {

    let movieUrl = e.target;

    if ($("#oneMovieDetails")) {

        $("#oneMovieDetails").remove()
    }
    (async urlDetails => {
        const response = await fetch(urlDetails)
        const result = await response.json()


        $(`<div id="oneMovieDetails"><ul><li id="movieTitle"> Title:  ${result.title}</li>
        <li>Created : ${result.created}</li>
        <li>Director : ${result.director}</li>
        <li>Opening crawl : ${result.opening_crawl}</li>
        </ul></div>
        
        `).appendTo("#peopleDetailsT")
    })(movieUrl.innerHTML)
    console.log(movieUrl.innerHTML)

});

