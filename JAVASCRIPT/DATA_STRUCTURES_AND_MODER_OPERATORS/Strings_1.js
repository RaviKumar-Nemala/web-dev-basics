import {log} from './util.js'

console.log( 'heell')
/**
 * strings are immutable in javascript
 * eg = str = 'ravi'
 * str[0]  = 'k' is not possible
 *  */
let str = new String(  )
//str.concat('my_str')//does not impaced on str
str = str.concat ( 'my_str')//impacted on the str

log ( str )
str = ''
str =  '[1,2,3,4]'
log( str.length)

str = 'ravi'
//index of method returns  the first index of the element 
//works with both characters and string  too
//returns -1 if it is not found
let res = str.indexOf('r')
log( res)//0
res =  str.indexOf( 'rav')//0
str +=  ' kumar'//str = 'ravi kumar'
res = str.indexOf('r')//returns 0 not 9
log(res)
res = str.lastIndexOf('r')//returns 9
log( res)

if ( str.indexOf('ddos') == -1)
{
     log('ddos not found ')
}

//slice method is used to get the piece of the string
str = 'laptops under 20,000'
//in slice method end idx always excluded
let slice_1 =  str.slice ( 0 , 6 )//laptops
slice_1 = str.slice(14)
log( slice_1)
slice_1 =  str.slice(str.indexOf('under'))
log(slice_1)

//using the negative index in the slice method gives the elements from back of the string
slice_1 =  str.slice(-6 ,str.length)//20,000
log(slice_1)
slice_1 = str.slice( -6 , str.length-1)//20,00

//tolowercase()
str = 'LAPTOPS '
let str2 = str.toLocaleLowerCase() 
log(str , str2 )
//

//includes 
if( str.includes('LAP'))
     log('existed')
//ends with 
if ( str.endsWith  ( '20,000'))
     log( 'fine')
//replace method 
str = 'laptops hello laptops '
str2 = str.replace('laptops' , 'no')//only replaces the first occureance of the laptops
log(str2)
let my_regex = new RegExp('laptops','g')
str2 = str.replace ( my_regex, 'no')//replaces all the occurances of the laptops
log(str2)