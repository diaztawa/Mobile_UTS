
import LoginScreen from './Login';
import RegisterScreen from './Register';
import DetailsScreen from './Details';
import HomeScreen from './Main/Home';
import MainScreen from './Main/Main';
import { CardStyleInterpolators } from '@react-navigation/stack';

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
  {
    name: 'Main',
    component: MainScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { 
      headerShown: false,
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    },
  },
];