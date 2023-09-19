function validate_file_type(file)
{

     let file_type = file.type;
     
     // here | operator specifies match any one of the following in the ( ) paranthesis 
     // i used for case sensitive search

     const accepted_file_types = new RegExp(/(jpg|webp|jpeg|png)/i);
     
     if ( file_type == undefined )
          console.log('invalid file type')
     else
     {
         if( accepted_file_types.test( file_type ))
         {
               console.log('valid file type')
         }
         else{
               console.log('invalid file type')
               console.log( 'accepted formats  = ' +'jpg  , webp , png ,jpeg' )
          }
     }

}


function check ( file )
{
     console.log( 'check')
     let reader = new FileReader();

     reader.readAsDataURL(file)

     reader.onload  = 
     function()
     {
          console.log('data loaded' + reader.result);
          document.querySelector('#img').src = reader.result ;
     }
}


function process_file(  input )
{

     //both files , value attributes belogns to the html element
     let file = input.files[0];

     const  file_value = input.value;
     //prints the path of the file(eg:C:/fakepath/hello.txt)
     console.log( file_value);

     //name, type, size attributes belongs to the file type
     
     const file_name = file.name;
     console.log( file_name);
     const file_type = file.type;
     console.log( file_type)
     const file_size = file.size;
     console.log( file_size)

    // validate_file_type( file);

    check( file)
}