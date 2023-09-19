async function getData () 
{
     const url = 'hell.txt';

     let response = await fetch(url);
     
     let element = document.querySelector('.div_1');
     
     if ( response.status == 200 )
     {

          console.log ( response.status );

          let data  =  await response.text();

          //element.textContent =  data ;
          
          element.innerHTML = data ;
          
     }
     else 
     {
          element.textContent =  'error';
     }
     
}

getData();