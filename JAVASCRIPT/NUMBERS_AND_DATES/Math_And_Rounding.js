import { log } from "../CLOSURE_LOOK_AT_FUNCTIONS/util.js";


//finding the sqrt of the number

let res =  Math.sqrt(25)
log( res)

//getting the random value

res = Math.random() // returns random floating value from the range of 0 -  1 
log( res )
res =Math.trunc( Math.random()) 
log(res )
//return the random number between 5 - 100 ( min =  5 , max = 100)

let min = 5 , max = 100
res = Math.floor( Math.random() *(max-min) +  min)
log ( res )

//floor and trunc

let num = 44.56
res = Math.floor( num)
log( res)//44
res = Math.trunc( num ) //44
//incase of the negative numbers floor method is better than the trunc

num = -44.4
res = Math.floor( num ) 
log( res ) //-45 ( nearster lower interger)
res = Math.trunc( num )//simply removes the fraction point
log( res ) // -44

//using the fixed decimal points
 
num =  45.5667566

res = num.toFixed(2)//returns the string
console.log( res , typeof res)
res = +res
log( res , typeof res)


//using the underscrolls in the number representation

num =  45_556
log( num)
//num = _45_56//invalid
num = 45.565_56//valid
res = Number( num )//valid
res = Number('45.567_45')//invalid cannot work for strings so we should convert it to the number
log( res)//nan
