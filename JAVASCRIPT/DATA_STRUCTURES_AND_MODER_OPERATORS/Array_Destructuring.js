console.log('hello')
const arr = [ 1, 2 ,3]

let [main ,temp] = arr
let temp_1 = main 
main = temp 
temp = temp_1
console.log( main , temp )

let [ x , , y ] = arr //using the empty space now x = 1 , y = 3


//destructuring the nested array
let [ p , q,  r ] =  [ 1, 2 ,[11,12]]//here r will hold the nested array
console.log( p,q,r)

let [ a ,b ]  = r //r is array so again we are destructuring

console.log( a ,b )

let [ l , , [m,n]] = [ 1, 2, [10,11]] // l  = 1 , m = 10 , n = 11

console.log(  l , m , n )

//default values in destructuring 

let [ e = 11 , f  = 12, g = 3] = [ 1 , 3  ] // here e vaue , f value will be 1, 3 but g does not get any match so it sticks with the default value 

console.log( e, f , g ) ;