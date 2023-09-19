/**
 * event bubbling is helpful for setting up the event listeners for the elements
 * say we have 100 child elements instead of setting up the event listners for the all the elements we can select the common parent for the all child elements and add the event listener for that due to the event bubbling it reaches to the parent element 
*/

let [parent]  =  document.getElementsByClassName('parent');

console.log( parent)

let child_elements  = Array.from(parent.children)

//handling the child element click event from the parent element
parent.addEventListener('click' , (e)=>
{
     let triggered_ele  = e.target
     //don't log anything if click happend on the parent div
     //print the div only if the event is originated at its child elements
     if (triggered_ele != parent)
          console.log( triggered_ele)

})