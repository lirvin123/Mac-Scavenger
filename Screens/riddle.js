import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'

export var photoIndex = 0

export default class Riddle extends React.Component {

  constructor() {
    super()
    this.state = {
      riddle: Photos[photoIndex].riddle,
      riddleGuess: '',
      header: "Solve the Puzzle!",
    }
  }

  checkGuess = () => {
    if (this.state.riddleGuess.toLowerCase() == Photos[photoIndex].riddleAnswer) {
      if (photoIndex + 1 > Photos.length) {
        this.setState({
          riddle: ''
        })
      }
      photoIndex = photoIndex + 1
      this.props.navigation.navigate('Correct')
      this.setState({
        riddleGuess: ''
      })
    }
    else {
      this.props.navigation.navigate('Incorrect')
    }
  }

  render() {
    return (
      <View
          style={Styles.container}>
        <Text style={Styles.title}> Solve the Puzzle: </Text>
        <Text style={Styles.riddle}> {this.state.riddle} </Text>
        <TextInput
          placeholder={'Enter answer here'}
          onChangeText={(text) => { this.setState({riddleGuess: text}) }}
          autoCorrect={false}>
        </TextInput>
        <TouchableOpacity
            style={Styles.button}
            onPress={this.checkGuess}>
          <Text style={Styles.buttonText}> Guess </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={Styles.button}
            onPress={ () => this.props.navigation.navigate('Main') }>
          <Text style={Styles.buttonText}> Back </Text>
        </TouchableOpacity>

      </View>
    )
  }
}
