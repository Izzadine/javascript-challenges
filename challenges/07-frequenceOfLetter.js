/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
    
    // Solution 1: solved using map function
    // const map = new Map()
    // console.log(map)
    // const arr = str.toLowerCase().split('')
    // for (let char of arr) {
    //     if (char !==' ') {

    //         map.set(char, (map.get(char) || 0) + 1)
    //     }
    // }
    // //    console.log(map)
    // return Object.fromEntries(map.entries())
    
    //Solution 2
    //initialize a object counter
    let  count ={}
    // turn the string to lower case
    let newStr = str.toLowerCase().split(" ").join('')
    //loops through the string
    for(let i=0; i<newStr.length; i++){
        // check if the object already contain the character or no
        if(!count[newStr[i]]){
            count[newStr[i]]= 1
        }else{
            count[newStr[i]] +=1
        }
    }
    return count
}

console.log(countChars("Peggy Porth"));