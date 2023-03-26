const ageElement = document.getElementById("age");
const resultElement = document.getElementById("result");



function check(){
    const age = Number(ageElement.value);


    if (age < 18) {
        resultElement.innerHTML='<div class="alert alert-danger">Access denied</div>';
    }else if( age >= 18 ){
        resultElement.innerHTML='<div class="alert alert-success">Welcome</div>';
    }
}