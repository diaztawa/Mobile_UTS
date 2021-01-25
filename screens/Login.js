import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import useTheme from '../hooks/useTheme';
import logo from '../assets/images/logo/mascot_logo.png';
import bg1 from '../assets/images/background/bg1.png';
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
    width: 212,
    height: 196,
  },
  title: {
    fontSize: font_size.size.xl,
    fontWeight: 'bold',
    marginBottom: 4,
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
    borderRadius: radius.normal,
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

      <ImageBackground source={bg1} style={styles.backgroundImage}>
        <View style={{
          paddingHorizontal: 24,
          paddingTop: Constants.statusBarHeight,
        }}
        >

          <View style={[styles.centered, { marginTop: 15 }]}>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>

          <View style={[styles.centered, { marginTop: 12 }]}>
            <Text style={styles.title}>
              KoMBatch Login
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
              placeholder="Masukkan Username"
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
      </ImageBackground>
    </View>
  );
};