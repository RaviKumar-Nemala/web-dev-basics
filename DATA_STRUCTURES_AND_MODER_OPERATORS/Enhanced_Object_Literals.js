function log ( ...ele )
{
     for ( let _ele of ele )
     console.log ( _ele )
}

let marks  = 
{
     physics  : 50 , 
     maths : 40 
}

let student   =
{
     firstname : 'ravi' , 
     lastname : 'kumar',
    // marks : marks, // it refers to the global object marks
     
    //from es6 on wards we can do the same thing in the below way
     marks, // it is also refers to the global object marks 

     //from es6 onwards we can write functions without the property name 
     get_details : function util () 
     { 
          //in case if we return the object key and value has to be specified
          return { firstname:this.firstname , lastname :this.lastname, marks:this.marks} 
          //return [this.firstname , this.lastname ,  this.marks]
     },
};

log ( student.marks )

// log ( student.get_details())
//since marks is an object which is already defined in the global context so we can't use it again so we used the alias name as the stu_marks 
let { firstname , lastname ,  marks:stu_marks } = student.get_details();

log ( firstname , lastname , stu_marks )

