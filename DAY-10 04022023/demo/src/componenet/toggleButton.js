import { useState } from "react";

export default function ToggleButton(props){

    console.log(props);

    const [ etat, changementEtat ] = useState(props.etat);

    return(
        <div className={ etat === false ? 'toggle' : 'toggle active' }   onClick={()=>{
            changementEtat( ! etat )

            // call the parent function !!!
            props.parentFunction();

            
        }}  >
            <div></div>
        </div>
    );
}