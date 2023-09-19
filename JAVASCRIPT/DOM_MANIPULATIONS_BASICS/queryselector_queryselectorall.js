// incase of the class then use the (.)operator if incase the id use the #symbol 


//selects the first element matches with the provied string 

document.querySelector('#para').textContent = "hello";

document.querySelector(".div_1").innerHTML = "modified using queryselector "


// returns all the nodes matches with the provided string
let contents = document.querySelectorAll(".div_1");

// modifying the individual elements after that

for ( let i = 0 ; i < contents.length ; i++)
contents [ i ].innerHTML = "ddos"

console.log( contents) ;





