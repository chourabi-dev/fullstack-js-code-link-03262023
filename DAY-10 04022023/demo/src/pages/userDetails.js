import Navbar from "../componenet/navbar";
import { useParams } from 'react-router-dom';


export default function UserDetailsPage(){

    const params  = useParams(); // extraction des variable de url

    console.log(params);



    return(
        <div>
            <Navbar />
            <h1>Loading user information N° {params.id} </h1>
        </div>
    );
}