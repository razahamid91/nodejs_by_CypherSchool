const person ={
    name:'hamid',
    gender: 'male',
    age:20
}

const getdetails=({name,gender,age})=>{
    console.log(name);
    console.log(gender);
    console.log(age);
}
getdetails(person);