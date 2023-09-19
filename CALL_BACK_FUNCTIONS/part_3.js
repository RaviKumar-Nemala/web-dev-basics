
display_clock =  () =>
{

     let time = new Date();
     
     let content =  document.querySelector('.clock');
     
     content.innerHTML  = 
     
     time.getHours() + ' : ' +
     
     time.getMinutes() + ' : ' +
     
     time.getSeconds() ;
     
     
}

// use the function with the id then we can clear the function when 
//ever we want 

const time_out = setInterval( display_clock , 1000) ;



function stop_time()
{
     
     
     console.log ("helll")
                   //clears the time interval 
     //based on the parameter coresposdent time interval is cancelled

     clearInterval( time_out ) ;
     
}



