import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contain productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if not, add new to cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  countItem: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0
    );
    setCountItem(cartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, countItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
