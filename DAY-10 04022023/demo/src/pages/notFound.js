import {Link} from 'react-router-dom';

export default function NotFound(){
    return(
        <div className="container mt-5 text-center">
            <h1>404 Not found</h1>
            <p>Sorry page not found, <Link to='/'>back to home page</Link> </p>
        </div>
    );
}