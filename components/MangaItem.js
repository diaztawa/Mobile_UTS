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
    overflow: 'hidden',
    marginVertical: 12,
    flexWrap: 'wrap',
    width: '50%',
    alignItems: 'center',
  },
  coverText: {
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: '10%',
    fontSize: font_size.size.sm,
  },
  mangaCover: {
    width: 140,
    height: 200,
    resizeMode: 'cover',
  }
});

const MangaItem = ({ navigation }) => (
  <View style={{ marginBottom: 4, flexDirection: 'row', justifyContent: 'space-evenly' }}>

    <TouchableOpacity
      style={styles.ImageWrapper}
      onPress={() => navigation.navigate('Details')}
    >
      <Image
        style={styles.mangaCover}
        source={cover}
      />
      <Text style={styles.coverText}>World Without Blessings</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.ImageWrapper}
      onPress={() => navigation.navigate('Details')}
    >
      <Image
        style={styles.mangaCover}
        source={cover}
      />
      <Text style={styles.coverText}>World Without Blessings</Text>
    </TouchableOpacity>

  </View>
);

export default MangaItem;