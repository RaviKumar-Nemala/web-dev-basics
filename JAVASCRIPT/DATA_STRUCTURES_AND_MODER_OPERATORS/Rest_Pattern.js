/**
 * spread operator is used to split  the array into the set of the elements
 * rest pattern collects the multiple elements into the array( just like var-args in java)
 */
let my_arr =  [1,2,3,4]
let [ a , b ] =  my_arr;// a simple array destructuring
console.log( a, b )

// using the rest pattern as follows
//the rest pattern ( here q must be placed at the last otherwise it compiler don't know weather we want the to store how many elements into the rest pattern either singer or whole)
let [ p , ...q ] = my_arr; //p = 1 , remaining elements will be transfered to the q(as an array of elements)
console.log ( p , q)//here 

let my_arr_2 = [ p , ...q]//array q is splitted into the set of elements and combined into p and treated as single array that it will store in the my_arr_2
console.log ( my_arr_2)


let student =
{
     first_name : 'ravi',
     grades  : {
          first_year : 'a',
          second_year : 'b', 
          third_year : 'c',
          fourth_year : 'd'
     }
}
console.log (student )

//the first_year obj stored in first_year and remainng entries of the grades will be stored in second varaible

let {first_year ,  ...remainging_year_grades } =  student.grades

console.log ( first_year , remainging_year_grades)



function add ( ...numbers ) {
     let sum = 0 ;
     numbers.forEach ( ele => sum+= ele )
     console.log ( sum )
}
add ( 1,2,3,4)//passing the individual elements and it will be collected with the help rest pattern
add( 1,2,3,4,5)


//if we are using the multiple params then spread opeartor should always be the last one
function collect ( name , ...numbers ) {
     console.log ( name , numbers )
}
collect ( 'ravi' , 1,2,3,4)
collect ( 'kumar' , 4,5,6,6)

