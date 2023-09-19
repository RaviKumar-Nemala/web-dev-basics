//'use strict'

const main_div = document.querySelector('.main_div');

let name_status = false;

let roll_status = false;

let section_status = false;

let flag = false;


async function request(url, params, method = 'GET') {

     let options =

     {

          method,

          mode: 'cors',

          headers:
          {

               'Content-type': 'application/json'

          }

     }

     if (method === 'GET') {

          url += '?' + (new URLSearchParams(params)).toString();

     }

     else if (method === 'POST') {

          options.method = 'POST',

          options.body = JSON.stringify(params);

          console.log('post api')

     }

     let response = await fetch(url, options);

     console.log(response)

     return response;

}

async function send_data(_name, _roll, _section) {

     let params =
     {
          name: _name,

          roll: _roll,

          section: _section

     }


     let url = "http://localhost:2020/insert"

     const method_type = 'POST'

     let server_response = await request(url, params, method_type)

     console.log(server_response)

     if (server_response.status === 200) {

          console.log("valid response")

          response_data = await server_response.text();

          console.log('printing the data')

          console.log(response_data);

     }

}

async function get_by_roll_no(roll_no, current_div) {

     let params =
     {
          roll: roll_no
     }

     let url = "http://localhost:2020/get_by_roll";


     let table_div = document.querySelector('#table_div')


     console.log(url);


     let response = await request(url, params, 'GET');

     if (response.status === 200) {

          console.log('SUCCESS')

          let response_content = await response.json();

          console.log(response_content)

          console.log('displaying the  get req content ');

          display_tabular_data(response_content, false, current_div)

     }

     else {

          console.log('failure while fetching the data ')

     }

}

async function get_by_section(_section, current_div) {


     let params =
     {
          section: _section
     }

     const url = "http://localhost:2020/get_by_section"

     let response = await request(url, params, 'GET');

     if (response.status == 200) {

          let response_content = await response.json();

          console.log(response_content);

          display_tabular_data(response_content, true, current_div)

     }

     else {

          console.log('INSIDE OF THE GET_BY_SECTION')

          console.log('FALIURE ON GETTING DATA ')

     }

}



const display_tabular_data = (response_content, multiple_records = false, current_div) => {


     current_div.style.display = 'none';

     let table = document.querySelector('#table_div');

     table.style.display = 'block'

     let table_data = ''

     if (multiple_records == false) {

          table_data +=

               `<tr>
          <td>${response_content.name}</td>
          <td>${response_content.section}</td>
          <td>${response_content.roll}</td>
          </tr>`

     }

     else {

          response_content.forEach(response_data => {

               console.log('inside of the for loop')

               table_data +=

                    `<tr>
          <td>${response_data.name}</td>
          <td>${response_data.section}</td>
          <td>${response_data.roll}</td>
          </tr>`

          });

     }

     table_body.innerHTML = table_data;

}

//const display_updated_tabular_data = ( response_content , multiple_records = false , current_div  ) =>

const display_updated_tabular_data = (response_content, multiple_records = false, current_div) => {

     current_div.style.display = 'none';


     let table = document.querySelector('#table_div');



     let table_body = table.querySelector('#table_body')

     let table_data = ''

     let counter = 0;

     if (multiple_records == false) {

          table_data +=

               `<tr>
          <td>${response_content.name}</td>
          <td>${response_content.section}</td>
          <td>${response_content.roll}</td>
          <td><a class = "update_btn" id ="update_btn_${counter}" style = " height :  100%  ; width : 100% ; cursor : pointer ; color : red ; font-weight: bolder " >UPDATE </a> </td>
          </tr>`

     }

     else {

          response_content.forEach(response_data => {

               console.log('inside of the for loop')

               table_data +=

                    `<tr>
          <td>${response_data.name}</td>
          <td>${response_data.section}</td>
          <td>${response_data.roll}</td>
          <td><a class = "update_btn" id ="update_btn_${counter}" style = " height :  100%  ; width : 100% ; cursor : pointer ; color : red ; font-weight: bolder " >UPDATE </a> </td>
          </tr>`

          });

     }

     console.log('outside of the loop')

     table_body.innerHTML = table_data;

     table.style.display = 'block';

     update_button_event_listeners(table);

}

const add_records = () => {



     let record_div = main_div.querySelector('#record_adder')

     const name = record_div.querySelector('#name').value;

     if (name.length === 0) {

          alert('Invalid Name')

     }

     else {

          name_status = true;

     }

     const roll = Number(record_div.querySelector('#roll').value)

     //if the conversion is not done properly need to check that

     if (isNaN(roll))
          alert('invalid roll no ')
     else {
          roll_status = true;
     }

     const section = record_div.querySelector('#_section').value;

     if (section.length === 0) {

          alert('Invalid Section ')

     }
     else {

          section_status = true;

     }

     console.log("Name : " + name + " type : " + typeof name);

     console.log("Roll : " + roll + "type : " + typeof roll)

     console.log("Section : " + section + "type : " + typeof section)


     if (name_status && roll_status && section_status) {

          send_data(name, roll, section)

     }
     else {

          console.log("something wrong the record_Adder")

     }

}

