import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Button } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import pictures from '../pictures.json'

var hints = 0;

export default class Picture extends React.Component {

  constructor(){
    super();
    this.state = {
      image : require('../photos/case1.jpg')
    }
  }

  Load_New_Image=()=>{
    hints++;
    if (hints == 1) {
      this.setState({
        image : require('../photos/case2.jpg')
      })
    }
    else if (hints == 2) {
      this.setState({
        image : require('../photos/case3.jpg')
      })
    }
  }

  Load_Last_Image=()=>{
    hints--;
    if (hints == 1) {
      this.setState({
        image : require('../photos/case2.jpg')
      })
    }
    else if (hints == 0) {
      this.setState({
        image : require('../photos/case1.jpg')
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source= {this.state.image}
          style = {{ width: 300, height: 500 }} />
        <TouchableOpacity
            onPress={this.Load_New_Image}
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
