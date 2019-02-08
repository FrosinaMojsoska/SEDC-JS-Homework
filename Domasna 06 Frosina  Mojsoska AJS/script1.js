// (bonus) Write a function that can be called on any array and return the sum of all the elements in that array that are numbers i.e.

// let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33] 
// arr.getSumOfNumbers(...) // output 52
//1 8 10 33
Array.prototype.getSumOfNumbers=function()
{

    let sum=0;
    this.forEach(element => {
        
        if(typeof(element)==="number")
        {
            sum+=element;
            
        }
            
        
            
    });
    return sum;
}

 let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33] 
 
 console.log(arr.getSumOfNumbers())