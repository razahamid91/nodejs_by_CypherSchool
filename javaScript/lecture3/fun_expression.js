
// variable assign to function

const findNum= function(array,num){
    for(let i=0;array.length;i++){
        if(array[i]===num){
            return i;
        }
    }
    return -1;
}
const myArray=[1,3,5,7,9,0,3,33];
console.log(findNum(myArray,0));