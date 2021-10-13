import React from 'react';
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
function RegularComponents (){
  return (
    <h1>Everyone can see this component</h1>
  )
}
function App(props) {
  return(
    <>
      {props.authorized? <SecretComponents/>:<RegularComponents/>}
    </>
  );
  if(props.authorized){
    return <SecretComponents/>
  }else{
    return (
      <div className="App">
        <RegularComponents/>
        <Header name="Nakamoto" />
        <Main adjective="amazing" dishes={dishesObject} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }

}

export default App;
