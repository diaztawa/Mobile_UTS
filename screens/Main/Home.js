import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import MangaItem from '../../components/MangaItem';
import useTheme from '../../hooks/useTheme';
import MainScreen from '../Main/Main';


const { font_color } = useTheme();

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
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <MainScreen/>
    <ScrollView style={{ paddingHorizontal: 24 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <MangaItem key={i} navigation={navigation} />
      ))}
    </ScrollView>
  </View>
);

export default HomeScreen;