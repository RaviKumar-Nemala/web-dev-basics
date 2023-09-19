
let my_map  = new Map ();


my_map.set( 'a' , 1 ) ;

my_map.set ( 1 , true);

for ( let [key , value] of my_map.entries() )
{
     console.log ( key , " "   , value ) ;
}

if ( my_map.has('a') )
{
     console.log ( 'element is presented ');
}     