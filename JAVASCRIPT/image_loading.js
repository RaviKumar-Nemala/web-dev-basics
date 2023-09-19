
let get_image = function ( img_path )
{
   

    return new Promise( ( resolve , reject ) =>
    {
          let img =  document.createElement('img');
          img.src = img_path;
          img.addEventListener('load' , resolve( img ) );
          img.addEventListener('error', reject ());
    })
}

function add_to_dom( ele )
{
     // console.log(ele)
     ele.style.display = 'block';
     document.body.appendChild(ele);

}

function hide_img ( )
{
     document.querySelector('img').style.display = 'none';
}
function display_img ()
{
     document.querySelector('img').style.display = 'block';
}

let wait = ( seconds ) => 
{
     return new Promise( (resolve, reject) => 
     {
          setTimeout(resolve,  seconds * 1000);
     }
     );
}

function load_unload_img ( ele)
{
     add_to_dom ( ele );
     wait( 2 ).then( () =>{ hide_img(); return ele }) 
     .then((ele) =>
     {
          wait(2)
          .then(()=>load_unload_img( ele ))
     })
}
 
function init() 
{
     get_image ( 'p1_img.webp')
     .then( ele=> load_unload_img( ele ))
     .catch( err => console.log( err));
}
init();

