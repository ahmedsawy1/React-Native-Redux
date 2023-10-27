import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const HomeScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

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
          <Button title="log in" onPress={() => setIsSignedIn(true)} />
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
