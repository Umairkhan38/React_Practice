import React from "react";
import Navbar from './Navbar'

class List extends React.Component {
  items = [
    { id:1, item: "shoes", price: 2050, size: 9 },
    { id:2,item: "t-shirts", price: 1160, size: "XL" },
    { id:3,item: "suit", price: 5000, size: 12 },
    { id:4,item: "Sunglass", price: 950, size: "none" },
  ];

  //try to keep key Unique as ID or etc
  render() {
    return (
      <div>
      <Navbar />
        <h1>Products in stock </h1>

        <ul>
          {this.items.map((itm) => (
            <li key={itm.id}>
              ID: {itm.id} . item: {itm.item} | price: {itm.price} | size: {itm.size}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
