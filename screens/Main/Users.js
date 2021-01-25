import React, {useContext, useEffect} from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import MangaItem from '../../components/MangaItem';
import covers from '../../assets/images/cover/Users/001.jpg';
import avatar from '../../assets/images/avatar/user1.jpg';
import AuthContext from '../../context/AuthContext';
import firebase from '../../firebase.config';

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
  alert: {
    backgroundColor: font_color.error.main,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: radius.pil,
    marginTop: 10,
  }
});

const UsersScreen = ({ navigation }) => {
  const [user, setUser] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {logout} = useContext(AuthContext);
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        setUser(user);
        });
        return () => unsubscribe();
    }, []);

    async function LogoutLogic() {
        setLoading(true);
        try {
          await logout();
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
      return(
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

        <View>
          <TouchableOpacity
          onPress={LogoutLogic}
          style={styles.alert}
          >
            <Text style={{ color: font_color.common.white }}>
              Logout
            </Text>
          </TouchableOpacity>
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
};
export default UsersScreen;