const get_records = () => {

     console.log('inside of the get records')

     let current_div = main_div.querySelector('#record_getter')

     const roll = Number(current_div.querySelector('#roll').value);


     if (isNaN(roll) || roll === 0) {

          alert('invalid roll no ');

          roll_status = false;

     }
     else {

          roll_status = true;

     }

     const section_value = current_div.querySelector('#select_attr').value;

     if (section_value === 'none') {

          console.log('SECTION IS NOT SELECTED')

          section_status = false;

     }

     else {
          section_status = true;
     }


     console.log('roll_status = ' + roll_status, 'section_status = ' + section_status)

     if (roll_status) {

          get_by_roll_no(roll, current_div);

     }

     else if (section_status) {

          get_by_section(section_value, current_div)

     }

}



async function get_records_util(_roll, current_div) {
     let params =
     {
          roll: _roll
     }

     let url = "http://localhost:2020/get_by_roll";

     let response = await request(url, params, 'GET')

     let response_content = await response.json();


     console.log('inside of the get_records_util ')

     console.log(response_content)

     display_updated_tabular_data(response_content, false, current_div)

}



const update_records = () => {


     let record_updater = main_div.querySelector('#record_updater')

     console.log(record_updater)

     const name = record_updater.querySelector('#name').value;


     const roll = Number(record_updater.querySelector('#roll').value);

     console.log(name + "\n" + roll);

     if (isNaN(roll)) {
          console.log('ROLL NO IS EMPTY')
     }

     else {
          roll_status = true;
     }

     if (name === null) {
          console.log('NAME IS NULL')

          name_status = false;
     }
     else {
          name_status = true;

     }

     if (roll_status) {

          get_records_util(roll, record_updater);

     }

}


function temp(update_button) {

     console.log(update_button)

     console.log('upadate button has clicked')

     let update_button_id = update_button.getAttribute('id')

     let size = update_button_id.length;

     console.log(update_button_id)

     let row_number = update_button_id.charAt(size - 1)

     console.log('row number' + row_number)

     return row_number; 

}


     
     //returns the update button number( tr tag series  number) of the cliked update button
      function add_event_listener_to_update_buttons() {
          
          let row_number =0 ;
          
          let update_buttons = document.querySelectorAll('.update_btn');

          console.log( update_buttons )

          console.log('inside of the onclick event listeners')
          
          console.log(update_buttons.length)
          
         
          
          for (let idx = 0; idx < update_buttons.length; idx++)

          {
               let update_button =  update_buttons[idx]

               let value = update_button.addEventListener('click',  execute)

               function execute()
               {

                    console.log ( 'idx_val')
                    
                    row_number = temp (update_button )

                    row_number   = 99

                    console.log(row_number +'hello')
          
                    console.log ('hell')
          
                    window.flag = true ;

                    console.log('cancelling event')

                    return row_number;
                    
                    update_button.removeEventListener('click' , execute)
               }
               console.log( value )

          }

     }

function update_button_event_listeners(table_div) {

     console.log('inside of the update_button_evnt_listeners')

     console.log(table_div)

     let tr_tag_number = add_event_listener_to_update_buttons();

     console.log(tr_tag_number)

     let table_body = document.querySelector('#table #table_body')

     let table_rows = table_body.getElementsByTagName('tr')

     // let target_row = document.querySelector('#table #table_body tr:nth-child(${tr_tag_number})' ) 

     let count = 0;

     let target_row = table_body.querySelector(`tr:nth-child(${tr_tag_number})`)

     console.log(target_row)

     /*
     for  ( let row of table_rows.rows)
     {
      if ( count ===  tr_tag_number)
      {
           target_row =  row
 
           break;
      }
 
     }
 
     console.log ( target_row)
      */


     /*
     for ( let cell of target_row.cells)
     {

          console.log ( cell.innerText);

     }
*/

     // console.log( "table_body_length"+table_body.length);
     /*     
          let update_buttons =  document.querySelectorAll('.update_btn')
          
          
          console.log ( 'inside of the onclick event listeners')
          
          for ( let idx = 0 ; idx < update_buttons.length ; idx ++ )
          {
               
               let update_button =  update_buttons  [ idx ] ;
               
               update_button.addEventListener('click' , function temp ()
               {
                    
                    //          current_div.style.display = 'none' ;
                    
                    // let before_name_val = current_div.querySelector('#name').value;
                    
                    // console.log ( name_val)
                    
                    console.log ( table )
                    
                    let update_button_id =  update_button.getAttribute('id')
                    
                    let size = update_button_id.length ;
     
                    console.log ( update_button_id)
     
                    let row_number =  update_button_id.charAt(size-1)
     
                    console.log( row_number)
     
                    console.log( table.rows.item(0).innerHTML)
                   
                    // let during_update_div = document.querySelector('.during_update');
     
                    // during_update_div.querySelector('#name').value = before_name_val
     
               } )
     
          }
     */

}

//display_updated_tabular_data();
// UPDATING THE RECORD
document.getElementById('btn_3').addEventListener('click', update_records);

// ADDING THE NEW RECORDS
// document.getElementById('btn_1').addEventListener('click' , add_records );


//GETTING THE NEW RECORDS
document.getElementById('btn_4').addEventListener('click',  get_records )
