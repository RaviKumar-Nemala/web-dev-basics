
// with the help of the objects we can assin
// the keys and the values 
// it contains array's also

// it does't followany order while printing the object

let human = 
{

     first_name :  'ravi kumar',

     last_name : 'hell',

     friends : [ 'eagle'  , 'snake' ] ,

     age : 20,

     profession :  'ddos'

}

//console.log( human );

// accessing the elements with the dot operator

/*
console.log (  human.first_name);

console.log(human.last_name);

console.log(human.friends);

console.log(human.age);

console.log( human.profession);

*/

// accessig the elements with the [] 

console.log ( human [ `first_name`] );

console.log ( human [`age`]);

console.log( human['friends'].length);

// undefined  no attribute is there
console.log ( human [ `dd`]);



// adding the new keys to the object

human.color  =  'blue';

let res = 'age';

console.log ( human['age']);

console.log ( human[res]);