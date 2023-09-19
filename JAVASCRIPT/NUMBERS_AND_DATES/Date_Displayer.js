import { log } from "../CLOSURE_LOOK_AT_FUNCTIONS/util.js"
let target_div = document.querySelector('div')
log( target_div)

function display_date()  {
let curr_date = new Date() ;
let date = curr_date.getDate()
date = `${date}`.padStart(2 , 0)
log( date)
let month = curr_date.getMonth()
month = `${month+1}`.padStart(2,0)
log( month)
let year =  curr_date.getFullYear()
log( year)

let hours =  curr_date.getHours()
hours =  `${hours}`.padStart(2,0)

let minutes =  curr_date.getMinutes()
minutes = `${minutes}`.padStart(2,0)


target_div.innerHTML =  `${date}/${month}/${year}      ${hours}:${minutes}`
target_div.style.color = 'black'
target_div.style.fontSize ='40px'

}

setInterval(display_date , 1000)
// display_date()