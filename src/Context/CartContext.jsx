import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext();

// --- Helpers ---
const STORAGE_KEY = 'spa_cart_v1';
const loadInitial = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { items: [] };
  } catch {
    return { items: [] };
  }
};

// item shape: { id, title, price, image, qty, meta? }
function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item } = action;
      const idx = state.items.findIndex(i => i.id === item.id);
      let items;
      if (idx !== -1) {
        items = state.items.map((i, k) => (k === idx ? { ...i, qty: Math.min(i.qty + (item.qty || 1), 20) } : i));
      } else {
        items = [...state.items, { ...item, qty: Math.min(item.qty || 1, 20) }];
      }
      return { ...state, items };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'SET_QTY': {
      const { id, qty } = action;
      return {
        ...state,
        items: state.items.map(i => (i.id === id ? { ...i, qty: Math.max(1, Math.min(qty, 20)) } : i)),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const totals = useMemo(() => {
    const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const serviceFee = subtotal > 0 ? Math.max(200, subtotal * 0.02) : 0; // small processing/service fee
    const total = subtotal + serviceFee; // Taxes handled at checkout if needed
    return { subtotal, serviceFee, total };
  }, [state.items]);

  const value = useMemo(
    () => ({ items: state.items, dispatch, totals, count: state.items.reduce((n, i) => n + i.qty, 0) }),
    [state.items, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

// Convenient actions
export const CartActions = {
  add: (item) => ({ type: 'ADD', item }),
  remove: (id) => ({ type: 'REMOVE', id }),
  setQty: (id, qty) => ({ type: 'SET_QTY', id, qty }),
  clear: () => ({ type: 'CLEAR' }),
};