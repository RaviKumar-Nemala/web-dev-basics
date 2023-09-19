let nav_tags   = Array.from(document.querySelectorAll('ul li a '))

let button = document.querySelector('.btn')

console.log( nav_tags)

function add_listeners() 
{
     nav_tags.forEach((ele) =>{ele.addEventListener('click' ,  (e) =>{
          
          ele.scrollIntoView({behaviour:'smooth'});

     })
}
     )
}

add_listeners()

/**
 * determining the height and width 
 */
/**client height, width are useful for finding the current view port height and the width */

let height = document.documentElement.clientHeight

let width = document.documentElement.clientWidth

console.log( height , width )
// alert( height)

let horizontal_scrolling_val =   window.pageXOffset

let vertical_scrolling_val = window.pageYOffset

console.log ( horizontal_scrolling_val , vertical_scrolling_val)

button.addEventListener('click', (e)=>
{
     console.log( e )
})


/**
 *   using the scrollTo function for scrolling
 */

button.addEventListener('click' , (e)=>
{
     //the below function returns the top , bottom , width , height current element with respecive to the current view port
     let target_div =  document.querySelector('.read_more')

     // console.log (target_div.getBoundingClientRect())

     console.log( target_div)

     let top_val= target_div.top 

     let x_direction_offset =  window.pageXOffset

     let y_directon_offset = window.pageYOffset

     target_div.scrollIntoView({behavior:'smooth'})

})

