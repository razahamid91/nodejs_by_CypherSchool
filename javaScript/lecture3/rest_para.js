
//rest parameter

function myfun(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

myfun(2,4,6,7,8,9,3,56,7,6);

// add all number create a function for  this task

function addAll(...numbers){
 let sum =0;
 for(let number of numbers){
    sum+=number;
 }
 console.log(sum);
    
}
addAll(2,3,4,5,7,8,2,3,4,5,6,6,7,78,8,5);