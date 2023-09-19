async function render_data( ) 
{
     
     let students =  await fetch_data();

    // console.log ( students ) ;

     let table_body  =  document.querySelector('.table_body');

     let total_code =  new  Array();

     let html = '';
     
     students.forEach( student => 
          {
     
          console.log( student ) ; 

           html +=   
     
               `<tr>
               <td> ${student.Student_name } </td>
               <td> ${student.Student_roll}</td>
               <td>${student.Student_father_name}</td>
               <td>${student.Student_mother_name}</td>
               </tr>`
          //total_code.push(html)
          } 
     )  
     table_body.innerHTML = html

}

async function config () 
{

     let result =  adduser()

     console.log( result ) ;


}

async function fetch_data (  )
{

    // let url = "http:localhost:2020/getUsers"
     
     let response =  await fetch ( "http://localhost:2020/app/getUsers" ,{
     
                         method : "GET",
     
                         mode: 'cors'  , 
                         
                         headers: 
                          {
                         
                              Accept: "application/json"

                         },  
                    }
      );

     if( response.status == 200 )
     {

          let data  = await response.json();

          //console.log ( data );

          return data ;

     }    
     else 
     {
          
          console.log ( 'ERROR')

     }

}


async function  adduser (  )
{

     const response = await fetch("http://localhost:2020/app/insertUser" , 
     {
     
          method : 'POST' , 

          headers:
          {
               'Content-Type': 'application/json'

          },

          body :
          `
          {
          "Student_name": " Ravi kumar",
        "Student_roll": 12,
        "Student_father_name": "ddos",
        "Student_mother_name": "synack"
          }`,

          } )

     if ( response.status == 200)
     {
          console.log( response );
     }
     else 
     {
          console.log( "failure while inserting the record")

     }
}

//render_data();

//config() ;


//render_data();

function handle_text()
{


     const _year =  document.querySelector('.year_selector');

     const student_year = _year.value ;

     console.log( " student_year " ,  student_year  , typeof student_year);

     const _section =  document.querySelector('.section_selector');

     const _section_value = _section.value ;

     console.log ( " student section " ,  _section_value , typeof _section_value);

}





