import { log } from "./util.js";
const student = 
{
      name :  'ravi' , 
      age  : 20 , 
      grade : 'f'
};

//getting the keys of the object we use the following method 

for ( let keys of Object.keys (student ) ) 
          log ( keys )
//getting the values of the object 
log ( 'PRINTING THE VALUES') 
for ( let values of  Object.values ( student ))
     log ( values ) 

//for getting the both keys and values we use the entries method 

for ( let entires of Object.entries ( student ) )
          log ( entires)
//more convient way to the same thing 
for ( let [  key , value ] of Object.entries ( student) ) 
{
          log ( key ,  value )
}