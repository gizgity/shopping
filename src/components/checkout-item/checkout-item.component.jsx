import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
  removeItemByButton,
  removeItemFromCart,
  addItemToCart,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  // const { removeItemByButton, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  // const removeButtonHandler = () => removeItemByButton(cartItem);
  // const addItemHandler = () => addItemToCart(cartItem);
  // const removeItemHandler = () => removeItemFromCart(cartItem);
  const removeButtonHandler = () => dispatch(removeItemByButton(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeButtonHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
