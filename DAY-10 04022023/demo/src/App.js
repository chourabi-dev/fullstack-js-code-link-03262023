import Article from './componenet/artcile';
import Forms from './componenet/forms';
import TodoApp from './componenet/todoApp';

export default function App(){

    // call server!! to get the data !!
    const contents = [
        { id:1, title:'react js',content:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' },
        { id:2, title:'Vue js',content:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' },
        { id:3, title:'Angular JS',content:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' },
    ];


    return(
    
    <div>
        {
            /*contents.map( (information)=>{
                return <Article key={information.id} title={ information.title }  content={ information.content } />
            } )*/
        }



        {
            /**
             * <Forms />
             */
        }

        <TodoApp />
    </div>
    
    );
}