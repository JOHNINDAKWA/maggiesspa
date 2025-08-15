import React from 'react';
import { CartActions, useCart } from '../../Context/CartContext';
import { formatKES } from '../../Utils/currency';
import { GoTrash, GoPlus, GoDash } from 'react-icons/go';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item__image" />
      <div className="cart-item__details">
        <h4 className="cart-item__title">{item.title}</h4>
        {item.meta && <p className="cart-item__meta">{item.meta}</p>}
        <div className="cart-item__controls">
          <button
            className="qty-btn"
            aria-label="Decrease quantity"
            onClick={() => dispatch(CartActions.setQty(item.id, item.qty - 1))}
          >
            <GoDash />
          </button>
          <input
            type="number"
            min="1"
            max="20"
            value={item.qty}
            onChange={(e) => dispatch(CartActions.setQty(item.id, parseInt(e.target.value || '1', 10)))}
          />
          <button
            className="qty-btn"
            aria-label="Increase quantity"
            onClick={() => dispatch(CartActions.setQty(item.id, item.qty + 1))}
          >
            <GoPlus />
          </button>
        </div>
      </div>
      <div className="cart-item__price">
        <span>{formatKES(item.price * item.qty)}</span>
        <button className="remove-btn" onClick={() => dispatch(CartActions.remove(item.id))}>
          <GoTrash /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;