
//here this keyword refers to the global  object
console.log ( this )

 
//refers to the global object
//in case of the strict mode : this referst to the undefined
function   f1 ()
{
     console.log ( "inside of the function");
     console.log (this);
}

//in arrow functions this keyword refers to the global object
let a1 =  () =>
{    
     console.log( 'arrow function');
      console.log ( this) ;
}

a1();

// this object to refers to the student object

function Student( name , roll)
{
     this.name = name ;
     
     this.roll = Number.parseInt(roll); 

     //when we use the arrow functions then the context will be different
     this.get_name = function()
     {
          return this.name;
     }
     this.get_roll = function() { return this.roll}

}


let stu = new Student ( 'ravi'   , 1 ) ;
console.log( stu.get_name() +  " " + stu.get_roll() ) ;

let stu2 = new Student('kumar' , 2) ;

//when we use the arrow functions then the context will be different
stu2.get_roll = stu.get_roll;
stu2.get_name =  stu.get_name ;
console.log ( stu2.get_roll() + " " + stu2.get_name());

// if we use the arrow functions then it returns the undefined
//try to use the functions instead of the arrwo functons
Student.prototype.get_both = function () { return  this.roll + " " + this.name } ;

console.log( stu2.get_both());

console.log( stu.get_both() ) ;
