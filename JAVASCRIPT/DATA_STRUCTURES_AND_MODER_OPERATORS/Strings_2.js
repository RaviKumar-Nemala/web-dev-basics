import {log} from './util.js'

//split method

let str =  new String ('laptops under 20,000')
for ( let values of str.split(' '))
{
     log(values)
}

//join method is used combine mutilpe elements with the given string
// works with the array
//str = str.join(' ')//it is the error

let my_arr = ['laptops'  , 'under' ,  '20000']

let str_2 =  my_arr.join('-')

log(str_2)


function capitalize_each_word ( words )
{
     let result  = [] 
     words = words.split(' ')
     for ( let word of words)
     {
          // result.push ( [ word[0].toUpperCase() ,  word.slice(1)].join(''));
     }
     log(result)

}

capitalize_each_word(str)

//padding start used to add the strings in the beginnig of the string
log(str.length)
let str_3 = str.padStart(40 , 'newly_added ')
log(str_3)

// padding end used to add the characters in the end of  the string

str_3 = str.padEnd(35 ,  ' appended')
log(str_3)


//hiding first 12 digits of the credit card numbers

function hide_credit_numbers ( card_numbers)
{

     let last_digits =  card_numbers.slice(-4)

     let res =  last_digits.padStart(card_numbers.length ,  '*')

     log( res)

}

hide_credit_numbers('123443211345')

//reverse strings 
//since there is not direct method for reversing string so we use custom way

function reverse_string ( str ) 
{
     log ( str.split('').reverse().join(''))
}
let str_4 =  'hello there hi'
log(str_4)
reverse_string( str_4)

