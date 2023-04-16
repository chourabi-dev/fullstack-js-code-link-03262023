import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function SignInPage(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [connected,setConnected] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");



    const connectToServer = function(){
        // http call to get the token !!!

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":username,"password":password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/connect", requestOptions)
        .then(response => response.json())
        .then(result =>{
            if ( result.token != null ) {
                localStorage.setItem('token',result.token); // DONT FORGET TO SAVE TO TOKEN
                setConnected(true);
            }else{
                setErrorMessage(result.message);
            }
        })
        .catch(error => console.log('error', error));
        
    }


    return(
        <div className="container mt-5">

            { connected == true ? 
              <Navigate to="/" replace={true} />
            : null }



            <div className="card card-body">
                <h1>Authentification</h1>


                <form onSubmit={(event)=>{
                    event.preventDefault();
                    connectToServer();
                }} >

                    <div className="mb-2">
                        <label>Username</label>
                        <input type="text" className="form-control" value={ username }  onChange={(event)=>{
                            setUsername(event.target.value)
                        }} />
                    </div>
                    <div className="mb-2">
                        <label>Password</label>
                        <input type="password" className="form-control" value={ password }  onChange={(event)=>{
                            setPassword(event.target.value)
                        }} />
                    </div>
                    <div className="mb-2">
                       <button disabled={ username === '' || password==='' } type="submit" className="w-100 btn btn-primary">Connect</button>
                    </div>

                    {
                        errorMessage !== '' ? <div className="alert alert-danger">{errorMessage}</div> :null
                    }

                    <p className="text-muted">
                        You don't have an account ? <Link to={ 'create-account' } >create one for free</Link>
                    </p>
                    
                    

                </form>
            </div>
        </div>
    );
}