import React,{useState,useEffect} from 'react';
import kitchen from './kitchen.jpg';
import './App.css';

// Header component
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
// Main component
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img 
        alt="classic looking kitchen" 
        src={kitchen} 
        height={200}
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) =>
          <li key={dish.id}>{dish.title}</li>
        )}
      </ul>
    </section>
  );
}
// Footer component
function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}


// Dishes array
const dishes = [
  "Rost chicken with salad",
  "Lamb kebab",
  "Stake sandwich"
];

// Maping an dishes array in to array of objects
const dishesObject = dishes.map((dish, i) => ({ id: i, title: dish }))

/* 
Conditional Rendering
*/

// Function for secret components
function SecretComponents (){
  return (
    <h1>Super secret infromation for authorized users only</h1>
  )
}
// Function for regular components
function RegularComponents ({emotion,secondary}){
  return (
    <p>Current emotional state is: {emotion} and {secondary}</p>
  )
}
function App({authorized}) {

  const [emotion,setEmotion] = useState("happy");
  const [secondary,setSecondary] = useState("tired");

  useEffect(()=>{
    console.log(`It's ${emotion} around here`)
  },[emotion])
  useEffect(()=>{
    console.log(`It's ${secondary} around here`)
  },[secondary])

  if(authorized){
    return <SecretComponents/>
  }else{
    return (
      <div className="App">
        <RegularComponents emotion ={emotion} secondary={secondary}/>
        <button onClick={()=>setEmotion("frustrated")}>
          Frustrated
        </button>
        <button onClick={()=>setEmotion("happy")}>
          Happy
        </button>
        <button onClick={()=>setSecondary("crappy")}>
          Crappy
        </button>
        <Header name="Nakamoto" />
        <Main adjective="amazing" dishes={dishesObject} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }

}

export default App;
