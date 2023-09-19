function parent (  p1 , p2 )
     { 
          this.p1 = p1 ;
          this.p2 = p2 ;
     }
function semi_child ( s1 , s2)
     {
           this.s1 = s1 ; 
           this.s2 = s2;
     }
semi_child.prototype. m1 = function () { console.log('m1')};

let child =  Object.create( semi_child);
semi_child.prototype.m1 = function () { console.log( 'semi child has called') } ;

console.log( child )
//  child.m1();

let obj1 = 
{
     calc_age ()
     {
          console.log('calc_age_function has called')
          return  2020 - this.age;
     }
}

let obj2  = 
{
     calc_val() 
     {
          console.log( 'calc val has called');
     }
}

let o1   = Object.create (  obj2 ) ;

console.log (o1.__proto__  == obj2);

function temp ( x , y )
{
      this.x = x ; this .y = y ;
}

let my_temp  =  new temp  ( 1 , 2 );

let temp2  = Object.create( temp );
console.log(temp2.__proto__);
console.log( temp2);