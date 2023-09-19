console.log ('hello')

/** 
 * the || operator is not only return the true all the time
 * it works with the any value
*/
/**
 * examples of the falsy values = '' , " " , null , undefined , 0 
 */


// || operator only takes the truthy values as the result 
//the second one is the truthy values so it retuns that value
let res = undefined || 'ravi' 
console.log( res )

res  = 'first' || null
console.log( res )

res = null|| undefined
console.log ( res )

res = ''||'second'
console.log ( res )

res = 0 || 1 
console.log ( res )