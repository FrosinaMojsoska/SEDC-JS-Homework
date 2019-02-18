$("#startEngine").on("click", () => {

    $("#startEngineMethod").append(`${fighterS.startEngine()}`)
    $("#startEngineMethod").removeClass("hidden")
 
})

$("#takeOff").on("click", () => {

    $("#takeOffMethod").append(`${fighterS.takeOff()}`)
    $("#takeOffMethod").removeClass("hidden")
 
})

$("#land").on("click", () => {

    $("#landMethod").append(`${fighterS.land()}`)
    $("#landMethod").removeClass("hidden")
 
})

$("#startEngine1").on("click", () => {

    $("#startEngineMethod1").append(`${cargoS.startEngine()}`)
    $("#startEngineMethod1").removeClass("hidden")
 
})

$("#takeOff1").on("click", () => {

    $("#takeOffMethod1").append(`${cargoS.takeOff()}`)
    $("#takeOffMethod1").removeClass("hidden")
 
})

$("#land1").on("click", () => {

    $("#landMethod1").append(`${cargoS.land()}`)
    $("#landMethod1").removeClass("hidden")
 
})
$("#startEngine2").on("click", () => {

    $("#startEngineMethod2").append(`${miningS.startEngine()}`)
    $("#startEngineMethod2").removeClass("hidden")
 
})

$("#takeOff2").on("click", () => {

    $("#takeOffMethod2").append(`${miningS.takeOff()}`)
    $("#takeOffMethod2").removeClass("hidden")
 
})

$("#land2").on("click", () => {

    $("#landMethod2").append(`${miningS.land()}`)
    $("#landMethod2").removeClass("hidden")
 
})

$("#shoot1").on("click", () => {

    $("#shoot1Method").append(`${fighterS.shootWeapon1()}`)
    $("#shoot1Method").removeClass("hidden")
 
})

$("#shoot2").on("click", () => {

    $("#shoot2Method").append(`${fighterS.shootWeapon2()}`)
    $("#shoot2Method").removeClass("hidden")
 
})

$("#shoot3").on("click", () => {

    $("#shoot3Method").append(`${fighterS.shootWeapon3()}`)
    $("#shoot3Method").removeClass("hidden")
 
})


$("#load").on("click", () => {

    $("#loadMethod").append(`${cargoS.load()}`)
    $("#loadMethod").removeClass("hidden")
 
})

$("#unload").on("click", () => {

    $("#unloadMethod").append(`${cargoS.unload()}`)
    $("#unloadMethod").removeClass("hidden")
 
})


$("#mine").on("click", () => {

    $("#mineMethod").append(`${miningS.mine()}`)
    $("#mineMethod").removeClass("hidden")
 
})

$("#storageT").on("click", () => {

    $("#storageTMethod").append(`${miningS.storageTemperature()}`)
    $("#storageTMethod").removeClass("hidden")
 
})