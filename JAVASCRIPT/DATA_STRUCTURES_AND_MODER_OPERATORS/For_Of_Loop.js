
let log  = ( ele )=>
{
     console.log ( ele ) 
}

let my_arr =  [  1 , 2,3 , 4 ] 

for (let ele of my_arr )
{
     log ( ele)
}

let student = {
     grades  : [ 'a' , 'b:' , 'c'],
     marks : [ { physics : 50 ,  maths : 10}]
}

for ( let grade of student.grades)
{
     log( grade)
}
//object destructuring throught for loop 
for ( let { physics ,  maths } of student.marks)
{
     log(physics )  
     log  ( maths)
}

//entries method in the arrary returns the idx and the values in the format of the array 
for ( let entries of my_arr.entries() )
{
     log ( entries )//entries is iterable and it is in the array format
     let [idx ,  value ] =  entries 
     console.log ( idx , value )
}    

