var cars = ['Ford','Ferrari','BMW']
var cars2 = new Array('BMW','Ferrari','Ford') //Using new keyword
var points = new Array(40, 100); //create array which contain 40 & 100
var points2 = new Array(40); //it may create array of 40 elements
//not recommanded to use the new keyword while creating array

console.log(typeof cars) //object
console.log(typeof cars2) //object


//-----------------------------------------------------------
//How to recognize ab array
//1. Array.isArray(array)
console.log(Array.isArray(cars)) //true

//2. instanceof Array
console.log(cars instanceof Array) //true


//-----------------------------------------------------------
//Looping array elements
//1. simple for loop
for(let i=0;i<cars.length;i++){
    console.log(cars[i])
}

//2. foreach loop
cars.forEach(car => console.log(car))


//-----------------------------------------------------------
//Add/Remove elements to/from array
//1. push
cars.push('Toyota') //it will return the new length of array

//2. length
cars[cars.length] = 'KIA'

//3 index 
cars[10] = 'Mahindra' //can create undefined holes in array //not recommanded
console.log(cars)

//4 pop
cars.pop() //remove the last element from an array

//5 shift
cars.shift() //removes the first element and shifts all elements to lower index

//6 unshift
cars.unshift('tata') //add element at first position and unshifts older elements

//7 delete
delete cars[0] //changes the first element to undefined //not recommanded

//-----------------------------------------------------------
//Note 
//JavaScript does not support arrays with named indexes.
//In JavaScript, arrays always use numbered indexes.

//Array methods
//1 length
console.log(cars.length)
//2 sort
console.log(cars.sort()) //sort alphabatically
//by default it sorts values as strings, if it numbers we should provide function
const points = [40, 100, 1, 5, 25, 10];
points.sort( (a,b) => a-b ) //asc order
points.sort( (a,b) => b-a ) //desc order

//3 toString
console.log(cars.toString())

//4 join(seperator) //similar to toString, but we can specify seperator
console.log(cars.join(" ,"))

//5 splice(add_at_pos, no_of_ele_to_remove, ele1, ele2 .....)
cars.splice(2, 0, 'Honda', 'Maruti') //add elements Honda, Maruti from 2nd index
cars.splice(2, 2, 'Honda', 'Maruti') //delete 2 elements from 2nd index and add elements Honda, Maruti from 2nd index
cars.splice(0, 1) //remove first element

//6 Merging Arrays
//1 Array1.concat(Array2)
const cars3 = cars.concat(cars2)
const cars4 = cars.concat(cars2, cars3) //merge 3 arrays
const cars5 = cars.concat('Mercedes') //merge array with values

//7 Slicing an array - creates a new array. It does not remove any elements from the source array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // ["Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3); // ["Apple", "Mango"];
citrus = fruits.slice(1, 3); // ["Orange", "Lemon"] ,exclude the last index

//8 reverse
let reverseFruits = fruits.reverse()

//9 Find max or min in Array 
const max = Math.max.apply(null, points) 
const min = Math.min.apply(null, points)
//no built in funcction to find max or min in array

//-----------------------------------------------------------
//go through array iteration when u got the time
https://www.w3schools.com/js/js_array_iteration.asp