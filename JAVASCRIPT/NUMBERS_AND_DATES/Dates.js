import { log } from "../CLOSURE_LOOK_AT_FUNCTIONS/util.js"
let date = new Date() 
log( date)

//printing the data based on the milliseconds
log( new Date(0))

date = new Date ( 5 * 24 * 60*60*1000)//prints date 
log( date)

date = new Date('october 24,1998')
log( date)
date  = new Date ('november 44 , 1990')//invalid date
log( date)

//in the dates it starts with 0 based means jan  month is 0 and so the last month dec - 11
               //year ,month,date,hour,min,sec
date = new Date( 2030 , 10 , 5 , 9 , 30,11)
log( date) // month = 10 so it is 10+1 = 11th month ( november)


let curr_date = new Date()//returns the current date in the millseconds 

let _5days_after_date =  5 * 24*60*60*1000
log( curr_date )
_5days_after_date   = new Date(Date.now() + _5days_after_date )
log(_5days_after_date)


log( curr_date.getFullYear() ,  curr_date.getMonth() ,curr_date.getTime(), curr_date.getDay() )
