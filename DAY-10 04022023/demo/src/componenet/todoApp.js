import { useState } from "react";

export default function TodoApp(){

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    

    const addTodo = function(){
        setTodos( todos => [...todos, { content:todo, createdAt: new Date() } ] );
        setTodo("")
    }


    return(
        <div className="container mt-5">
            { /** show data */}

            <ul>
                {
                    todos.map((elm)=>{
                        return(
                            <li>
                                <p>{ elm.content }</p>
                                <p className="text-muted">{ elm.createdAt.toISOString() }</p>
                            </li>
                        );
                    })
                }
            </ul>



            { /** insert data !! */ }
            <div >
                <form className="d-flex" onSubmit={ (event)=>{
                    event.preventDefault();

                    addTodo();

                } } >
                    <input type="text" className="form-control" value={todo} onChange={(event)=>{ const val = event.target.value; setTodo(val) }} />
                    <button type="submit" className="btn btn-primary">Add</button>
                
                </form>
            </div>
        </div>
    );
}