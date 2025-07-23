/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(str){
    // check if the string end with !
     if(str.endsWith("!")){
        //yes we add the string "shh..." at the begining , remove the ! and turn all the string to lowercase
       return "shh... " + str.slice(0, str.length-1).toLowerCase()
     }else{
        //No we add string "shh..." and turn all the string to lowercase
        return "shh... " + str.toLowerCase()
     }
}
//Use case for test
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));