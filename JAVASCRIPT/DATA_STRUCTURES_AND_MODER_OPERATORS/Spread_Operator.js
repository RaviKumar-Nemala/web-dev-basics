let arr_1 = [ 1 ,2 ]
let arr_2 = [3,4]
let new_arr = [ arr_1 , arr_2]//it creates the 2 elements where each element is an array
console.log(new_arr)
//by using the spread operator it takes out the elements from the array and grouped with the commas
new_arr = [...arr_1 , ...arr_2]//takes out all the elements from arr_1 and arr_2 and sepearted by comma like this [ 1,2,3,4] now these elements are treated as thesinge array
console.log(new_arr)

let student =
{
     student_name : 'ravi',
     roll : 11,
     section : 'a',
     grades : { 
          first_year : 'a',
          second_year :  'b', 
          third_year : 'c'
     }    
}

let student_copy = { ...student } //using the spread opeartor it creates the shallow copy of the existing object
student_copy.roll = 22; 
console.log( student_copy );
console.log ( student)

function accept ( a , b ,c,d )
{
     console.log( a , b , c,d)
}

let my_arr = [ 1 ,2,3,4]
accept (...my_arr)//now the array elements are individually passed throught the function parameters
