/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]
// eggScrambleRecipe.pop()
// console.log(eggScrambleRecipe.pop())
function removeDupesFromArray(arr) {
    // SOLUTION 1: using a build function "set"
    // return [...new Set(arr)]

    //SOLUTION 2:
    //  create a new arry
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i])
        }

    }

    return arr2
}

console.log(removeDupesFromArray(eggScrambleRecipe));