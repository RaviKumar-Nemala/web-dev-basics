

let form =  document.querySelector("#forms_2");

form.addEventListener('submit' , function(event)
{

     event.preventDefault();

     let user_name =  document.querySelector("#user_name").value;

     let password = document.querySelector("#password").value;

     console.log ( user_name );

     console.log ( password);

     return true;

}

);

