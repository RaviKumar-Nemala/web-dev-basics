

function email_key_up(){

let email = document.querySelector('#email')

console.log ( email.value);

let email_wrong_notifier =  document.querySelector('#email_check');

const  email_validataion_status = String(email.value).toLowerCase().match (  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

if ( !email_validataion_status )
{

         email_wrong_notifier.innerHTML = "Invalid Email"; 

         console.log ( 'invalid _ email ')
         
         email_wrong_notifier.setAttribute("style","display:inline ; color : red ; background-color : black");
     }

     else
     {
          console.log ( 'valid email ');
          
          email_wrong_notifier.innerHTML = "valid Email";

          email_wrong_notifier.setAttribute("style","display:inline ; color : green ; background-color : black");

     }


}

function password_key_up()
{
 
     
     let password = document.querySelector('#password');

     console.log ( password.value );

}