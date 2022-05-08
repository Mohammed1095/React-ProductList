import React from "react";
import "./App.css";
import ProductRow from "./Components/productRow";

function App() {
  return (
    <div>
      <header className="text-2xl font-extrabold tracking-tight text-black-1200">
        <h1>My Products</h1>
      </header>
      <ProductRow />
    </div>
  );
}

export default App;
