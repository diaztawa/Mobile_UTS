import HomeScreen from './Home';
import UsersScreen from './Users';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
  {
    name: 'Home',
    icon: 'home',
    component: HomeScreen,
  },
  {
    name: 'Users',
    icon: 'users',
    component: UsersScreen,
    options: {
      headerShown: false,
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    },
  },
];