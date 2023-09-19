
// class A  extends B , C
// {
      
// }

// the above syntax is wrong in javascript 


// this is the way the we achieve multiple inheirance in js

function A ( a )
{ 
     this.a   = a ;
}

A.prototype.a_method = function ()  { console.log( 'a = '  , this.a)};

function B ( b )
{ this.b = b } ;

B.prototype.b_method = function ( ) { console.log ("b = "  , b )}  ;

function Child ( a , b )
{
     A.call(  this  , a );
     B.call( this ,  b );
}

//linking the prototypes 
//object.create creates copy of the B.prototype
Child.prototype  = Object.create(B.prototype);

B.prototype.b_method_2 = function () { console.log ('b method 2 ')}
// for Adding the another prototype 
//use  Object.assign  method to add new prototype to the existing  prototype

Object.assign( Child.prototype ,  A.prototype) ;

let child = new Child ( 1,  2 ) ;

console.log (  Child.prototype) ;
