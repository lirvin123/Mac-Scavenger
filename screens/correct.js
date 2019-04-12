import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import { photoIndex } from './riddle'

export default class Correct extends React.Component {

  checkEnd = () => {
    if (photoIndex == Photos.length) {
      return this.props.navigation.navigate('Home')
    }
    else {
      return this.props.navigation.push('Main')
    }
  }

  render() {

      return (
        <View
          style={Styles.container}>
          <Text style={Styles.title}> Correct! </Text>
          <TouchableOpacity
              style={Styles.button}
              onPress={this.checkEnd}>
            <Text style={Styles.buttonText}> {(photoIndex == Photos.length) ? "Finish" : "Next Round"} </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
