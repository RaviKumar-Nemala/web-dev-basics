const form_element  =  document.querySelector('form')

form_element.addEventListener('submit',(e) =>
{
          e.preventDefault();//used to cancel the default submission of the form

         // extract_input( form_element )
        console.log('inside of the add event listener')
        const new_form = new FormData( form_element)
     
     console.log( new_form.keys());// returns the keys of the form 

     for ( let [key , value]  of new_form.entries())
     {
          console.log ( 'key = '+key + " value = "+value);
     }

} 

)

function sample_form_functions() 
{
     let new_form = new FormData (form_element);
     new_form.append(key , value ) ;// adding the new entry to the form
     new_form.delete(key);//delete the entry based on the key
     new_form.set(key , value );
     new_form.get(key)//returns the value of the coresponding key
     new_form.keys()//returns all keys;
     new_form.value()//returns all values;
     new_form.entries() //returns all the entries
}


function extract_input( form_element )
{

     let new_form = new FormData( form_element )
     console.log( 'inside of the extract input')
     new_form.append('hello' , 'value');
     let keys = new_form.keys()
     for ( let key of keys)
     {
          //console.log( 'key = '+key +" value : "+new_form.get(key))
          console.log( key );
     }
}

