
function  handle_visibility ( target_div_class_name) 
{

     console.log ( 'target_div_class_name' , target_div_class_name )

     let main_div = document.querySelector('.main_div');
     
     let child_divs =  main_div.querySelectorAll('.temp')

     //console.log ( child_divs);

     console.log(child_divs.length)

     for ( let idx = 0 ;  idx < child_divs.length  ; idx ++ )
     {
         

          let current_div =  child_divs [ idx ] ; 

          // let current_div =  child_divs[ idx ].getAttribute("id")
          
//         console.log (  child_divs [ idx ] ) 


          let current_div_class_name =current_div .getAttribute('id')

          console.log (  current_div_class_name )
         
          if  ( current_div_class_name === target_div_class_name )
          {
               
               console.log ( 'matched')

               //console.log (  current_div )
             
               current_div.style.display =  'block'

          }
          
          else 
          {
              current_div.style.display = 'none'

          }

     }

     let table =  document.querySelector('#table_div');
     
     table.style.display = 'none'

     return;
     
}

function  record_adder_click () {

     let main_div =  document.querySelector('.main_div')

     let target_div =  main_div.querySelector('#record_adder')

     target_div.style.display =  'block'

     console.log  ( target_div );

     // used the hard coded value

     let div_id_name  = 'record_adder';

     handle_visibility(  div_id_name );

}


function record_delete_click() {

     let main_div =  document.querySelector('.main_div')

     let target_div =  main_div.querySelector('#record_deleter')

     target_div.style.display =  'block'

     console.log  ( target_div );

     // used the hard coded value

     let div_id_name  = 'record_deleter';

     handle_visibility(  div_id_name );


}

function record_updater_click() {

     let main_div =  document.querySelector('.main_div')

     let target_div =  main_div.querySelector('#record_updater')

     target_div.style.display =  'block'

     console.log  ( target_div );

     // used the hard coded value

     let div_id_name  = 'record_updater';

     handle_visibility(  div_id_name );
}

function record_getter_click()
{

     let main_div =  document.querySelector('.main_div')

     let target_div =  main_div.querySelector('#record_getter')

     target_div.style.display =  'block'

     console.log  ( target_div );

     // used the hard coded value

     let div_id_name  = 'record_getter';

     handle_visibility(  div_id_name );

}

