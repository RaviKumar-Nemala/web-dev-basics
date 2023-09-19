
async  function  request ( url , params = { } ,  method = 'GET') 
{

     let options = 
     {

          method : 'GET',
          
          mode :  'cors' ,

          headers : 
          {
          
               'Content-type' : 'application/json'

          } 

     }

     if( method === 'GET')
     {
          
          url +=  '?' + new URLSearchParams( params ).toString();

     }

     else if ( method  === 'POST' )
     {
          
          options.method = 'POST'

          options.body = JSON.stringify(params)

     }


     console.log ( url ) ;

     
     let response = await fetch ( url ,  options );

     //console.log ( response ) ;

    return response ;

}

async function render_data ( response_content  ,  multiple_records = true )
{


     console.log ( "rendering the data")

     console.log ( typeof response_content)

     console.log ( response_content .length )

     let table_body = document.getElementById("table_body");

     let table_data = '';
     
     
     if( multiple_records == false )
     {

          table_data +=
          
          `<tr>
          <td>${response_content.name}</td>
          <td>${response_content.section}</td>
          <td>${response_content.roll}</td>
          </tr>`

     }

     else {

          response_content.forEach(response_data => {
          
          console.log ( 'inside of the for loop')
          
         table_data +=
          
         `<tr>
          <td>${response_data.name}</td>
          <td>${response_data.section}</td>
          <td>${response_data.roll}</td>
          </tr>`

     });
        
     }

     table_body.innerHTML  =  table_data  ;

}

async function  get_by_roll_no( roll_no )
{
     

     let params = 
     {
     
          roll :  roll_no
     
     }

    let url =  "http://localhost:2020/get_by_roll";

//     url +=  '?'+ ( new URLSearchParams(params) ).toString() 

     console.log ( url ) ;

  //   let response =  await  fetch ( url ,  extra_content )

    let response = await request( url ,  params , 'GET');

     let response_data = '';

     let content = '';

     if( response.status == 200 )
     {
     
          console.log ( 'SUCCESS' ) ;

          response_data = await response.json();

          console.log ( response_data ) 

          render_data(response_data  , false ) ;

     }

     else 
     {
     
          console.log ( 'FAILURE');

          response_data = 'Not found';

     }


}


async function  get_by_section( _section )
{


     let params = 
     {
          section  : _section
     }


     const url   = "http://localhost:2020/get_by_section"

     let response =  await request(url , params , 'GET');

     if ( response .status == 200 )
     {
          
          let response_content = await  response.json();

          console.log ( response_content ) ;

          render_data( response_content ) ;

     }

     else 
     {
          
          console.log ( 'INSIDE OF THE GET_BY_SECTION')

          console.log ( 'FALIURE ON GETTING DATA ')

     }

}

function  handle_text ()
{
     
     let roll_no =  document.querySelector('.search_bar' ).value ;

     let section_name = document.querySelector('.section_selector').value;

     let section_status = section_name === 'None' ? false :  true ;

     console.log ( section_name ) ;


    // get_by_roll_no( roll_no );

     console.log ( section_name )

     //get_by_section( section_name);

     
     let roll_no_status = false ;

     if (  roll_no.length === 0 )
     {
          console.log ( 'input field is empty')     

     }
     
     else
          {
     
          console.log(roll_no ) ;
          
          roll_no_status = true ;

     }

     if( roll_no_status  ) 
     {

          
          get_by_roll_no( roll_no ); 
          
     }

     else if( section_status  )
     {
          get_by_section( section_name );
     }
     
     else 
     {
          console.log('None of them selected ')
     }

}

async function  add_record () 
{

}

async function  delete_record() 
{

}


async function  get_record()
{

}


