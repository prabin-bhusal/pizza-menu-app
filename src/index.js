import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza, id) => (
            <Pizza
              key={id}
              photoName={pizza.photoName}
              name={pizza.name}
              desc={pizza.ingredients}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>We don't have any pizzas at sale right now :)</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHOur = 9;
  const closeHour = 17;

  const isOpen = hour >= openHOur && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order openHOur={openHOur} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHOur}:00 to {closeHour}:00
            :)
          </p>
        )}
      </div>
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <>
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </>
  );
}

function Pizza({ photoName, name, desc, price, soldOut }) {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt="pizza" />
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
