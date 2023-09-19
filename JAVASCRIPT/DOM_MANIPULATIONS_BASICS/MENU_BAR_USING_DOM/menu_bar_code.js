

console.log( document.querySelector("#click_button"));


document.getElementById("click_button").addEventListener("click" ,

function () 
{

     
     let menu_items = document.querySelector(".menu_items");

    // console.log( menu_items);
     if ( window.innerWidth > 600){
     
     if ( menu_items.style.display === `none`)
     menu_items.style.display = `block`;

     else
     {
          
          menu_items.style.display = `none`;

     }

     }

     else if ( window.innerWidth <= 600)
     {


          console.log("mobile device");

          if ( menu_items.style.display === `none`)
          menu_items.setAttribute("style" ,  "display: flex ; position:fixed ; flex-direction: column; top :  80px ; left :  0% ; width : 100% ; justify-content:center ;  align-items : center ; background-color: blue");
          else
          menu_items.style.display =  `none`;

          }
     }

);