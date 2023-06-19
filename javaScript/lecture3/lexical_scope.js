 const val2= "value2";
 
 function myfun(){
    const val= "value1";

    const fun1=()=>{

        const fun3=()=>{
            console.log('inside fun3 ',val2);
        }
        console.log('inside fun' , val , val2);

        fun3();
    }
    
    console.log('outer', val2,val);
    fun1();
    
}
myfun();

/*output: - outer value2 value1
inside fun  value1 value2
inside fun3  value2 */
