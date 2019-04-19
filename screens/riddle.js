import React from 'react'
import { Text, TextInput, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import { Button } from 'native-base'
import { huntIndex } from './hunt'

export var photoIndex = 0

export var setPhotoIndex = (index) => {photoIndex = index}

export default class Riddle extends React.Component {

  constructor() {
    super()
    this.state = {
      photos: require('../photos.json'),
      riddleGuess: '',
      message: "Guess",
      nextround: false,
      result: ''
    }
  }

  press = () => {
    if (this.state.nextRound == true) {
      setPhotoIndex(photoIndex + 1)
      this.props.navigation.push("Main")
    }
    else {
      this.checkGuess()
    }
  }

  checkGuess() {
    if ((this.state.riddleGuess.toLowerCase()).trim() == this.state.photos[huntIndex].hints[photoIndex].riddleAnswer) {
      if (photoIndex + 1 > this.state.photos[huntIndex].hints.length) { //Causes an error without this line
        this.setState({ riddle: '', result: 'Correct!', message: "Finish", nextRound: true })
      }
      else {
        this.setState({ result: 'Correct!', message: "Next Round", nextRound: true })
      }
    }
    else {
      this.setState({ message: "Try Again", result: 'Incorrect' })

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.riddle}> {this.state.photos[huntIndex].hints[photoIndex].riddle} </Text>
        <TextInput
          placeholder={'Type answer here'}
          onChangeText={(text) => { this.setState({riddleGuess: text}) }}
          autoCorrect={false}
          style={{ textAlign: 'center' }}>
        </TextInput>
        <Text style={{ fontSize: 35, color: this.state.nextRound ? "green" : "red" }}>{this.state.result}</Text>
        <Button block success onPress={this.press}>
          <Text style={Styles.buttonText}> {this.state.message} </Text>
        </Button>
      </View>
    )
  }
}
