import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function HomePage(){

    const [connected,setConnected] = useState(true);
    const [products,setProducts] = useState([]);


    function getDataFromServer(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/product/list", requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log(result);

            setProducts(result);

        })
        .catch(error => console.log('error', error));
    }




    useEffect(()=>{
        if ( localStorage.getItem('token') == null ) {
            setConnected(false);
        }


        getDataFromServer();

    },[])


    return(
        <div className="container mt-5">
            <h1>Product App</h1>
            
            { connected == false ? 
             <Navigate to="/auth" replace={true} />
            : null }


            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Code</th>
                        <th>Actions</th>
                        
                        
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.product}</td>
                                    <td>{p.price}$</td>
                                    <td>{p.quantity}$</td>
                                    <td>{p.code}$</td>
                                    <td>

                                    </td>
                                    
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}