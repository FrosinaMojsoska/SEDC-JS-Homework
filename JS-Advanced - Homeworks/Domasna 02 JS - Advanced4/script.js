// HOMEWORK:
// Make a Person object with the following properties :
// -firstName,
// -lastName,
// -dateOfBirth,
// -placeOfBirth,
// -details() method that will return full name and placeOfBirth
// -calculateAge() method that will return age in (days, months and years)



let arayMonthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//constructor function
function Person(firstName, lastName, dateOfBirth, placeOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.details = function () {
        return `${this.firstName} ${this.lastName} is born in ${this.placeOfBirth}`;
    }
    this.calculateAge = function () {
        let dayOfBirth = this.dateOfBirth.toString().substring(0, 2);
        let monthOfBirth = this.dateOfBirth.toString().substring(3, 5) - 1;
        let YearOfBirth = this.dateOfBirth.toString().substring(6, 10);

        return calculationForAge(dayOfBirth, monthOfBirth, YearOfBirth);

    }
}

let Frosina = new Person('Frosina', 'Mojsoska', '29.07.1996', 'Ohrid');

console.log(Frosina);
console.log(Frosina.details());
console.log(Frosina.calculateAge());


//object


// let FrosinaObject = {
//     firstName: 'Frosina',
//     lastName: 'Mojsoska',
//     dateOfBirth: '29.07.1996',
//     placeOfBirth: 'Ohrid',
//     details: function () {
//         return `${this.firstName} ${this.lastName} is born in ${this.placeOfBirth}`;
//     },
//     calculateAge : function () {
//         let dayOfBirth = this.dateOfBirth.toString().substring(0, 2);
//         let monthOfBirth = this.dateOfBirth.toString().substring(3, 5) - 1;
//         let YearOfBirth = this.dateOfBirth.toString().substring(6, 10);

//         return calculationForAge(dayOfBirth, monthOfBirth, YearOfBirth);

//     }
// }

// console.log(FrosinaObject)
// console.log(FrosinaObject.calculateAge())




// BONUS:
// Make a Family object, that will have :
// -number of members,
// -array of all members,
// -method that will calculate average age of the family,
// -method that will calculate sum of all ages



function Family() {


    this.members = [new Person('Frosina', 'Mojsoska', '29.07.1996', 'Ohrid'), new Person('Liljana', 'Mojsoska', '15.04.1966', 'Ohrid'), new Person('Daniel', 'Mojsoski', '22.02.2001', 'Ohrid')];
    this.NumberOfMembers = this.members.length;

    this.sumOfAges = function () {

        let sum = 0;

        this.members.forEach(element => {
            sum += Number(element.calculateAge().slice(8, 11));



        });
        return sum;
    };

    this.averageOfAges = function () {
        let average = 1;
        return (this.sumOfAges()) / Number(this.members.length)
    }


}
let familyObject = new Family();
console.log(familyObject);
console.log(familyObject.sumOfAges());
console.log(familyObject.averageOfAges());





//function age calculator -  years months and days 
function calculationForAge(dayOfBirth, monthOfBirth, YearOfBirth) {
    let dateNow = new Date();
    let flagDays = true;
    let flagMonth = true;
    let yearsOld = null;
    let monthsOld = null;
    let daysOld = null;
    if ((Number(dateNow.getDate())) >= Number(dayOfBirth)) {
        daysOld = Number(dateNow.getDate()) - Number(dayOfBirth);

    }
    else {


        daysOld = Number(arayMonthDay[dateNow.getMonth()]) - Number(dayOfBirth) + Number(dateNow.getDate());

        flagDays = false;

    }
    if (Number(dateNow.getMonth() > monthOfBirth)) {
        if (flagDays) {
            monthsOld = Number(dateNow.getMonth()) - Number(monthOfBirth);

        }
        else {
            monthsOld = Number(dateNow.getMonth() + 12 - 1) - Number(monthOfBirth);

        }
    }
    else {
        flagMonth = false;
        if (flagDays) {

            monthsOld = Number(dateNow.getMonth() + 12) - Number(monthOfBirth);


        }
        else {

            monthsOld = Number(dateNow.getMonth() + 12 - 1) - Number(monthOfBirth);

        }

    }


    if (flagMonth) {
        yearsOld = Number(dateNow.getFullYear()) - Number(YearOfBirth);

    }
    else {
        yearsOld = Number(dateNow.getFullYear() - 1) - Number(YearOfBirth);

    }


    if (Number(monthsOld) === 12) {
        monthsOld = 0;
        yearsOld = Number(yearsOld) + 1;
    }
    if (Number(daysOld) < 2) {

        return ` You are ${yearsOld} years, ${monthsOld} months and ${daysOld} day old. `
    }

    else {
        return ` You are ${yearsOld} years, ${monthsOld} months and ${daysOld} days old. `
    }
}