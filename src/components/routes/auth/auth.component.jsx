/* eslint-disable no-unused-vars */
import SignUpForm from '../../sign-up/sign-up-form.component';
import SignInForm from '../../sign-in/sign-in-form.component';
import './auth.style.scss';

const Auth = () => {
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
