
let observer =  new IntersectionObserver( (list) =>
{
     list.forEach((ele) =>
     {
          console.log( ele )
          if ( ele.isIntersecting ){
          if ( ele.target.classList.contains('hide'))
          {
               ele.target.classList.remove('hide')
          }
          else 
          ele.target.classList.add("hide")
     }
     
     })
}, {  rootMargin : '100px',}) // threshold specifies when it should iteresect the and call the call back function ( 0.5 means whenever the 50% of the element is visible on the screent then start intersecting the  element )
//threshold value specifies when our intersection will be called
// rootmargin : -100px means now our container is 100px smaller than before then intersection will be applied only element reaches 100px distance from the top of our parent container
//rootmargin :  100px means intersection has applied when ever the element is 100px below to reache the view port 

let cards =  document.querySelectorAll('.card')

cards.forEach( (ele) =>
{
     observer.observe(ele)
})