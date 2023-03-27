import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <h1>Cart Page</h1>

      <div className="cart-page-container">
        <table>
          <tr>
            <td>
              <b> Name</b>
            </td>
            <td>
              <b>Color</b>
            </td>
            <td>
              <b>Price</b>
            </td>
            <td>
              <b>Brand</b>
            </td>
            <td>
              <b>Category</b>
            </td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>

        <div className="price-details ">
          <div className="adjust-price">
            <span>Amount ...</span>
            <span>{amount} $</span>
          </div>
          <div className="adjust-price">
            <span>Discount ...</span>
            <span>{amount / 10} $</span>
          </div>
          <div className="adjust-price">
            <span>Tax ...</span>
            <span>{(amount - amount / 10) * 0.15} $</span>
          </div>
          <div className="adjust-price">
            <span>Total ...</span>
            <span>{amount - amount / 10 + (amount - amount / 10) * 0.15} $</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
