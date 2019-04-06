import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import { photoIndex } from './riddle'

export default class Correct extends React.Component {

  render() {
    if (photoIndex == Photos.length) {
      return (
        <View
          style={Styles.container}>
          <Text style={Styles.title}> Correct! You found: </Text>
          <Text style={Styles.riddle}> {Photos[photoIndex - 1].name} </Text>
          <TouchableOpacity
              style={Styles.button}
              onPress={ () => this.props.navigation.navigate('Home') }>
            <Text style={Styles.buttonText}> Finish </Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return(
        <View
          style={Styles.container}>
          <Text style={Styles.title}> Correct! You found: </Text>
          <Text style={Styles.riddle}> {Photos[photoIndex - 1].name} </Text>
          <TouchableOpacity
              style={Styles.button}
              onPress={ () => this.props.navigation.navigate('Main') }>
            <Text style={Styles.buttonText}> Next Round </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
