import  { log }  from './util.js'

let my_set = new Set  ()  
my_set.add ( 'welcome')
my_set.add ( 'hell')
my_set.add ( '(darkweb)')
my_set.add ('hell')


const iterate =  ( my_set ) => {for ( let ele of my_set )
{
     log ( ele)
}
}

iterate   ( my_set )  

//for checking the key existed or not 
const res  =  my_set.has ( 'welcome')
log (res )

//adding the array as an input 
let my_arr  =  [  1, 2, 3,4 , 1 ]
my_set =  new Set ( my_arr )

// deleting the element from the set
log(my_set)

my_set.has(1)&&my_set.delete(1)

log( my_set)

my_set = new Set ( 'ravikumarnoob')
log(my_set.size )//op =  length of the string 
iterate ( my_set)//each letter is going to be printed
