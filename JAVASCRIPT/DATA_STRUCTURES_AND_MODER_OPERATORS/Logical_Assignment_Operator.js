
let log  = (msg )=> {console.log (msg)}
let student = {
     id:  10 
}

let employee = {
     ename : 'rr'
}

//if the employee contians id then assign it other wise assing the student id 
employee.id =  employee.id || student.id 
console.log( employee.id)

//more consise way to do it 
employee.id  ||= student.id



//USING && OPERATOR
//if the employee name existed then it shifts to the next condtion and retuns that value
// if the employee name  not existed then it returns that undefined or null or empty string or 0 value 
employee.name = employee.name && "hell" 
log(employee.name)
//MORE CONSISE WAY
employee.name &&= employee.name &&"hell"
log(employee.name)