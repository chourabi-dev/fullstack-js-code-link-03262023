// <li class="list-group-item">And a fifth one</li>

const listElement = document.getElementById("list");
const inputElement = document.getElementById("input");


function ajouter(){
    // get the value from the input
    const val = inputElement.value;

    // check if val != ""
    if ( val != "" ) {
            // insert in the list HTML
            listElement.innerHTML= listElement.innerHTML +   '<li class="list-group-item">'+val+'</li>';

            // clear the input field
            inputElement.value=""
    }

}

function deleteAll(){
    if ( confirm("Do you reaaly want to delete all ?") ) {
        listElement.innerHTML="";
    } 
    
}