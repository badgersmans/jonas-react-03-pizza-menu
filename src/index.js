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
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1>Fast Pizza Header</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="spinachi"
        ingredients="Spinach, tomato, cheese"
        photoName="pizzas/focaccia.jpg"
        price={20}
      />
    </main>
  );
}

function Pizza({ name, ingredients, photoName, price }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={photoName} />
      <div>
        <h3>pizza {name}</h3>
        <p>{ingredients}</p>
        <span>RM {price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open!
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
