
// the arrow function refers to the this keyword of the global scope
function Student ( name , roll)
{
     this.name = name ;
     this.roll = roll ;
}

Student.prototype.get_roll = ()=>
{
     console.log( this.roll );
}
let stu1=new Student(  'ravi',1 );
stu1.get_roll();

let My_obj =
{
     year:2015,
     //this.arrow function refers to the  global object since we don't have any attribute  year in the global object so it is undefined
     //usually arrow functions refers to the this keyword  of its parent function
     calcAge: ()=> {  console.log( this.year)},
     
     //here this refers to the invoked object
     calcAge_2 : function () { console.log( this.year)}
};

My_obj.calcAge();

My_obj.calcAge_2();

let Test =
{
     age  : 22,
     f1 :  function() {
          console.log(this.age);
          
          
          function f2() { console.log(this.age)};
          //calling function without any object attachment
          //here this will be  undefined
          f2();
     }

};

Test.f1();

//solution to the above  problem
const Test2 =
{
     age  : 22,
     f1 :  function() {
          console.log(this.age);
          
          const self = this;

          function f2() { console.log(self.age)};
          //calling function without any object attachment
          //here this will be  undefined
          f2();
     }

};
Test2.f1();
