import React from 'react'
import { Alert, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { Button } from 'native-base'

export var huntIndex

export default class Hunt extends React.Component {

  constructor() {
    super()
    this.state = { photos: require('../photos.json') }
  }

  huntDescription(huntChoice) {
    Alert.alert(
      this.state.photos[huntChoice].huntName,
      this.state.photos[huntChoice].description,
      [
        { text: 'Back' },
        { text: 'Play', onPress: () => {this.setHunt(huntChoice)} }
      ]
    )
  }

  setHunt(huntChoice) {
    huntIndex = huntChoice
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={Styles.hunt}>
        <Button danger block style={Styles.button} onPress={() => this.huntDescription(0)}>
          <Text style={Styles.buttonText}> {this.state.photos[0].huntName} </Text>
        </Button>
        <Button danger block style={Styles.button} onPress={() => this.huntDescription(1)}>
          <Text style={Styles.buttonText}> {this.state.photos[1].huntName} </Text>
        </Button>
      </View>
    )
  }
}
