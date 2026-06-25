/* ■ capitalize(str): Converts the first letter of a string to
uppercase.
■ reverse(str): Reverses the characters in a string.
■ contains(str, substr): Checks if a substring exists within a
string and returns true or false.*/

 function capitalizeStr(str) {
return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
//console.log(capitalizeStr("hello world."));

 function reverseStr(str) {
return str.split("").reverse().join("");
}
//console.log(reverseStr("hello world."));

 function containsStr(str, substr){ 
return str.includes(substr);
}
//console.log(containsStr("hello world", "world"));

module.exports ={capitalizeStr,reverseStr,containsStr};