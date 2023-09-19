class Cource 
{
     constructor( cource_name , duration)
     {
          let status = true;
          if ( cource_name == ''  )
          {
               status = false; 
                alert('invalid cource name');
          }
          if  ( duration == 0 )
          { 
               status = false;
               alert ( 'INVALID DURATION') ;
          }
          
          if( !status) return;
          
          this.cource_name  = cource_name; 
          this.duration = duration
     }

     get_cource ()
     {
          if ( !this.cource_name )
               alert("cource name not found")
          return this.cource_name;
     }
     get_duration ()     
     {
          return this.duration;
     }
}

class Student  extends Cource
{
     constructor( name = '' , cource_name =  '' ,  duration = 0  )
     {
          super( cource_name ,  duration ); 
          this.name = name;
     }
     
}

class Temp 

{
     get_temp ()
     {
          console.log( 'temp method has called');
     }
}

// //unlike c++ direct multiple inheritance  is not possible in javascript
// class Child extends Student , Temp
// {

// }


let ravi  = new Student ('ravi' , 'ddos' ,  1 );

let kumar = new Child ('kumar', 'hack' , 11);

console.log ( ravi.get_cource ()) ;

console.log( kumar.get_cource()  ,  kumar.get_duration() );





