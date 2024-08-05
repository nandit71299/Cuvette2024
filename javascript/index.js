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

// setTimeout(() => {
//     return a; // Return the current element so the map function works correctly
// }, 1000);


// JAVASCRIPT OBJECTS

const customer = {
};
customer.name = 'nick';
customer.surname = 'idk';
customer.age = 36;
// customer['number'] = 'num'
// console.log(customer)

// DELETING FROM OBJECTS
// delete customer.name;
// console.log(customer)

const leads = {
}
leads.name = 'nick2'
leads.surname = 'idk2'
leads.age = 2;


//MERGING OBJECTS
// const newObj = Object.assign([], customer, leads)
// console.log(newObj)
// console.log({ ...customer, ...leads })


// ITERATING OVER OBJECTS
// for (const cstmer in customer) {
//     console.log(cstmer, ':', customer[cstmer])
// }
// for (const cstmer of customer) {
//     console.log(cstmer, ':', customer[cstmer])
// }


// const keys = Object.keys(leads);
// console.log(keys)

// const values = Object.values(leads);
// console.log(values)


const entries = Object.entries(leads);
// console.log(entries)

// Looping over array of objects and getting key and values
// entries.forEach(([key, value]) => {
//     console.log(value)
// });