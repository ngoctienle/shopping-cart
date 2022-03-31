import React, { Component } from "react";
import Title from "./Title";
import ProductList from "./ProductList";
import Cart from "./Cart";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <ProductList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
