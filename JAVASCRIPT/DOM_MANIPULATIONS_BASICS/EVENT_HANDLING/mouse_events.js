function mouse_enter(){

     let div_1  = document.querySelector ( '.div_1');

     console.log("mouse enters");

     div_1.setAttribute ("style" ,"background-color:blue");

}

function mouse_leave(){
     
     let div_1  = document.querySelector ( '.div_1');

     console.log( "mouse leave");

     div_1.setAttribute("style", "background-color: grey");
}

function mouse_move () 
{

     let div_1  = document.querySelector ( '.div_1');

     console.log("mouse_moves");

     div_1.setAttribute ( "style" , "background-color: green");

}