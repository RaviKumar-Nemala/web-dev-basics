
let log = ( msg ) => {
     console.log( msg );
}
let res  = 20 && undefined ;//here 20 is the truthy value so next condition will be checked so next condition is undefined it is the falsy vaue so it will be returned
log (res )//undefined


res  = 33 && ''&&0;
log(res)//returns the empty string

res =  0 && 1 ;
log(res)//0

res =  33 &&44 ;//if both are truthy values then  last truthy value is returned 
log(res)//44


/** 
 *   NULLISH VALUE ( it consider undefined ,  null as falsy value and it considers ( 0 , '') as the truthy values)
*/

res =  0 ?? 1 ;
log(res)//0 printed
