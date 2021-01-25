
import LoginScreen from './Login';
import RegisterScreen from './Register';
import HomeScreen from './Main/Home';

export default [
  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'Register',
    component: RegisterScreen,
    options: { headerShown: false },
  },
  {
    name: 'Home',
    component: HomeScreen,
    options: { headerShown: false },
  },
];