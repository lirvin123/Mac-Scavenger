import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'

export default class CorrectGuess extends React.Component {

  render() {
    return (
      <View
        style={Styles.container}>
        <Text> Correct! </Text>
      </View>
    )
  }
}
