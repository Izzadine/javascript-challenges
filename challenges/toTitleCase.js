/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    // turn the first character to upperCase and add the reset to it
    return word[0].toUpperCase() + word.slice(1, word.length);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    // transfor the sentence to an array
    const sentenceArray = str.split(' ');
    // capitalize the first character of each word in the array 
    const capsArray = sentenceArray.map(word => capitalizeWord(word));
    return capsArray.join(' ')
    
}

// Test my functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));