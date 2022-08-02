import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import // onAuthStateChangedListener,
// createUserDocumentFromAuth,
// getCurrentUser,
'../src/utils/firebase.utils';

import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Auth from './components/routes/auth/auth.component';
import Shop from './components/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';

// import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
