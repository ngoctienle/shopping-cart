import React, { Component } from "react";

import Helpers from "./../libs/Helpers";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event) => {
    const target = event.target; //input selectbox
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    let { cartItem, index } = this.props;
    let { product } = cartItem;
    let quantity =
      this.state.value !== 0 ? this.state.value : cartItem.quantity;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{product.name}</td>
        <td>{Helpers.toCurrency(product.price, "$", "left")}</td>
        <td>
          <input
            name="value"
            type="number"
            value={quantity}
            onChange={this.handleChange}
            min={1}
          />
        </td>
        <td>{this.showSubTotal(product, quantity)}</td>
        <td>
          <a
            className="label label-info update-cart-item"
            href="/#"
            data-product
          >
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            href="/#"
            data-product
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }

  showSubTotal(product, quantity) {
    let result = null;
    result = (
      <strong>
        {Helpers.toCurrency(product.price * quantity, "$", "left")}
      </strong>
    );
    return result;
  }
}

export default CartItem;
