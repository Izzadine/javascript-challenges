/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // SOLUTION 1: using Set function
    // let array =[...new Set(chars)]
    // // console.log(array.join(''))
    // return array.join('')
    
    // SOLUTION 2: using a loop 
    //create a new string
    let originalPassword =''
    //loop in the original string
    for(let i=0; i<chars.length; i++){
        //check if the var original password include this charactrer or no
        //no, add the character
        if(!originalPassword.includes(chars[i])){
           originalPassword+=chars[i] 
        }
        //yes skip this character
    }

    return originalPassword
}

console.log(removeDupeChars(password));
