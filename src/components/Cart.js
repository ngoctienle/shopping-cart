import React, { Component } from "react";
import CartItem from "./CartItem";
import Notify from "./Notify";

class Cart extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                <CartItem />
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                <tr>
                  <th colSpan={6}>Empty product in your cart</th>
                </tr>
                <tr>
                  <td colSpan={4}>
                    There are <b>5</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    12 USD
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Notify />
      </div>
    );
  }
}

export default Cart;
