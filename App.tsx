import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainTabs from './src/navigation/MainTabs';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
