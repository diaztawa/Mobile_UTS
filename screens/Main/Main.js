import React from 'react';
import HomeScreen from './Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const { font_color } = useTheme();

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 100,
  },
});

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

    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  };

export default MainScreen;