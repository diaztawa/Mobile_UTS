import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import cover from '../assets/images/cover/001.jpg';
import useTheme from '../hooks/useTheme';

const { font_size, font_color } = useTheme();

const styles = StyleSheet.create({
  publisherName: {
    fontSize: font_size.size.sm,
  },
  publishDate: {
    fontSize: font_size.size.xs,
    color: font_color.text.secondary,
  },
  ImageWrapper: {
    alignItems: 'center',
    height: 600
  },
  coverText: {
    fontWeight: 'bold',
    paddingHorizontal: '10%',
    fontSize: font_size.size.sm,
  },
  mangaCover: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

const ChapterRead = ({ navigation }) => (
  <View>

    <View
      style={styles.ImageWrapper}
    >
      <Image
        style={styles.mangaCover}
        source={cover}
      />
    </View>

  </View>
);

export default ChapterRead;