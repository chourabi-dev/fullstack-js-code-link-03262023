const btn = document.getElementById("btn");


// add event listner !!!


// MOUSE EVENT POINTER EVENT KEYBOARDEVENT
/*
btn.addEventListener("click",function(){
    console.log("clicked !!");
})*/


// add event listner on a group of elements
/*
const elements = document.getElementsByClassName("like-btn");

for (let i = 0; i < elements.length ; i++) {
    const element =  elements.item(i);


    element.addEventListener("click",function(){
        console.log("demo");
    })
    
}*/



/*
document.getElementById("feild").addEventListener("mousemove",function(event){
    

    const x = event.clientX;
    const y = event.clientY;

    console.log(x,y);


    document.getElementById("ball").style.left=x+"px";
    document.getElementById("ball").style.top=y+"px";
    
})*/



/*
document.getElementById("zone-text").addEventListener("keyup",function(event){
    // event => target !! => HTMLeLEMENT In wich start the event !!

    const val = event.target.value;

    console.log(val);

    if ( val != "" ) { 
        document.getElementById("zone-text").style.borderColor="green";
        
    } else {
        document.getElementById("zone-text").style.borderColor="red";
         
    }

});*/