import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Button } from 'react-native';
import AppNavigator from '../navigator/appNavigator';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      hintNum: 1
    }
  }

  onSwipeLeft(gestureState) {
    if (this.state.hintNum == 3) { //Should change to be max eventually
      return
    }
    else {
      this.setState({
        hintNum: this.state.hintNum + 1
      })
    }
  }

  onSwipeRight(gestureState) {
    if (this.state.hintNum == 1) {
      return
    }
    else {
      this.setState({
        hintNum: this.state.hintNum - 1
      })
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <GestureRecognizer
          detectSwipeUp={false}
          detectSwipeDown={false}
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          onSwipeRight={(state) => this.onSwipeRight(state)}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1553715269/box' + this.state.hintNum + '.heic' }}
            style={{ width: 300, height: 500}} />
        </GestureRecognizer>
        <TouchableOpacity
            style={styles.button}>
          <Text style={styles.found}> Found it! </Text>
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
    justifyContent: 'center',
  },
   button: {
     backgroundColor: 'red',
     padding: 20
   },
   found: {
     color: '#fff',
     textAlign: 'center',
     fontSize: 50
   }
});
