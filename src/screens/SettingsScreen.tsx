import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameAction } from '../store/userActions';

const SettingsScreen = () => {
  // const [isSignedIn, setIsSignedIn] = useState(true);
  // const [userName, setUserName] = useState('Batman');
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
  const userName = useSelector(state => state.userData.userName)
  const dispatch = useDispatch()

  return (
    <View style={styles.cont}>
      {isSignedIn ? (
        <View>
          <Text style={styles.text}>Your Name: {userName}</Text>
          <Button title="change" onPress={() => dispatch(changeNameAction("new name"))} />
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
