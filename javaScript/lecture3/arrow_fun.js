const findNum=(array ,target)=>{
    for(let i=0;array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,56,7,4,6,9];
 const ans = findNum(myArray, 3);
 console.log(ans);