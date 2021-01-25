import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, ScrollView, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import MangaItem from '../../components/MangaItem';
import useTheme from '../../hooks/useTheme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const { font_color } = useTheme();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
  },
  iconButton: {
    padding: 8,
    borderRadius: 100,
  },
  title: {
    fontSize: font_size.size.xl,
    textAlign: 'center',
    paddingVertical: 25,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 5,
  },
  button: {
    backgroundColor: font_color.primary.main,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 40
  },
  textButton: {
      color: "#FFFFFF",
      fontSize: 16,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
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
    </View>
    <ScrollView style={{ paddingHorizontal: 24 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <MangaItem key={i} navigation={navigation} />
      ))}
    <TouchableOpacity style={styles.buttonWrapper}>
            <View style={styles.button}>
            <Text style={styles.textButton}>More</Text>
            </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

export default HomeScreen;