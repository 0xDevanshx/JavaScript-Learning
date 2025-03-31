const name = "Dev"
const repoCount = 24

console.log(name + repoCount+" Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("DELTA-FORCE")       //type - string (object)
// const gameName = "DELTA FORCE"                //type - string(primitive)
// const gameName = new String("DELTA FORCE")    //type - string(primitive)
// ****Take Reference of image of Primitive and Object
console.log(typeof(gameName));

console.log(gameName);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('E'));
console.log(gameName.toLowerCase());

console.log(gameName.length);
console.log(gameName.match());
console.log(gameName.__proto__);

console.log(gameName.strike());
console.log(gameName.split('-')); //string in array
const words = gameName.split('-')
console.log(words[1]);



const newString = gameName.substring(0,3) //cant take -ve value, it convert -ve to 0
console.log(newString);

/* .slice(start, end) extracts a section of the string
 from start index to end index (excluding the character at end).
 Negative indices count from the end of the string.
*/
const anotherSting = gameName.slice(-8,6)   
/*   `slice(-8,6)` means:
- `-8` refers to index `3` (i.e., `'T'`).
- `6` refers to index `6` (i.e., `'F'`).

 Characters from index `3` to `5`: `"TA-"`
*/   
console.log(anotherSting);

const newStringOne = "   trim   "
console.log(newStringOne.trim());
console.log(newStringOne.includes('irm'));
console.log(newStringOne.replace('ri','urn'));


