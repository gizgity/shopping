import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../../contexts/user.contexts';
import { CartContext } from '../../../contexts/cart.contexts';
import { signOutUser } from '../../../utils/firebase.utils';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.style.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
