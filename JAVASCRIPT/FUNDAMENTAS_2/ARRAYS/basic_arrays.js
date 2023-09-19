// in js we can have different types of data in a same array
let my_arr = [ 1 ,2 ,3 , 'ravi']

console.log(my_arr);

// pushes the element in the last
my_arr.push ( 'modify_end_1');

my_arr.push( 'modify_end_2');

// adds the element in the start 
my_arr.unshift('modify_start');

// removes the element at the first
my_arr.shift();

// removes the last element
my_arr.pop();


if ( my_arr.indexOf(1))
{
     console.log( my_arr[ my_arr.indexOf(1)]);

}

// internally uses the strict equality so string cannot be converted into the number

const res = my_arr.includes('1')

console.log(res);


