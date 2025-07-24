/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    // initialize a new variable with an empty string
    let newStr = ""
    //iterate on the string
    for (let i = 0; i < str.length; i++) {
        //check if the index is even
        if (i % 2 === 0 || i===0) {
            // yes transform the char at this index to upper case and add it to the new string
            newStr += str.charAt(i).toUpperCase()
        }else{
            // yes add the character at this index to the new string
            newStr +=str.charAt(i)
        }
        
    }

    return newStr
}

//Test 
console.log(altCaps("I'm so happy it's Monday"));