import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function App() {

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />

    </div>
  )
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu() {
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
  const numPizza = 1;
  return (
    <main className="menu">
      <h2>Our Menu </h2>


      {numPizza ?
        <>
          <p>
            Authentic Italian cuisine . 6 creative dishes to choose from .
            All are from our oven ,all organic , all delicious
   
       </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
        : "we are working on our menu "
      }
    </main>
  )
}

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? <span>"SOLD OUT" </span>: <span>{pizzaObj.price}</span>}
      </div>


    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 17;
  const closinghour = 22;
  const isOpen = hour > openingHour && hour < closinghour;
  return <footer className="footer">{isOpen &&
    (
      <Order closinghour={closinghour} />
    )} </footer>
}
function Order({ closinghour }) {
  return (
    <div className='order'>
      <p>
        we're open until {closinghour}:00 , come visit us or order
    </p>
      <button className="btn">Order</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
