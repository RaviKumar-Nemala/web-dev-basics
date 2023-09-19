let student = 
{
     stu_name : 'ravi',
     section : 'a',
     roll : 111,
     marks : {
          maths : 10,
          physics : 20
     }

};

// let { stu_name , section , roll } =  student

// console.log ( stu_name , section , roll )

//selection the required props 
// if we want the customized names then it is the syntax

let { stu_name : s_name ,  section : sec , roll : _roll} = student ;
//if we use our customized names then we no longer has to use the object keys as the names
console.log( s_name , sec , _roll)

//nested object desturcturing 
let { marks : _stu_marks } = student
console.log( _stu_marks)//since marks itself is the object so we can again desture it

let { maths , physics }  = _stu_marks
console.log( maths,  physics)

//second approach for nested destructuring
//here marks is an object and then it contains maths, physics as the keys
//we re naming these keys into our customized names 
let { marks : {  maths:_maths , physics:_phy } } =  student;
console.log( _maths , _phy)



//using the default values if the object property is not exist
//if the student object full name is existed then it will be assigned otherwise it sticks with the default value as 'no name' 
let {stu_name : name , section : _sec , fullname ='no name'} = student;

console.log( fullname ) 


function accept_obj (  {first_name , last_name , roll })
{
     console.log ( first_name , last_name ,  roll)
}
//even though if we pass the keys in any order it still works
accept_obj( { first_name : 'ravi' , last_name : 'ddos' , roll : 11})

accept_obj( { last_name : 'ravi' , first_name : 'kumar', roll : 111 })

//using the salary name as the default value so if the salary attr not specified then it uses the default one
function accept_obj_2( {emp_no , emp_name , emp_salary = 10000})
{
     console.log ( emp_name , emp_no , emp_salary )
     return ;
}

accept_obj_2( { emp_no:'emp_1' , emp_no : 1 , emp_salary :100})

console.log( 'use the default salary')
accept_obj_2 ( { emp_name:'emp_2' , emp_no : 22 })
