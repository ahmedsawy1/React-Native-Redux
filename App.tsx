import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainTabs from './src/navigation/MainTabs';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
