import { log } from "../CLOSURE_LOOK_AT_FUNCTIONS/util.js";

/**
 * Numbers are one of the data type in the javascript
 * these are used to represent both int and float types of the numbers
 * size =  64bits
 * every int in turn converts into the floating point internally
 * 
 */

let a =  10 ;
let b = 10.0
let res =  a == b 
log( res ) //returns true

//converting the strings to the numbers

a =  Number('1234')
log(a  ,  typeof a )

a =  Number ( '12.33')
log( a)

//better way to convert to the number is
a = +'12.3345' //+operator in front of the Strign convert the string into the number 
log( a )

//converting to the int value
a =  parseInt('15.33')
log( a)
a = parseInt( '18.45px')
log( a)

//Number.parseInt() is a better way to call how ever parseInt() is also works fine but it is the old way

a = Number.parseFloat('167.98px')
log( a)

a = Number.parseFloat ('r234')//Nan string form of the number is not formatted correctly
log( a)


/**
 * isNan() is used to check weather the input is not the number 
 */

a =  10 

res = isNaN(a) //false  since a is the number
log( res)
res = isNaN('23')//string intern converts to the number so returns false
log( res)
res = isNaN('e34')
log( res )

//isFinite() is the best way to check weather value is the number or not
res = isFinite('22')//returns false  cause it is the string incase of the isNan('33') specifies it a number 
log(res)
res = isFinite(44)
log(res)

//isInteger() 

res = Number.isInteger(88)//true
res = Number.isInteger('88')//false
res = Number.isInteger(44.45)//false
console.log( res )