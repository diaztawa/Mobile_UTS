import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import useTheme from '../hooks/useTheme';
import logo from '../assets/images/cover/002.jpg';
import AuthContext from '../context/AuthContext';


const { font_color, font_size, radius } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: font_color.common.gray.light,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: font_size.size.xl,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  row: { flexDirection: 'row' },
  input: {
    borderColor: font_color.common.gray.main,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.pil,
  },
  button: {
    backgroundColor: font_color.primary.main,
    borderRadius: radius.pil,
    padding: 16,
    alignItems: 'center',
  },
  alert: {
    padding: 16,
    marginBottom: 16,
    borderRadius: radius.normal,
    backgroundColor: font_color.error.main,
  },
  imageBackground: {
    width: '100%',
    height: 75,
    backgroundColor: font_color.primary.main,
  }
});

export default function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [shown, setShown] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  // const AlertLogic = () => {
  //   if (user === '' && password === '') {
  //     setAlert(true);
  //     return;
  //   }
  //   navigation.navigate('Main');
  // };

  async function LoginLogic(){
    setLoading(true);
    try{
      await login({email, password});
    } 
      catch (err){
        console.error(err);
      }
      finally{
        setLoading(false);
      }
  }

  return(
    <View style={styles.container}>

          <View style={[styles.centered, {height: 300}]}>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>

          <View style={[styles.imageBackground]}>
            <View style={{padding: 10, paddingLeft: 15}}>
            <Text style={[styles.title, {color: font_color.common.white}]}>
              KoMBatch
            </Text>

            <Text style={{color: font_color.common.white, fontSize: font_size.size.sm}}>
              Epic Manga Safehouse
            </Text>
            </View>
          </View>

        <View style={{
          padding: 24,
          paddingTop: Constants.statusBarHeight,
        }}
        >

          <View style={[styles.centered, {paddingVertical: 5}]}>
            <Text style={styles.title}>
              Sign In
            </Text>
          </View>

          {/* {alert ? (
            <View style={styles.alert}>
              <Text style={{ color: font_color.common.white }}>
                Username dan password tidak boleh kosong!
              </Text>
            </View>
          ) : null} */}

          <View>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={[styles.input, { marginBottom: 8 }]}
            />
            <TextInput
              secureTextEntry={!shown}
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="Password"
              style={styles.input}
            />
            <TouchableOpacity
              style={{ marginTop: 8, marginBottom: 24 }}
              onPress={() => setShown(!shown)}
            >
              <Text style={{ color: font_color.text.secondary }}>
                {shown ? 'Hide' : 'Show'}
                {' '}
                password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              loading = {loading}
              onPress={LoginLogic}
            >
              <Text style={{ color: font_color.common.white }}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.centered, styles.row]}>
            <Text style={{ color: font_color.text.primary }}>
              Belum punya akun?
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 4 }}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={{ color: font_color.primary.main }}>Daftar sekarang!</Text>
            </TouchableOpacity>
          </View>

        </View>

    </View>
  );
};