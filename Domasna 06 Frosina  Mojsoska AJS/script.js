//Create a constructor function for Person with properties 
//{ name, lastName, dateOfBirth, hometown } and add functions sayFullName() and age() 
//to the prototype of the Person constructor function

function Person({name,lastName,dateOfBirth,hometown})
{
    this.name=name,
    this.lastName=lastName,
    this.dateOfBirth=dateOfBirth,
    this.hometown=hometown
}
Person.prototype.sayFullName=function ()
{
    return `${this.name} ${this.lastName}`

}

Person.prototype.age=function()
{

let year=(this.dateOfBirth).substring(6,10)

  return  ( (Number(new Date().getMonth())+1) > Number(this.dateOfBirth.substring(3,5)) ) ?  new Date().getFullYear() - Number(year) :

     new Date().getFullYear() - Number(year)-1;
     
}

 let Frosina=new Person({name:'Frosina',lastName:'Mojsoska',dateOfBirth:'29.07.1996',hometown:'Ohrid'})
// console.log(Frosina)
// console.log(Frosina.sayFullName());
 console.log(Frosina.age())




// Write a constructor function for Trainer with properties 
// { name, lastName, dateOfBirth, hometown, course, yearsOfTeaching } 
// that will have access to the functions from the Person prototype plus a
//  function to its own prototype that will say the number of years the trainer has been teaching given course

// (bonus) use the Person constructor to create the mutual properties
// (bonus) use destructing for the parameters
Trainer.prototype=Object.create(Person.prototype)
function Trainer(object)
{
    let {course,startOfTeaching}=object
    this.course=course
    this.startOfTeaching=startOfTeaching
    Person.call(this,object)
}
Trainer.prototype.yearsOfTeaching=function(){
return new Date().getFullYear()-this.startOfTeaching
}

// date of birth na srekja i po memorija :)
let Dejan=new Trainer({name:'Dejan',lastName:"Jovanov",dateOfBirth:'26.01.1993',hometown:"Skopje",course:"Java Script",startOfTeaching:2018})
console.log(Dejan)
console.log(Dejan.sayFullName());
console.log(Dejan.age())
console.log(Dejan.yearsOfTeaching())

