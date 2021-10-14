import React, { useState, useEffect } from 'react';
import kitchen from './kitchen.jpg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact
} from "./pages";
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
function SecretComponents() {
  return (
    <h1>Super secret infromation for authorized users only</h1>
  )
}
// Function for regular components
function RegularComponents({ emotion, secondary }) {
  return (
    <p>Current emotional state is: {emotion} and {secondary}</p>
  )
}
// Function for no data
function NoData() {
  return (
    <NoData />
  );
}
// https://api.github.com/users/izuru775
function App() {
  const authorized = false;
  const user = "izuru775"
  const [data, setData] = useState(null)
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  const [loadin, setLoadin] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log(`It's ${emotion} around here`)
  }, [emotion])
  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])
  useEffect(() => {
    if (!user) return;
    setLoadin(true)
    fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoadin(false))
      .catch(setError)
  }, [user]);
  if (loadin) return <h1>Loadin...</h1>;
  if (error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null;
  if (authorized) {
    return <SecretComponents />
  } else if (data) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1>Hello</h1>
        <RegularComponents emotion={emotion} secondary={secondary} />
        <button onClick={() => setEmotion("frustrated")}>
          Frustrated
        </button>
        <button onClick={() => setEmotion("happy")}>
          Happy
        </button>
        <button onClick={() => setSecondary("crappy")}>
          Crappy
        </button>
        <div>
          <p>The owner of the resturant: {data.name}</p>
          <p>He lives in: {data.location}</p>
          <img alt={data.login} src={data.avatar_url} height={100} />

        </div>


        <Header name={data.name} />
        <Main adjective="amazing" dishes={dishesObject} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
