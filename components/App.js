/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './Card'

const instructions = Platform.select({
     ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
     android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>        
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Card>
         <Text style={styles.instructions}>Card Image</Text>
        </Card>
        <Card>
         <Text style={styles.instructions}>Card Image 2</Text>
         <Text style={styles.instructions}>Card Image 3</Text>
       </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }, 
});
