import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import screens from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthContext from './context/AuthContext';
import {ToastAndroid} from 'react-native';
import firebase from './firebase.config';
import success from './screens/success';

const Stack = createStackNavigator();

function FirebaseStackNavigation() {
  const [state, dispatch] = React.useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
          case 'LOGIN':
            return {
              ...prevState,
              uid: action.uid,
              isLogout: false,
            };
          case 'LOGOUT':
            return {
              ...prevState,
              uid: null,
              isLogout: true,
            };
        }
      },
      {isLogout: false, uid: null},
  );
  React.useEffect(() => {
    async function bootstrapAsync() {
      let uid;
      try {
        uid = await AsyncStorage.getItem('uid');
      } catch (err) {
        console.error(err);
        uid = null;
      }
      dispatch({type: 'RESTORE_TOKEN', uid});
    }
    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(() => ({
    async login({email, password}) {
      try {
        const data = await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = data.user.uid;
        await AsyncStorage.setItem('uid', uid);
        dispatch({type: 'LOGIN', uid});
      } catch (err) {
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      }
    },
    async register({email, password}) {
      try {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = data.user.uid;
        await AsyncStorage.setItem('uid', uid);
        dispatch({type: 'LOGIN', uid});
      } catch (err) {
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      }
    },
    async logout() {
      try {
        await AsyncStorage.removeItem('uid');
        dispatch({type: 'LOGOUT'});
      } catch (err) {
        console.error(err);
      }
    },
  }));
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      >
        {state.uid === null ? (
          <>
            {screens.map((screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
          </>
        ) : (
          <>
            {success.map((screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FirebaseStackNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}