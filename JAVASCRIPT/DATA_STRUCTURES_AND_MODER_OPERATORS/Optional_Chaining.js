import {log} from './util.js'

/**
 * OPTIONAL chaining is used to check weather the object or its property is existed or not 
 * if it existes then it executes or go to the next condition  
 * if that property is not exists then it does not move further produces as the undefined 
 */
let student = 
 {
     first_name : 'ravi' , 
     last_naem : 'kumar' , 
     marks : {  
          physics  : 11, 
          maths :  112,
     }
}
//trying to access the undefined property in the student obj

//const res =  student.mother_name.age;//since mother name is  not defined then age  in the mother name obj gives us the error

// the above problem can be solved in two ways
// first way using the if else statement
if ( student.mother_name && student.mother_name.age )
{
     log ( student.mother_name.age)    
}
else 
{
     log('age property is not existed')
}

//SOLVING THE SAME PROBLEM WITH THE OPTIONAL CHAINING

let _res =  student.mother_name?.age ;//if mother name existes then only refers to the age otherwise return undefined not the error

log(_res )//produces undefined not the error 
/**
 * OPTIONAL chaing
 */

student.mother_name = {
     age :  0
} 
_res  =  student.mother_name?.age 
log ( _res)//returns 0  cause in optional  chaining 0 consider as the truthy value 

//in case of the if else 0 is consider as the falsy value
//age is existed but it is zero so if condition is not evaluated
if ( student.mother_name  && student.mother_name.age )
{
     log ( student.mother_name.age)
}
else 
{
     log( 'AGE IS NOT DEFINED')
}