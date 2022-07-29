import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import {
  CartIconContainer,
  ShoppingIconRef,
  ItemCount,
} from './cart-icon.styles';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();
  // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  // const countItem = () =>{
  //   let count=0;
  //   cartItems.map((item)=>count=count+item.quantity);
  //   return count;
  // }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconRef className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
