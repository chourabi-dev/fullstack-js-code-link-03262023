import { useEffect, useState } from "react";
import Navbar from "../componenet/navbar";
import {Link} from 'react-router-dom'
export default function UserPage(){

    const [users,setUsers] = useState( [] );



    const getUsersListFromServer = function(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())

            .then(result =>{
                console.log(result)

                setUsers(result);

            }) // SUCCESS !! 

            .catch(error => console.log('error', error)); // ERRO INTERNET ?


    }


    // hook useEffect 
    // automatically exucte code !!!

    useEffect(()=>{
        getUsersListFromServer();
    },[]) // we need to pass an empty state, to avoid infinite loops !!!



    return(
        <div>
            <Navbar />
            <h1>Users page</h1>

            <ul>
                {
                    users.map((u)=>{
                        return(
                            <li>
                                <p><strong>{u.name}</strong></p>
                                <p className="text-muted"><strong>{u.email}</strong></p>
                                
                                <Link to={ '/users/details/'+u.id  } >more details...</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}