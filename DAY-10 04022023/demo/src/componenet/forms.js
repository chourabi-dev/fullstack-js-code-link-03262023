import { useState } from "react";

export default function Forms(){

    // SINGLE PAGE APP !!!
    // REFRESH = CLOSE AND REOPEN THE APP!!!

    const [username,changeUsername] = useState("");
    const [password,changePassword] = useState("");

    return(
        <form onSubmit={ (event)=>{
            event.preventDefault();

            console.log(username,password);
            

        }} >



            <div className="mb-3">
                <label>Username </label>
                <input type="text" className={ username ==='' ? 'form-control is-invalid': 'form-control is-valid' }  value={username}
                onChange={ (event)=>{
                    const val = event.target.value;

                    changeUsername(val);
                } }
                />
            </div>



            <div className="mb-3">
                <label>Password</label>
                <input type="text" className={ password ==='' ? 'form-control is-invalid': 'form-control is-valid' } value={password} 
                
                onChange={ (event)=>{
                    const val = event.target.value;

                    changePassword(val);

                } } />

                
            </div>
            
            <div className="mb-3">
               <button   disabled={ (username === '') || ( password==='' )  }  type="submit" className="btn btn-success">Connect</button>
            </div>
            
        </form>
    )
}