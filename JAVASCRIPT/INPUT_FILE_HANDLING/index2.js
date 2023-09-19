
function validate_file_type ( file )
{
     if ( file.type  == undefined )
          return false;
                                        //don't use use space in regex
     let accepted_image_file_types =  new RegExp(/(jpeg|png)/i)

     let file_type =  file.type ;

     if ( accepted_image_file_types.test(file_type))
     {
          console.log('valid image type')
          return true;
     }
     console.log('invalid file type')
     return false;
}

function print_names( files )
{
     for ( let  idx = 0 ; idx < files.length ; idx++){

          let element = files[  idx ] ;
          console.log(element.name);
          console.log(element.size);
          console.log(element.type+"\n");
          if ( !validate_file_type( element) ) 
          {
               alert( 'invalid file format ' + element.name);
          }
    }

}
document.addEventListener('change' , (e) =>
{
     let input_element =  e.target;
     console.log(input_element);
     let files  =  new Array();

     if( files == null )
          console.log('no files selected')
     files = input_element.files;

     console.log( 'no of files selected = '+files.length )

     console.log('printing the file paths ');
     
     print_names( files )



}

)