import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
    width: '48%',
    alignItems: 'center',
    position: 'relative',
    margin: '1%',
    borderRadius: 10,
    backgroundColor: font_color.common.gray.light,
  },
  coverText: {
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: '7%',
    fontSize: font_size.size.sm,
  },
  mangaCover: {
    width: 140,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  star: {
    width: 70, 
    height: 30, 
    borderRadius: 20,
    backgroundColor: 'yellow', 
    paddingTop: 8,
    paddingHorizontal: 15,
    marginVertical: 7,
  },
  history: {
    position: 'absolute',
    top: 240,
    left: 15,
  },
  chap: {
    flexDirection: 'row',
    marginTop: 35,
  }
});

const MangaItem = ({ navigation }) => (
  <View style={{ marginBottom: 4 , flexDirection: 'row' }}>

    <TouchableOpacity
      style={styles.ImageWrapper}
      onPress={() => navigation.navigate('Details')}
    >
      <Image
        style={styles.mangaCover}
        source={cover}
      />
      <Text style={styles.coverText}>World Without Blessings</Text>
      <View style={styles.history}>
      <View style={styles.star}>
      <FontAwesome
          name="star"
          size={14}
          style={{ color: font_color.common.black }}
        >  7.9</FontAwesome>
        </View>
        </View>
        <View style={styles.chap}>
        <Text style={{fontSize: font_size.size.xs, color: font_color.common.gray.dark}}>
          Ch 5 - Newest Ch
          </Text>
          <FontAwesome
          name="history"
          size={16}
          style={{ color: font_color.common.black, paddingVertical: 1, paddingLeft: 5,}}
        />
        </View>
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
      <View style={styles.history}>
      <View style={styles.star}>
      <FontAwesome
          name="star"
          size={14}
          style={{ color: font_color.common.black }}
        >  7.9</FontAwesome>
        </View>
        </View>
        <View style={styles.chap}>
        <Text style={{fontSize: font_size.size.xs, color: font_color.common.gray.dark}}>
          Ch 5 - Newest Ch
          </Text>
          <FontAwesome
          name="history"
          size={16}
          style={{ color: font_color.common.black, paddingVertical: 1, paddingLeft: 5,}}
        />
        </View>
    </TouchableOpacity>
  </View>
);

export default MangaItem;