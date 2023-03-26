// function componenet !! 

import ContactItem from "./compoenents/contact";
import CookBookItem from "./compoenents/cookBook";





function App(){
  return(
    <div>

        <h1>Cook book</h1>


        <CookBookItem  imageURL="https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg"  title="Cheesecake"  content="With this recipe, a creamy, gorgeous, crack-free New York-style cheesecake is totally doable, even" />


        <CookBookItem    title="Cheesecake"  content="With this recipe, a creamy, gorgeous, crack-free New York-style cheesecake is totally doable, even" />


        <CookBookItem  imageURL="https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg"  title="Cheesecake"  content="With this recipe, a creamy, gorgeous, crack-free New York-style cheesecake is totally doable, even" />



    </div>
  );
}





/*

function App(){
  return(
    <div>
        <h1>Contact List:</h1>
  
        <ContactItem fullname="chourabi taher" email="tchourabi@gmail.com" phone="93863732" />
 
        
    </div>
  );
}

 */
 

/*

function getUserName(){
  return("demo");
}
function App() { 
  const year = 2023
  const title = <h1>Bonjour !!</h1>
  const imgSRC = "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg";
 
  return (
    // THIS IS NOT HTML !!!!!
    // JSX !!!
    <div >
      { title } current year : { year }

      <p>
        { 5 * 5 }
      </p> 
      <p>
        { getUserName() }
      </p>


      <img src={ imgSRC }  /> 

    </div>
  
  );



}*/

export default App;


 