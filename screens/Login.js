import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import useTheme from '../hooks/useTheme';
import logo from '../assets/images/logo/mascot_logo.png';
import bg1 from '../assets/images/background/bg1.png';

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
    backgroundColor: '#dbebfa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.pil,
    fontSize: font_size.size.md
  },
  button: {
    backgroundColor: font_color.primary.main,
    borderRadius: radius.pil,
    padding: 12,
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

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [shown, setShown] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const AlertLogic = () => {
    if (user === '' && password === '') {
      setAlert(true);
      return;
    }
    navigation.navigate('Main');
  };

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

          <View style={[styles.centered, {marginVertical: 10}]}>
            <Text style={styles.title}>
              Sign In
            </Text>
          </View>

          {alert ? (
            <View style={styles.alert}>
              <Text style={{ color: font_color.common.white }}>
                Username dan password tidak boleh kosong!
              </Text>
            </View>
          ) : null}

          <View style={{marginTop: -20}}>
            <TextInput
              value={user}
              onChangeText={(text) => setUser(text)}
              type="text"
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
              style={{ marginTop: 8, marginBottom: 20 }}>
              <Text style={{ color: font_color.text.secondary, textAlign: 'center', fontStyle: 'italic' }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={AlertLogic}
            >
              <Text style={{ color: font_color.common.white, fontSize: font_size.size.md }}>Sign In</Text>
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
        <StatusBar hidden/>
    </View>
  );
};

export default LoginScreen;