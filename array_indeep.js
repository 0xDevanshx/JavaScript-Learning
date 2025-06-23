const myArr = []
// DebugPrint(myArr)        //to run this, it not simple run in VS TEMINAL

//V8-debug
// ~/.jsvu/bin/v8-debug --allow-nativs-syntax       (run this in terminal)

//OUTPUT

// DebugPrint: 0x166b001c9505: [JSArray]
//  - map: 0x166b000547f9 <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
//  - prototype: 0x166b00054821 <JSArray[0]>
//  - elements: 0x166b000007bd <FixedArray[0]> [PACKED_SMI_ELEMENTS]
//  - length: 0
//  - properties: 0x166b000007bd <FixedArray[0]>
//  - All own properties (excluding elements): {
//     0x166b00000de5: [String] in ReadOnlySpace: #length: 0x166b002027c5 <AccessorInfo name= 0x166b00000de5 <String[6]: #length>, data= 0x166b00000011 <undefined>> (const accessor descriptor, attrs: [W__]), location: descriptor
//  }
// 0x166b000547f9: [Map] in OldSpace
//  - map: 0x166b0004c645 <MetaMap (0x166b0004c695 <NativeContext[301]>)>
//  - type: JS_ARRAY_TYPE
//  - instance size: 16
//  - inobject properties: 0
//  - unused property fields: 0
//  - elements kind: PACKED_SMI_ELEMENTS
//  - enum length: invalid
//  - back pointer: 0x166b00000011 <undefined>
//  - prototype_validity_cell: 0x166b00000ad5 <Cell value= 0>
//  - instance descriptors #1: 0x166b00054e3d <DescriptorArray[1]>
//  - transitions #1: 0x166b00054e5d <TransitionArray[5]>
//    Transitions #1:
//      0x166b00000e81 <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x166b00054e79 <Map[16](HOLEY_SMI_ELEMENTS)>
//  - prototype: 0x166b00054821 <JSArray[0]>
//  - constructor: 0x166b00054749 <JSFunction Array (sfi = 0x166b00207da5)>
//  - dependent code: 0x166b000007cd <Other heap object (WEAK_ARRAY_LIST_TYPE)>
//  - construction counter: 0

// []

//ENDS HERE

//V8 is a high-performance JavaScript engine developed by Google, written in C++.

//jsvu = JavaScript Shell Version Updater
// It's a command-line tool to download and manage standalone JavaScript engines, including:
    // ✅ V8
    // ✅ V8-debug
    // ✅ SpiderMonkey (used by Firefox)
    // ✅ JavaScriptCore (used by Safari)
    // ✅ ChakraCore (from Microsoft)



//Array - elements kind
//continious, Holey

//SMI (small integer)
//Packed element
//Double (float, string, function)

const arrTwo = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS(best type of array - highly optimised)

arrTwo.push(6.0)
//PACKED_DOUBLE_EMEMENTS
//once downgrade, it cant be upgrade back!!
//I mean, once it become double_packed, it cant never become packed_smi

arrTwo.push('7')
//PACKED_ELEMENTS

arrTwo[10]= 11
//HOLEY ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo);
console.log(arrTwo[9]);
console.log(arrTwo[19]);

//if you check any element in array by using arr[x]
//Firtly it do
//1. Bound Check -- if the declared x in arr is out of range of arr.length, simply give undefined
    //if bound check true, then move to next
//2. Object.hasOwnProperty(arrTwo, x);        
    //checks, if index x in arr, has its porperties(you can check properties by console.log(Object.getOwnPropertyDescriptor(arrTwo, x))
    //returns true or false, if true, great, it will return the index, if not (if false), it move to next step
//3. Object.hasOwnProperty(arrTwo.prototype, x);
    //as JS is prototypal nature
    //if false(obviously gonna false as Only constructor functions and classes (like function Foo() {} or class Bar {}) have a .prototype property.)

//4. console.log(Object.hasOwnProperty(Object.prototype, 9));
    //false, because Object.prototype does not have a property called "10"

//all false, then undefined(just beacuse of holey elements)

//holes are very expensive in js    → bad for performance
//since these hasOwnProperty is itself highly expensive, it happening 3 times of holey elements

//✅ Holes in arrays are not because of prototypal inheritance,
// ❗ They're because JavaScript arrays are just objects under the hood.


//SMI>DOUBLE>PACKED>>>>
//H_SMI>H_DOUBLE>H_PACKED

//Most Beginer faultes in JS
const arrThree = new Array(3)
//just 3 holes, HOLEY_SMI_ELEMENTS (it cant never be upgraded)
arrThree[0]='1' //HOLEY_ELEMENTS 
arrThree[1]='2' //HOLEY_ELEMENTS 
arrThree[2]='3' //HOLEY_ELEMENTS 

//Better way
const arrFour = []
arrFour.push('1') //PACKED_ELEMENTS
arrFour.push('2') //PACKED_ELEMENTS
arrFour.push('3') //PACKED_ELEMENTS


const arrFive = [1,2,3,4,5] //PACKED_SMI_EMEMENTS
arrFive.push(NaN)             //PACKED_DOUBLE_EMEMENTS
arrFive.push(Infinity)       //PACKED_DOUBLE_EMEMENTS

//Always try to use these defaults methods rather than making it yourself
//for, for-of, forEach
//they are high optimised, than we make it

