import {log}  from '../CLOSURE_LOOK_AT_FUNCTIONS/util.js'

log ('hello')

let my_arr = [ 1,2,3,4,5]
//slice method 

let res  = my_arr.slice( 1)
log( res )
 res = my_arr.slice(0 ,  2);
log( res)
//if we use the negative indexig then start index should be lesser then the end idx other wise we get the empty array as the result
res = my_arr.slice( -1 ,  -4 )//[]

res = my_arr.slice( -3 ,  -2   )

log(res)


//SPLICE METHOD used to add and remove the elements in the array
my_arr.splice(0 ,0, 44, 55);
//first param is start idx that we want to add or remove the elements
//second param is no of element that we want to delete incase if we want to add the elements the use the 0 
//if we want to add the elements then insert the numbers follwed by the commas
//if we want to delete elements first two params are enough

log( my_arr)

let my_arr_2  =  [ 1,2,3,4,5,6]
//delete first 2 elements
my_arr_2.splice(0 ,  2 );
log(my_arr_2)
//add the 1,2 elements
my_arr_2.splice( 0 , 0 , 1,2)
log( my_arr_2)
//add the 50 at the end
my_arr_2.push(50)
my_arr_2.splice(-1)//remove the last element
log(my_arr_2)

//concat method 
let my_arr_3 = []
my_arr_3 = my_arr_3.concat(my_arr_2) //returns the array after the concatination performed
log(my_arr_3)



//at method 
my_arr_3 =  [ 1,2,3,4]

let first_ele =  my_arr_3[0]
first_ele =  my_arr_3.at(0)//gives the same result
//getting the last element
let last_ele =  my_arr_3.at(-1)
log(last_ele)
let second_last_ele =  my_arr_3.at(-2)
log(second_last_ele)

//for each method 
//each iteraton it executes the call back function
//1st param is the value 2nd param is the idx value
//3rd param is the array that we are performing the for each method
my_arr_3.forEach (  (value , idx , arr)=>
{
          log( value )
})

//in the for-each method 2nd , 3rd params are optional
//even if we omit the 1st param too no issue but that does not make any sence for using the for-each
my_arr_3.forEach( (value)=>
{
     
})

//for-each method in the map 

let my_map  = new Map ( );
my_map.set( 1 , true)
my_map.set( 2 ,  true)
my_map.set( 3 ,  true)
my_map.set( 4 , true)

my_map.forEach( (value , key ,  map )=>
{
     log( key , value)
})

//for each method in the set 

let my_set   = new Set()
my_set.add( 1)
my_set.add(2)
my_set.add(3)

my_set.forEach( (value , key ,  set)=>
{
     //value , key are same in the sets
     console.log ( value , key)
})


