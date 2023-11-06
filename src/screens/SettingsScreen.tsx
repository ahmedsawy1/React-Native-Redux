import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameAction } from '../store/userActions';
import { RootState } from '../store/store';

const SettingsScreen = () => {
  // const [isSignedIn, setIsSignedIn] = useState(true);
  // const [userName, setUserName] = useState('Batman');

  // const isSignedIn = useSelector((state: RootState) => state.userData.isSignedIn)
  // const userName = useSelector((state: RootState) => state.userData.userName)

  const {isSignedIn, userName} = useSelector((state: RootState) => state.userData)

  const dispatch = useDispatch()

  return (
    <View style={styles.cont}>
      {isSignedIn ? (
        <View>
          <Text style={styles.text}>Your Name: {userName}</Text>
          <Button title="change" onPress={() => dispatch(changeNameAction("test"))} />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Please Sign In First</Text>
        </View>
      )}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
