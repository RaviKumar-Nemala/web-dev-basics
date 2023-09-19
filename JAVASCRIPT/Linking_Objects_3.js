function A ( a )
{
     this.a = a ;
}

A.prototype.a_method = function ()  { console.log ( 'a  = ' ,a ) } ;

function B( a , b)
{
      A.call( this,a);
      this.b = b ;
}

B.prototype  = Object.create( A.prototype );

B.prototype.b_method  = function  ()  { console.log(' b = ' , this.b )}

function C ( a, b , c )
{
     B.call (  this , a , b  ) ; 
     this.c = c ;
}

C.prototype  =  Object.create( B.prototype  ) ;

C.prototype.c_method  = function ()  { console.log (' c = ' ,this.c)} ;

let c = new C ( 1 , 2 , 3 ) ;

c.b_method();