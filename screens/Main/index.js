import HomeScreen from './Home';
import UsersScreen from './Users';
import SearchScreen from "../../components/SearchScreen";
import ReviewScreen from "./Review";
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
  {
    name: 'Home',
    icon: 'home',
    component: HomeScreen,
  },
  {
    name: 'Search',
    icon: 'search',
    component: SearchScreen,
  },
  {
    name: 'Review',
    icon: 'star',
    component: ReviewScreen,
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