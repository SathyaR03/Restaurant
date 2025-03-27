import React, { Component } from "react";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = { stock: ["Tomatoes", "Cheese", "Flour", "Chicken"] };
  }

  render() {
    return (
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Ingredients</h2>
        <ul>
          {this.state.stock.map((item, index) => (
            <li key={index} className="p-1 border-b">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ingredients;
