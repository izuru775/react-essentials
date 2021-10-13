import React from 'react';
import kitchen from './kitchen.jpg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

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

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}



const dishes = [
  "Rost chicken with salad",
  "Lamb kebab",
  "Stake sandwich"
];

const dishesObject = dishes.map((dish, i) => ({ id: i, title: dish }))
// console.log(dishesObject)

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
