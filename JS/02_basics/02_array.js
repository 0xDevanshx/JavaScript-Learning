const marvel_heroes = ["thor", "spiderman", "ironman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)   //modifies the original array & Returns the new length of the array
// console.log(marvel_heroes);

marvel_heroes.concat(dc_heroes)  //Does NOT modify the original array.
const allHeroes= marvel_heroes.concat(dc_heroes)  ///Used for merging arrays & Returns a new array
console.log(allHeroes);

//using spread
const all_new_heroes= [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const another_array = [1 , 2,3,[4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Dev"));
console.log(Array.from("Dev"));
console.log(Array.from({name : "Devansh"})); //interesting

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  //conterting into array
