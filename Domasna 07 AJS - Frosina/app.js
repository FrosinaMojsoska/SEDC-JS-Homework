$(() => {
    $("#create").on("click", () => {
        $(".modal-content").removeClass('hidden')


    })
    $("#create").on("click", hideAll)
    $("#create").on("click",()=>
    {
        $("#error").addClass('hidden')
    })
    $('.hideAll').on('click', hideAll)
    $('#fighterBuilder').on('click', showFighter)
    $('#cargoBuilder').on('click', showCargo)
    $('#minerBuilder').on('click', showMiner)
    $('#build').on('click', () => {
        let [ship, type] = getVals()
        buildShip(ship, type)
        console.log(ship, type)
        resultShow(shipyard)
        $("#exampleModal").addClass("show")
        $(".modal-content").addClass('hidden')


    })
    $('#build').on('click', clearInputs)


})

let shipyard = [];

const getVals = () => {
    let ship = readInputs()
    let type = getType()

    return [ship, type]
}
let fighterS = {};
let cargoS = {};
let miningS = {};
const buildShip = (ship, type) => {
    switch (type) {
        case 'fighter':
            shipyard.push(new Fighter(ship))
            fighterS = new Fighter(ship)

            break;
        case 'cargo':
            shipyard.push(new Cargo(ship))
            cargoS = new Cargo(ship)
            break;
        case 'miner':
            shipyard.push(new Mining(ship))
            miningS = new Mining(ship)
            break;
        default:
            break;
    }
}


// Try to use one of these two for the homework
// Object.keys
// for..in
function resultShow(shipyard) {

    if (shipyard.length > 2) {

        if ((Object.keys(fighterS).length !== 0) && (Object.keys(cargoS).length !== 0) && (Object.keys(miningS).length !== 0)) {
            shipyard.forEach(ship => {
                if (ship instanceof Fighter) {
                    for (const key in ship) {

                        $("#fighter0").append(`<tr><td>${key} : ${ship[key]}</tr></td>`)

                    }
                }
                else if (ship instanceof Cargo) {
                    for (const key in ship) {

                        $("#cargo0").append(`<tr><td>${key} : ${ship[key]}</tr></td>`)

                    }
                }
                else if (ship instanceof Mining) {
                    for (const key in ship) {

                        $("#mining0").append(`<tr><td>${key} : ${ship[key]}</tr></td>`)

                    }
                }
                $(".card").removeClass('hidden')
                $("#create").addClass('hidden')



            });
        }
        else {


            $("#error").removeClass('hidden')
            fighterS={}
            cargoS={}
            miningS={}
            for (let i=0;i<3;i++)
            {
                shipyard.pop()
            
            }
      
        }
    }

}


