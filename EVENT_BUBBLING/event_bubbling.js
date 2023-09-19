
let [parent]  =  document.getElementsByClassName('parent');

console.log( parent)

let child_elements  = Array.from(parent.children)

console.log( child_elements )

let child_1 =  parent.firstElementChild ;

console.log ( child_1)

/**
 * when ever any event is trigger on the html element like div or anchor or anything 
 * first that event is trigger at the document and it reaches to the html element and it passed to the nodes till reaches to the target node where it 
 * exactly triggeed this is called as the event catpuring phase 
 */

/**
 * NOTE : WHEN WE CLICK ON THE PARTICULAR  BUTTON IF WE DON'T SETUP ANY KIND OF THE EVEN LISTENER STILL THAT EVENT WILL BE TRIGGERED AND REACHES TO THE TARGET ELEMENT 
 */


/**
 * ON THE COMPLETION OF THE CAPTURING PHASE THEN It moves to the upward direct ( towards the parent util it reaches the document) this is called as the event bubbling
 */

/**
 * GENERALLY ADD_EVENT LISTENER WILL BE TRIGGERED DURING THE BUBBLING PHASE
 * BUT WE CAN ALSO MANUALLY SET UP TO TRIGGER THE EVENT IN THE CAPTION PHASE
 */

/**
 * INORDER TO STOP THE EVENT BUBBLING WE USE THE METHOD CALLED AS THE stopeventpropagation() this does not pass the event to its parent element
 */


function add_parent_click_listener () 
{
     parent.addEventListener( 'click' , (e)=>
     {
          // if the event is triggered on the parent element then  ( e )  contains info of the parent element but if the event triggeres at the child element then the ( e)  value is set to the child element 
           console.log ( e.target )
          //check if the event happened at the  child element or at the parent element
          if ( e.target.className == 'parent')
          {
               console.log ('EVENT IS ACTULLAY HAPPEND AT THE PARENT ELEMENT')
          }
          else 
          { 
                console.log ( 'EVENT IS ACTUALLY HAPPEND AT THE CHILD ELEMENT')
          }
           console.log ( 'PARENT EVENT LISTENER IS TRIGGERED')
      }
     );

}

function add_child_click_listener ( )
{
     
     child_elements.forEach ( ( ele )  =>
     {
          ele.addEventListener('click' , (e)=>
          {
               console.log( 'child element is clicked')
          })
     })

}

/**
 * now we are activating the both child and thparent  click event listeners
 * if we click on the child element then child element event handler will be triggered also due to the event bubbling then the paren eleement also able to intercept this event
 */

//MANUALLY SETTING UP THE EVENT LISTENER DURING THE CAPTION PHASE SO IT WIL BE CALLED FIRST 
function util ( ) 
  {
     parent.addEventListener( 'click' , (e)  =>
     {
          console.log ( e )
          console.log ( 'triggered')
     }
     , true
     )
  }

/**
 * EVENT PROPAGATION CHECK
 */

function util_1 () 
 {
     parent.addEventListener ( 'click' ,  (e) =>
     {
               console.log('parent element ')
               console.log ( 'STOPPING THE EVENT PROPAGATION')
               e.stopPropagation()
          }) 
 }

function  util_2() 
 { 
     child_elements.forEach( (ele) =>{

          ele.addEventListener( 'click' , (e)=>
          {
               console.log('CHILD ELEMENT')
               console.log('STOPPING THE EVENT BUBBLING')
               e.stopPropagation()
          })
     }
     )
     
 }

//add_child_click_listener() ;

// add_parent_click_listener() ;

// util () 
// 
util_1()

util_2()