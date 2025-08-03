import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    const savory= arr.reduce((accu,currentValue)=>{
        if(currentValue.type==="savory"){
            console.log(currentValue.type)
           return  accu + currentValue.price
        }
        return accu
    },0)
    return savory
}

console.log(totalSavory(shoppingCart));

