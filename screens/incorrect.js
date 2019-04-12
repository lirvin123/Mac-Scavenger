import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import { photoIndex } from './riddle'

export default class Incorrect extends React.Component {

  render() {
    return(
      <View
        style={Styles.container}>
        <Text style={Styles.title}> Incorrect </Text>
        <TouchableOpacity
            style={Styles.button}
            onPress={ () => this.props.navigation.goBack() }>
          <Text style={Styles.buttonText}> Guess Again </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
