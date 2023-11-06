import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersBooks, loginAction } from '../store/userActions';
import { RootState } from '../store/store';

const HomeScreen = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
  const {userBooks} = useSelector((state: RootState) => state.userData)
  const dispatch = useDispatch()

  console.log('==================userBooks==================');
  console.log(JSON.stringify( userBooks, null, 2));
  console.log('====================================');

  useEffect(() => {
    dispatch(getUsersBooks())
  },[])

  return (
    <View style={styles.cont}>
      <Text style={{color: 'red'}}>
        Signed in status: {isSignedIn ? 'yes' : 'no'}
      </Text>

      {isSignedIn ? (
        <View>
          <Text style={styles.text}>Welcome to Home Screen</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Please Sign In</Text>
          <Button title="log in" onPress={() => dispatch(loginAction())} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});
