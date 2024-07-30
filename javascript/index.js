// PRACTICE

// HOW TO CREATE ANY ARRAY
// METHOD 1: USE ARRAY NOTATION
const array = ['a', 'b', 'c'];
// METHOD 2: USE ARRAY CONSTRUCTOR
const fruits = new Array('apple', 'banana', 'cherry');

//EXAMPLE
// const array = ['Abc', 'xyz']
// console.log(array)
// console.log(new Array('Abc', 'xyz'));

//HOW TO PUSH ELEMENTS TO ARRAY
// METHOD 1: USE PUSH METHOD (PUSHES AT THE END OF THE ARRAY)
// array.push('abc');

// HOW TO POP ELEMENT FROM ARRAY
// METHOD 1: USE POP METHOD (POPS FROM THE END OF THE ARRAY)
// array.pop()

// HOW TO ADD ELEMENT AT THE FIRST POSITION
// USE UNSHIFT METHOD
// array.unshift('a', 'a')

//HOW TO REMOVE FIRST ELEMENT
// USE SHIFT METHOD
// array.shift();

// HOW TO CONCATE (MERGE) ARRAYS (YOU HAVE TO ASSIGN IT TO THE NEW VARIABLE)
// const newArray = array.concat(fruits)
// console.log(newArray)


// ARRAY SLICE (THIS WILL ONLY KEEP THE ELEMENTS WHOSE INDEX ARE PROVIDED)
// const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruitss.slice(-3, -1);
// console.log(fruitss)
// console.log(myBest)

// FILTER ARRAY (IF INDEX IS 1 IT WILL NOT RETURN AND IT WILL BE DELETED FROM THE ARRAY)
// const slicedArray = array.filter((element, index) => {
//     return index === 1 ? !element : element
// })
// console.log(slicedArray)

// MAP ARRAY - ITERATE OVER EACH ELEMENT AND PERFORM SOMETHING
// const arrayMap = array.map((a, index) => {
//     return a + 1
// })
// console.log(arrayMap)

// FOR EACH - same like map
// let a;
// array.forEach((value) => {
//     a = value
// })
// console.log(a)

// const greet = function () {
//     return a = 1;
// }

// greet()

setTimeout(() => {
    return a; // Return the current element so the map function works correctly
}, 1000);
