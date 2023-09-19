import {log} from './util.js'

let iterate =   ( map ) => 
{
     for ( let [ key , value ] of map )
     {
          log ( key , value )     
     }
}

let my_map = new Map ( ) ; 

my_map.set ( 'hell' , true )
my_map.set( 'ddos' , true)

// whenever we set the element in the map it returns the map object back 
console.log  ( my_map.set('ravi' ,  true))//prints map

// settting the elemenets in may better way

my_map.set('laptops' , 'ddos')
       .set(1 , true)
iterate ( my_map )

//setting the array as a key in the map 

let my_arr  = [1,2,3]

my_map.set ( my_arr ,  true)

if ( my_map.has ( [1,2,3]))//it returns false beacause the array is stored in the heap memeory with different address ,and the array that we passed is getting the differnt heap memory location so memory locations are matched so it returns false

if ( my_map.has ( my_arr))//returns true here my_arr holds the heap memory address of the  array
{

}

//setting the dom element as the keys 
let li_tag= document.createElement('li')

my_map.set ( li_tag ,  true)

//check weather contains the element or not 
if ( my_map.has (1))
{
     log ('ok')
}

//deleting the element in the map 

my_map.has('laptops')&&my_map.delete('laptops')

iterate( my_map )

// clearing out  all the elements 
my_map.clear() 
iterate ( my_map)


//getting the keys 
for ( let keys  of my_map.keys ())
{
     log ( keys )
}

//getting the value 

for ( let value  of my_map.values())
     log( value)

//entries 
for ( let [key, value] of my_map.entries() )
     log (  key ,  value )