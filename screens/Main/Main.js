import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import screens from './index';
import useTheme from '../../hooks/useTheme';

const { font_color } = useTheme();

const Tab = createBottomTabNavigator();

const MainScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      labelStyle: {
        marginBottom: 6,
      },
      activeTintColor: font_color.primary.main,
      inactiveTintColor: '#888',
    }}
  >
    {screens.map((screen) => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name={screen.icon}
              size={size}
              color={color}
            />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default MainScreen;