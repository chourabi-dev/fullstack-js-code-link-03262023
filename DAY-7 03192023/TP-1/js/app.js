document.getElementById("search").addEventListener("keyup",function(event){

    const val = event.target.value;

    const ul = document.getElementById("list");


    for (let i = 0; i < ul.children.length; i++) {
        const li =  ul.children.item(i);
        
        
        const liText = li.innerHTML;


        if ( liText.indexOf(val) != -1 ) {
            li.style.display="list-item";
        }else{
            li.style.display="none";
        }

    }

})