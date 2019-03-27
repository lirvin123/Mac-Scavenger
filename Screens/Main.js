import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Button } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import Pictures from '../pictures.json';

export default class Picture extends React.Component {

  constructor() {
    super();
    this.state = {
      hintNum: 1
    }
  }

  loadNewImage = () => {
    this.setState({
      hintNum: this.state.hintNum + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://innig.net/stories/ari/ari' + this.state.hintNum + '.png' }}
          style={{ width: 300, height: 500 }} />
        <TouchableOpacity
            onPress={this.loadNewImage}
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
