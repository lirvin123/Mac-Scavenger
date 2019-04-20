import React from 'react'
import { Alert, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { Button } from 'native-base'

export var hunt

export default class Hunt extends React.Component {

  constructor() {
    super()
    this.state = { photos: require('../photos.json') }
  }

  huntDescription(huntChoice) {
    Alert.alert(
      huntChoice.huntName,
      huntChoice.description,
      [
        { text: 'Back' },
        { text: 'Play', onPress: () => {this.setHunt(huntChoice)} }
      ]
    )
  }

  setHunt(huntChoice) {
    hunt = huntChoice
    this.props.navigation.navigate('Main')
  }

  render() {

    var hunts = this.state.photos.map(hunt => (
      <Button danger block style={Styles.button} onPress={() => this.huntDescription(hunt)} key={hunt.huntName}>
        <Text style={Styles.buttonText}> {hunt.huntName} </Text>
      </Button>
      )
    )

    return (
      <View style={Styles.hunt}>
        {hunts}
      </View>
    )
  }
}
