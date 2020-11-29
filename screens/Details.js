import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../hooks/useTheme';
import cover from '../assets/images/cover/001.jpg';

const { font_size, font_color, radius } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.white,
  },
  banner: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  Title: {
    fontSize: font_size.size.md,
    fontWeight: '700',
    marginBottom: 16,
    paddingTop: 5,
  },
  Description: {
    color: font_color.text.secondary,
    marginBottom: 16,
  },
  flexRow: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  buttonGenre: {
    fontSize: font_size.size.md,
    backgroundColor: font_color.primary.main,
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    borderRadius: radius.normal,
  },
  metaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  recipeImageWrapper: {
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: radius.normal,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockViews: {
    marginTop: 28, 
    borderColor: font_color.common.gray.light, 
    borderTopWidth: 2, 
    paddingTop: 10,
  }
});

const DetailsScreen = () => (
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={cover}
        />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={styles.Title}>World Without Blessings</Text>
        <Text style={styles.Description}>
        Ketika membicarakan soal isekai, hal pertama yang terlintas di benak kalian pasti adalah dunia fantastis yang dipenuhi banyak makhluk mitologi seperti ras elf, iblis, kurcaci, demi-human, dan lain-lain.

Kalian juga pasti membayangkan kalau akan mendapat kekuatan luar biasa yang membuat seisi dunia ini bersorak kagum dan mengagungkan eksistensi kalian.

Kejayaan, kekayaan, wanita, semua berkah tersebut seakan berlimpah pada protagonis yang berpindah ke isekai.

Namun, kenyataan tidaklah semanis itu.

Benar, aku Nishida Kyouichi. Mau tidak mau harus mengakuinya, dunia tempatku terlempar ini… adalah dunia kejam yang tidak diberkahi!
        </Text>
        <View style={{
          ...styles.flexRow,
          justifyContent: 'space-between',
        }}
        >
          <View style={styles.flexRow}>
            <Text style={{ marginLeft: 4, color: font_color.text.secondary }}>5.0 (26)</Text>
            {[1, 2, 3, 4, 5].map((i) => (
              <FontAwesome
                key={`icon-${i}`}
                name="star"
                size={16}
                color={font_color.warning.main}
              />
            ))}
          </View>
        </View>

        <View style={styles.blockViews}>
          <Text style={styles.Title}>Genres</Text>
        </View>

        <View style={{
          ...styles.flexRow,
          marginTop: 4,
          justifyContent: 'space-evenly',
        }}
        >
          
          <View style={styles.flexRow}>
            {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity
                key={`genre${i}`}
                style={styles.buttonGenre}
            >
                <Text style={{color: font_color.common.white}}>Genre</Text>
            </TouchableOpacity>
            ))}
          </View>

        </View>

        <View style={styles.blockViews}>
            <Text style={styles.Title}>Chapter list</Text>

            <View style={styles.metaWrapper}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main }}>Chapter 1</Text>
                </View>
                <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                    <FontAwesome
                    name="book"
                    size={16}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                    <Text style={{ color: font_color.text.secondary }}>Read now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={16}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                    <Text style={{ color: font_color.text.secondary }}>Download</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.metaWrapper}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main }}>Chapter 2</Text>
                </View>
                <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                    <FontAwesome
                    name="book"
                    size={16}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                    <Text style={{ color: font_color.text.secondary }}>Read now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={16}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                    <Text style={{ color: font_color.text.secondary }}>Download</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.metaWrapper}>
                <View style={styles.metaItem}>
                <Text style={{ color: font_color.text.main }}>Chapter 3</Text>
                </View>
                <View style={styles.metaWrapper}>
                <TouchableOpacity style={[styles.metaItem, { marginRight: 8 }]}>
                    <FontAwesome
                    name="book"
                    size={16}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                    <Text style={{ color: font_color.text.secondary }}>Read now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.metaItem}>
                    <FontAwesome
                    name="download"
                    size={16}
                    style={{ color: font_color.text.secondary, marginRight: 4 }}
                    />
                    <Text style={{ color: font_color.text.secondary }}>Download</Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>

      </View>
    </View>
  </ScrollView>
);

export default DetailsScreen;