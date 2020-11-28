import React from 'react';
import HomeScreen from './Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

const Drawer = createDrawerNavigator();
const { font_color } = useTheme();

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 100,
  },
});

const MainScreen = ({ navigation }) => {
    <View style={{
        padding: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: font_color.primary.main,
      }}
      >
        <TouchableOpacity style={styles.iconButton}
        onPress={() => navigation.openDrawer()}
        >
          <MaterialCommunityIcons
            name="menu"
            size={24}
            style={{ color: font_color.common.white }}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons
            name="bell"
            size={24}
            style={{ color: font_color.common.white }}
          />
        </TouchableOpacity>
        <MyDrawer/>
      </View>

    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  };

export default MainScreen;