import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contexts';

import{CartIconContainer,ShoppingIconRef,ItemCount} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, countItem } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  // const countItem = () =>{
  //   let count=0;
  //   cartItems.map((item)=>count=count+item.quantity);
  //   return count;
  // }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconRef className="shopping-icon" />
      <ItemCount className="item-count">{countItem}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
