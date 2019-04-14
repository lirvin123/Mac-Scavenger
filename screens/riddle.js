import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import {Button} from 'native-base'
import { huntIndex } from './hunt'

export var photoIndex = 0

export var setPhotoIndex = (index) => {photoIndex = index}

export default class Riddle extends React.Component {

  constructor() {
    super()
    this.state = {
      photos: require('../photos.json'),
      riddleGuess: '',
      header: "Solve the Puzzle!",
    }
  }

  checkGuess = () => {
    if ((this.state.riddleGuess.toLowerCase()).trim() == this.state.photos[huntIndex].hints[photoIndex].riddleAnswer) {
      if (photoIndex + 1 > this.state.photos[huntIndex].hints.length) { //Causes an error without this line
        this.setState({ riddle: '' })
      }
      setPhotoIndex(photoIndex + 1)
      this.props.navigation.push('Correct')
    }
    else {
      this.props.navigation.push('Incorrect')

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}> Solve the Puzzle: </Text>
        <Text style={Styles.riddle}> {this.state.photos[huntIndex].hints[photoIndex].riddle} </Text>
        <TextInput
          placeholder={'Type answer here'}
          onChangeText={(text) => { this.setState({riddleGuess: text}) }}
          autoCorrect={false}
          style={{ textAlign: 'center' }}>
        </TextInput>
        <Button block success onPress={this.checkGuess}>
          <Text style={Styles.buttonText}> Guess </Text>
        </Button>
        <Button block danger onPress={ () => this.props.navigation.goBack() }>
          <Text style={Styles.buttonText}> Back </Text>
        </Button>

      </View>
    )
  }
}
