import logo from './logo.svg';
import './App.css';
import Counter from './componenet/counter';
import Article from './componenet/artcile';
import ToggleButton from './componenet/toggleButton';

function App() {
  // <Counter />

  // <Article title="react js" content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " />
  // <Article title="Angular js" content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " />
  // <Article title="Vue js" content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " />


  const functionA = function(){
    //
    console.log("traiment a....");

  }
  

  const functionB = function(){
    console.log("traiment b....");
    
  }
  
      
  return (
    <div >
        <ToggleButton  parentFunction={ functionA }  etat= { false } />
        
        <ToggleButton  parentFunction={ functionB } etat= { false } /> 
        
    </div>
  );
}

export default App;
