// console.log( 'checking');

//asynchronous functions are running in the background
// it always returns the promises
//the return value of the asynchronous function is a fulfilled promise unless we handle explictily by using catch block
function f2()
{
     return Promise.resolve('ok')
}

async function f1()
{
     let x = await f2();
     console.log( 'after')//this will only be printed after we get the result x 
     return 1;
}

let res = f1();
res.then((val)=>console.log( val ))


//
async function f2()
{
     try
     { 
          let x = 1 ;
          let y = 0 ;
          let z = k + d;
          return z;
     }
     catch( err)
     {
          console.log( err.message );
     }
}
//even after getting the error it calls the then () method not catch() method
f2().then ( res => { console.log('inside of the full filled state ' + res) } )
.catch (err => console.log( 'inside of catch') );


     //if error occurs then rethrow that error so the caller function catch block will take care of that error
async function f3() {
     try
     { 
          let x = 1 ;
          let y = 0 ;
          let z = k + d;
          return z;
     }
     catch( err)
     {
          // console.log( err.message );
          throw err;
     }
}

f3().then(val => console.log( val ))
.catch ( err => console.log( 'inside of the catch block ' + err.message))

