
// function deceleration 

function Greeting(){
    console.log("good morning")
}

Greeting();

// create function that take 3 parameters and sum the 3 numbers.

function sum(num1,num2,num3){
    return num1+num2+num3;
}
const sumofNum = sum(3,4,6);

console.log(sumofNum);

// create function that check odd or even number

function isEven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
const number = isEven(5);
console.log(number)


// create an array find target element in the array if present return index or if not return -1.

function findTarget(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

 const myArray = [1,3,56,7,4,6,9];
 const ans = findTarget(myArray, 3);
 console.log(ans);