class student 
{
     static s_var = 10 ;

     constructor( name , roll)
     {
          this.name = name ;
          this.roll = roll;
     }
     get_roll()
     {
           return this.roll;
     }
     get_name()
     { return  this.name};

     static s1 ()
     {    
          console.log ( 'static method has called' )  ;   
     }
     
};
student.prototype.new_m1 = function () { console.log ( 'new method') ;} ;

let my_student = new student ('ravi' ,1 ) ;
 
console.log(my_student.get_roll() ) ;
console.log ( my_student.get_name() ) ;

my_student.new_m1();

student.s1();