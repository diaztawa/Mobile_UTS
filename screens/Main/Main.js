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
        marginBottom: 15,
      },
      style:{
        height:70,
        padding:10,
        backgroundColor: font_color.primary.main,
      },

      activeTintColor: font_color.primary.dark,
      inactiveTintColor: font_color.common.white,
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