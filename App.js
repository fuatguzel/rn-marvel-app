import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, StyleSheet, LogBox } from 'react-native'
import { ThemeProvider } from "react-native-elements";

import firebase from 'firebase/app'
import firebaseConfig from "./firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import TabNavigation from "./src/navigation/TabNavigation";
import AuthStack from "./src/navigation/AuthStack";

import { NavigationContainer } from '@react-navigation/native';

const theme = {
  colors: {
    primary: "#e63737",
  },
};

if (LogBox) {
  LogBox.ignoreLogs(["Setting a timer"]);
  LogBox.ignoreLogs(["Require cycle"]);
}
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticated: !!user });
  };


  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <NavigationContainer>
            {this.state.isAuthenticated ? <TabNavigation /> : <AuthStack />}
          </NavigationContainer>
        </ThemeProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App


   // if (!loggedIn) {
    //   return (
    //     <NavigationContainer>
    //       <Stack.Navigator initialRouteName='Landing' headerMode={'none'}>
    //         <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} />
    //         <Stack.Screen name='Register' component={RegisterScreen} screenOptions={{
    //           headerShown: false
    //         }} />
    //         <Stack.Screen name='Login' component={LoginScreen} screenOptions={{
    //           headerShown: false
    //         }} />
    //         <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} screenOptions={{
    //           headerShown: false
    //         }} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );