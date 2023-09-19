
                    //paramater
const getGreetings = first_name =>
      `hello ${first_name}`//return value
// this is more helpful in single line functions

     
console.log( getGreetings ( 'RAVI'));


// for the multiple parameters

// if it is the single line functions no need to add the return statement 

const getGreetings_2 = (first_name , second_name)=> `hello ${first_name}  ${second_name}`

console.log( getGreetings_2( 'ravi' , 'shroud') ) 


// multi lined functions 
 
const getGreetings_3 = (first_name , second_name)=> 
{

     console.log( first_name  , second_name ) ; 

     //if there is multiple lines then better to  write return statement

 return `hello ${first_name}  ${second_name}`

}

getGreetings_3( 'ddos' , 'dns')




