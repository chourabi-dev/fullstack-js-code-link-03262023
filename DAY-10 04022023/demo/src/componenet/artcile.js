import { useState } from "react";

export default function Article(props){


    const [more,changeMore] = useState(false);

    

    return(
        <div className="container mb-3">
            <div className="card card-body">
                <h1>{ props.title }</h1>


                {
                    more === false ? 
                
                    <p className="text-muted">
                        { props.content.substr(0,30) }
                        <span className="text-primary" onClick={ ()=>{
                            changeMore(true)
                        } }>read more</span>
                    </p>


                    :
                
                    <p className="text-muted">
                        { props.content } 
                        <span className="text-primary" onClick={ ()=>{
                            changeMore(false)
                        } }>read less</span>
                    </p>
                    
                }


                
                
                
            </div>
        </div>
    );
}