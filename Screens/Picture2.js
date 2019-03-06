import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AppNavigator from '../Navigator/AppNavigator';

export default class Picture extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../pictures/case2.jpg')} style={{width: 300, height: 500}}/>
        <TouchableOpacity
            onPress={() =>this.props.navigation.navigate('Picture3')}
            style={styles.button}>
          <Text style={styles.zoom}> Zoom Out </Text>
        </TouchableOpacity>
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
   button: {
     backgroundColor: 'red',
     padding: 20
   },
   zoom: {
     color: '#fff',
     textAlign: 'center',
     fontSize: 50
   }
});
