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
    borderRadius: radius.pills,
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

export default function RegisterScreen() {
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // const AlertLogic = () => {
  //   if (user === '' && password === '') {
  //     setAlert(true);
  //     return;
  //   }
  //   navigation.navigate('Login');
  // };

  async function RegisterLogic() {
    setLoading(true);
    try {
      if (confirm !== password) {
        setError(true);
      } else {
        await register({email, password});
      }
    } catch (err) {
      console.log(err);
    } finally {
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
                Username dan password tidak boleh kosong, konfirmasi password tidak boleh berbeda
              </Text>
            </View>
          ) : null} */}

          <View>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="email"
              placeholder="Masukkan Username"
              style={[styles.input, { marginBottom: 8 }]}
            />
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="Password"
              style={[styles.input, { marginBottom: 8 }]}
            />
            <TextInput
              secureTextEntry
              value={confirm}
              onChangeText={(text) => setConfirm(text)}
              textContentType="password"
              placeholder="Confirm Password"
              style={[styles.input, { marginBottom: 8 }]}
            />
            <TouchableOpacity
              loading={loading}
              style={styles.button}
              onPress={RegisterLogic}
            >
              <Text style={{ color: font_color.common.white }}>Register Now</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};