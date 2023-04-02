import { useState } from "react";

export default function Counter(){

    // to change data on the screen !!
    // we need to useState !!
    // useState => react Hook !!!
    // reactHook => magic powers !!


    const [ count,modifierCount ] = useState(0);

    return(
        <div>
            <h3>{ count } clicks</h3>

            <button className="btn btn-primary"  onClick={ ()=>{

                // ...
                
                modifierCount(   ( count + 1 )   ) // count will get the value 5


            } }  >click +1</button>
        </div>
    );
}