let human = 
{
     first_name :  'ravi kumar',

     last_name : 'hell',

     friends : [ 'eagle'  , 'snake' ] ,

     age : 20,

     profession :  'ddos',

     // fun_1 is a key it contains the function as an attribute

     fun_1 :  function ( num1 , num2)
     {
          return  ( num1 + num2 );
     }

}

// using the square brackets
console.log( human[`fun_1`](1,2) );

// using dot operator 
console.log(  human.fun_1(1,2));