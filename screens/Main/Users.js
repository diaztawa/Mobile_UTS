import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import MangaItem from '../../components/MangaItem';
import covers from '../../assets/images/cover/Users/001.jpg';
import avatar from '../../assets/images/avatar/user1.jpg';

const { font_color, radius, font_size } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  covers: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  totalBookmark: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: font_color.primary.main,
    borderRadius: radius.normal,
  },
  bookmarkLabel: {
    paddingHorizontal: 2,
    color: font_color.common.white,
  },
  imageInnerWrapper: {
    zIndex: 1,
    borderRadius: radius.pil,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: font_color.common.white,
  },
  imageOuterWrapper: {
    position: 'absolute',
    alignItems: 'center',
    bottom: -40,
    right: 0,
    left: 0,
  },
  username: {
    fontSize: font_size.size.md,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    color: font_color.text.secondary,
  },
  Title: {
    marginBottom: 14,
    fontSize: font_size.size.md,
    fontWeight: 'bold',
  },
});

const UsersScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>

    <View style={{ position: 'relative' }}>
      <Image
        style={styles.covers}
        source={covers}
      />
      
      <View style={styles.imageOuterWrapper}>
        
        <View style={styles.imageInnerWrapper}>
          <Image
            style={styles.avatar}
            source={avatar}
          />
        </View>
      
      </View>

    </View>

    <View>
      
      <View style={{ alignItems: 'center', marginTop: 42, paddingHorizontal: 24 }}>
        <Text style={styles.username}>Hanzu Seinaru</Text>
        <Text style={styles.description}>マンガを読むのは楽しいね</Text>
        
        <View style={styles.totalBookmark}>
          <Text style={styles.bookmarkLabel}>
              <FontAwesome
                name="bookmark"
                size={14}
                style={styles.bookmarkLabel}
              />
          </Text>
          <Text style={styles.bookmarkLabel}>8</Text>
        </View>

      </View>

      <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
        <Text style={styles.Title}>My Bookmark</Text>
        
        <View>
          {[1, 2, 3, 4].map((i) => (
            <MangaItem key={i} navigation={navigation} />
          ))}
        </View>

      </View>

    </View>

  </ScrollView>
);

export default UsersScreen;