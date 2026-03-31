import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

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
  return (
    <header className="header">
      <h1>Fast Pizza Header</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>No Pizzas</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj: { name, ingredients, photoName, price, soldOut } }) {
  if (soldOut) return null;
  return (
    <li className="pizza">
      <img src={photoName} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>RM {price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Come back tomorrow, our operating hours are from {openHour} till{" "}
          {closeHour}
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order(props) {
  return (
    <div className="order">
      <p>We're open until {props.closeHour}</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
