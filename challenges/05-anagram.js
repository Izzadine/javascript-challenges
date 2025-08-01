/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    
    const arr1 = str1.split('').sort()
    const arr2 = str2.split('').sort()
    
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    
    return true
    
    

}
// test function
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));



