console.log("js is working...");

//console.log(window);
//console.log(window.document);
//console.log(document);

/*
console.log(  typeof "bonjour"  );
console.log(  typeof 5  );
console.log(  typeof 5.2  );
console.log(  typeof 2000  );
console.log(  typeof NaN  ); 
console.log(  typeof true  );
console.log(  typeof ["str","str","str","str","str"]  );
console.log(  typeof {}  ); // json
console.log(  typeof new Date()  ); */


// declaration variable !!!
/*var a = "bonjour";
var b;
var c = null;

var a = "123";

let test = 123; 

const pi = 3.14;*/
//console.log(window);



function calculer(){
    const x = document.getElementById("x").value; // string
    const y = document.getElementById("y").value; // string

    const op = document.getElementById("op").value; // string

    let result = 0;


    if ( op == "+" ) {
          result = ( Number(x)+Number(y) ); 
    }else if( op == "-" )  {
          result = ( Number(x)-Number(y) );
    }else if(  op == "*"  ){
          result = ( Number(x)*Number(y) );
    }

    
    const msg = "la somme de x + y = "+result;


    const resultElement = document.getElementById("result");

    resultElement.innerText = msg;
}