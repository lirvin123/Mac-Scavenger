import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AppNavigator from '../Navigator/AppNavigator';

export default class Picture extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../pictures/case3.jpg')} style={{width: 300, height: 500}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
