
function person ( name )
{
     this.name =name;
}
console.log( person.prototype );

person.prototype.get_name = function () { return this.name };
function student ( name, roll )
{
     person.call( this, name );
     this.roll = roll;
}

student.prototype  = Object.create( person) ;
console.log (student.prototype);
student.prototype.get_roll =  function () { return this.roll };
console.log(  student.prototype)
let my_student = new student (  'ravi' , 1 ) ;
console.log ( my_student.__proto__ == student.prototype );

console.log( student.prototype.__proto__);