import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './shop-header.css';

const numItems = (listItems) => {
  if (listItems.length === 0) {
    return 0;
  }

  return listItems.reduce((accumulator, item) => accumulator + item.count, 0);
};

const ShopHeader = ({ items = [], total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Bookshop</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart" href="#">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems(items)} items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
