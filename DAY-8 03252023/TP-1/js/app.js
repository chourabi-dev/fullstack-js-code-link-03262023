//const blocElement = document.getElementById("bloc");

/**
 * 
console.log(blocElement.classList);
console.log(blocElement.className);

 */
/*
blocElement.addEventListener("click",function(){

    blocElement.className="bloc clicked";
})*/


const formElement = document.getElementById("form");
const usernameElement = document.getElementById("username");



formElement.addEventListener("submit",function(event){
    event.preventDefault(); // 


    // check if username != ""

    const username = usernameElement.value;


    if ( username =="" ) {
        usernameElement.className="form-control is-invalid"

    } else {
        usernameElement.className="form-control is-valid"
        
    }


})