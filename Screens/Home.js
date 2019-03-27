import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';
import AppNavigator from '../navigator/appNavigator';

export default class HomeScreen extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={() =>this.props.navigation.navigate('Main')}
          style={styles.button}>
        <Text style={styles.start}> Start </Text>
      </TouchableOpacity>
    </View>
     )
   };
 }

 const styles=StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100
  },
   button: {
     backgroundColor: 'red',
     padding: 20
   },
   start: {
     color: '#fff',
     textAlign: 'center',
     fontSize: 50
   }
 })
