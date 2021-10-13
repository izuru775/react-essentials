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

function App() {
  return (
    <div className="App">
      <Header name="Nakamoto" />
      <Main adjective="amazing" dishes={dishesObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
