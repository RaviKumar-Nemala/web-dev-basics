let elements = document.querySelectorAll( ".div_1 p ");

//console.log( elements ) ;

let _list =  document.querySelector( ".list");

console.log( _list );

_list.setAttribute("style", "min-height:150px  ; width : 500px  ; display : flex ; flex-direction : column ; background-color: blue ; list-style:none")
//_list.setAttribute( "sytle" , "min-height : 100px ; display : flex ; list-style: none ;  flex-direction : column ; width :150px ; background-color : blue ");

let list_values =  document.querySelectorAll ( ".list li");


//console.log( list_values);

for ( let idx = 0 ; idx < list_values.length ; idx++)
{

     list_values [ idx].setAttribute( "style","color : white ; font-size : 20px  ; background-color : black ;padding : 10px  ; border : 2px solid red");

}

