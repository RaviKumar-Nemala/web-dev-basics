 
display =  (value) => 
{
     
     let content  =  document.querySelector(".div_1");

     content.innerHTML =  value ;

     console.log( value ) ;
     
}

function calculate ( display   ,  num1 ,  num2  )
{

          let res = num1  + num2 ;


          display (  res ) ;

}

//calculate(  display , 1,2 );


