import React from 'react';
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      {/* eslint-disable-next-line */}
      <a className="logo text-dark" href="#">Bookshop</a>
      {/* eslint-disable-next-line */}
      <a className="shopping-cart" href="#">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export {
  ShopHeader,
};
