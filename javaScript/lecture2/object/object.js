// create the object

const person={
    name: "Hamid Raza",
    age: 21,
    address: "phagwara Punjab"
}

console.log(person);

// array inside the object 
console.log("array inside object ");


const person1={
    name: "Hamid Raza",
    age: 21,
    address: "phagwara Punjab",
    hobbies: ["football","cricket","chess"] // adding array inside object 
}

console.log(person1);
console.log(person1.hobbies);
person1.gender= "male"; // adding new key value pair.
console.log(person1);


// loops in object iterate 
// 1- for in loop
// 2- object.keys
console.log("loops in object")

const person2={
    name: "Hamid Raza",
    age: 21,
    address: "phagwara Punjab",
    hobbies: ["football","cricket","chess"] // adding array inside object 
}
 console.log(Object.keys(person2))


 // spread operator in object

 const obj1={
    key1: 'value1',
    key2: 'value2'
 }

 const obj2={
    key3: 'value3',
    key4: 'value4'
 }
 const newObj={...obj1, ...obj2}
 console.log(newObj); 