// (bonus) Write a function that can be called on any object and return its keys and its values in seperate arrays,
// fillout predefined variables keys and values with the correct array i.e.
// let keys = [], values = []
// let person = {
//     name: 'Martina',
//     middleName: 'Luther',
//     lastName: 'Queen'
// }
// person.getKeysAndVals() // with the return result fill the variables acordingly
// // expected
// keys === ['name', 'middleName', 'lastName']
// values === ['Martina', 'Luther', 'Queen']



Object.prototype.getKeysAndVals=function()
{
    let result={}
    let keys=[];
    let values=[];
    
    




    for (const key in this) {

if (this.hasOwnProperty(key))
{
        keys.push(key);
        values.push(this[key])
}
    }
    
 
    result.keys=keys,
    result.values=values
    return result
}




 let person = {
     name: 'Martina',
     middleName: 'Luther',
     lastName: 'Queen',
     
}


let keys;
let values;
console.log(person.getKeysAndVals())
keys=(person.getKeysAndVals()).keys
console.log(keys)
values=(person.getKeysAndVals()).values
console.log(values)