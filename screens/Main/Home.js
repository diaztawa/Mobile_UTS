import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import MangaItem from '../../components/MangaItem';
import useTheme from '../../hooks/useTheme';
import logo from '../../assets/images/logo/name_logo.png'

const { font_color, font_size } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    width: 150,
    height: 35,
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
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: font_color.primary.main,
    }}
    >

      <View style={{
        paddingVertical: 2,
      }}>
        <Image
          style={styles.logo}
          source={logo}
        />
      </View>

      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome
          name="bell"
          size={24}
          style={{ color: font_color.common.white }}
        />
      </TouchableOpacity>

    </View>
    <ScrollView style={{ paddingHorizontal: 20 }}>
    <Text style={styles.title}>Update Project</Text>
      {[1, 2, 3].map((i) => (
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