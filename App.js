import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import LoginScreen from './src/pages/LoginScreen/LoginScreen';

const App = ()=>{

  return (
    <SafeAreaView>
    <LoginScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
