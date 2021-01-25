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
    fontSize: font_size.size.xxxl,
    fontWeight: 'bold',
  },
  imageBackground: {
    width: '100%',
    height: 90,
    backgroundColor: font_color.primary.main,
  },
  row: { flexDirection: 'row' },
  input: {
    borderColor: font_color.common.gray.main,
    borderWidth: 1,
    backgroundColor: '#dbebfa',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Roboto',
    borderRadius: radius.pil,
    marginBottom: 12,
    fontSize: font_size.size.md
  },
  button: {
    backgroundColor: font_color.primary.main,
    borderRadius: radius.pil,
    padding: 16,
    width: '38%',
    alignItems: 'center',
  },
  alert: {
    padding: 16,
    marginBottom: 16,
    borderRadius: radius.normal,
    backgroundColor: font_color.error.main,
  },
});

const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [alert, setAlert] = React.useState(false);

  const AlertLogic = () => {
    if (user === '' && password === '') {
      setAlert(true);
      return;
    }
    navigation.navigate('Login');
  };

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
        {alert ? (
          <View style={styles.alert}>
            <Text style={{ color: font_color.common.white }}>
              Username dan password tidak boleh kosong, konfirmasi password tidak boleh berbeda
            </Text>

            <Text style={{color: font_color.common.white, fontSize: font_size.size.sm}}>
              Only by Signing up
            </Text>
            </View>
          </View>
        ) : null}
        <View>
          <TextInput
            value={user}
            onChangeText={(text) => setUser(text)}
            type="text"
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
            style={styles.button}
            onPress={AlertLogic}
          >
            <Text style={{ color: font_color.common.white }}>Register Now</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;