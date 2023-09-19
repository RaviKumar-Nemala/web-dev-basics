
'use strict'

let text = "";

function validate_form(){


let user_name = document.querySelector("#user_name").value;

console.log ( user_name );

let password = document.querySelector("#password").value ;

console.log( password );

text =  user_name + password;


add_data(text);

return true;

}


const add_data = function (text) {

let para  = document.querySelector("#place_text");

para.setAttribute("style","display:visible");

para.textContent = text;

}

