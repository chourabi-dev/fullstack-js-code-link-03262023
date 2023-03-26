/*let notes = [1,2,5,8,9,6,5,8,6,5]


// Loop => for(let i=0,....) => MAP !!!!

notes.map((e,i)=>{
    console.log(e,i);
});  


const result = notes.filter((e,i)=> {

    if (e <= 7) {
        return true;
    }

    return false;

} );  

console.log(result);



const result2 = notes.filter((n,i)=>{ 


    if (n >= 7 ) {
        return true;
    }

    return false;

})

console.log(result2);*/

const employeeslistElement = document.getElementById("employeeslist");
const search = document.getElementById("search");



const employees = [
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", phone:"93863732" },
    { fullname:"john wick", email:"john@gmail.com", phone:"93863732" },
    { fullname:"jason stathem", email:"jason@gmail.com", phone:"93863732" }, 
]


employees.map((e,i)=>{
    const blocHTML = `
        <div class="col-12 mb-3">
            <div class="card">
                <div class="card-body" >
                    <h3>${ e.fullname }</h3>
                    <p>${ e.email }</p>
                    <p>${ e.phone }</p> 
                </div>
            </div>
        </div>
    `;


    employeeslistElement.innerHTML = employeeslistElement.innerHTML + blocHTML;
})




search.addEventListener("keyup",function(e){
    // INIT DISPLAY !!!
    employeeslistElement.innerHTML="";
    
    const val = e.target.value;

    employees.filter((e,i)=>{
        if (
            
            ( e.fullname.indexOf(val) != -1  )
            ||
            ( e.email.indexOf(val) != -1  )
            ||
            ( e.phone.indexOf(val) != -1  )
            

        ) {
            return true
        }

        return false;
    }).map((e,i)=>{
        const blocHTML = `
            <div class="col-12 mb-3">
                <div class="card">
                    <div class="card-body" >
                        <h3>${ e.fullname }</h3>
                        <p>${ e.email }</p>
                        <p>${ e.phone }</p> 
                    </div>
                </div>
            </div>
        `;
    
    
        employeeslistElement.innerHTML = employeeslistElement.innerHTML + blocHTML;
    })
    



})