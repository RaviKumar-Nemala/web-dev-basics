import { log } from "../CLOSURE_LOOK_AT_FUNCTIONS/util.js";

//map method  performs the manipulation on the array element and creates the new array after modification
let my_arr = [ 1,2,3,4,5]
//multiply each element with the 5

let modified_arr =  my_arr.map ( (value) => 
{
     return value  * 2 ;
})

log( modified_arr)
log( my_arr)

//divide the each element by 2 
modified_arr  = my_arr.map ( (value) =>
{
     return Math.round(value/2);
})
log( modified_arr)


// getting the first letter of the given string

let str  = 'hello this is ddos'

let res =  str.toLowerCase().split(' ').map((value) =>
{
     return value.at(0);
}).join('')
log( res)



//filter the array

let my_arr_2 = [ 1,2,3,4]
//get the even number elements from the array

res = my_arr_2.filter( (value) =>  { return value%2==0})
log( res)



//reduce method
my_arr_2 = [ 1,2,3,4,5]
//in each iteration returned value becomes the prev_value
//curren_val = array element value currenty iterated on 
res = my_arr.reduce((prev_val , current_val , idx)=>
{ 
     console.log ( 'prev_val=' , prev_val)
     console.log( 'current_val' ,  current_val)

     return prev_val + current_val;
}, 0);//here 0 refers to the current value to start with 

log( res )

//finding the max value in the array
res = my_arr.reduce( (prev_val , current_val )=>
{
     if ( prev_val > current_val )
          return prev_val;
     else
          return current_val
} , 0)

log( res)


//method chainging  

my_arr_2 = [ 1,2,3,4,5,6]

//filter the array with even numbers and 
//multiply with the 5 on the resultant array
//finally find the total of all

res = my_arr_2.filter( (value)=>
{
     return value %2  == 0 ;
}).map( (value) =>
{
     return value * 5
}).reduce( (prev_val , curr_val ) =>
{
   return ( prev_val+ curr_val)
} , 0)

log(res)

//finding the index
res = my_arr_2.indexOf(5)
log( res)

//some method  
//returns true if any one of the element in the array satisfied the specified condition
res = my_arr_2.some(  ( ele) => ele < 0);
log( res )//since all our array elements are positive so the result is false

//every method
//returns true if all the elements in the array satisfies the specified condition

res =  my_arr_2.every ( (ele) => ele >  0)
log( res )//true cause all our elements are greater then then zero


//flat method 
my_arr_2 =  [ [ 1,2,3,4] , [ 5,6]]

//inorder to convert these nested array into the singl arry we use the flat method

//WITH OUT USING THE FLAT METHOD using the loops only works if the nested array level =1  
let res_arr = []
my_arr_2.forEach( (ele)=>
{
     if( ele instanceof Array)
     {
          ele.forEach((_ele)=>
          {
               res_arr.push(_ele)
          })
     }
     else
     {
          res_arr.push ( ele)
     }
})
log( res_arr)


//using the flat method 

res_arr = my_arr_2.flat();
//flat method takes the default nested depth is 1

//contains the nested array of level 2 
my_arr_2 = [ [[1,2] , 3] , [ 5,6]]

res_arr = my_arr_2.flat(2)//specify the depth 

log( res_arr)


//sorting the arrays 
my_arr =  [ 3,4,5,61, -19 , 45 ]

//sorting in the assending order

my_arr.sort( (ele_1 , ele_2) =>
{
     if( ele_1 > ele_2)
          return 1;
     else if ( ele_1 <ele_2)
          return -1;
     else 
          return 0;
}
)

//more consise way for assending order
my_arr =  [ 3,4,5,61, -19 , 45 ]
my_arr.sort(  (ele_1,ele_2)=>
{
     return ele_1 - ele_2
})
log( my_arr)

//more consise way for the decending order
my_arr.sort( (ele_1 , ele_2)=> ele_2 - ele_1)
log(my_arr)

//ARRAY.from() method 

my_arr_2 = new Array(5)

//used to create the array from the array like or iterable object 
my_arr_2 = Array.from({length : 5} ,  () => -1)

my_arr_2 = Array.from({length : 5} , (curr_ele , idx ) => idx+1)

log( my_arr_2)


//since nodes list is array like structur inorder to convert the nodelist to the array we use the Array.from method


let node_list = document.querySelectorAll('.test')
log(node_list)

res =  ( node_list instanceof  Array)
log( res)

let arr_node_list = Array.from( node_list)
res = arr_node_list instanceof  Array
log( res)

