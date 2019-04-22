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
// <<<<<<< HEAD
    hunt = huntChoice
    this.props.navigation.navigate('Instructions')
// =======
    // hunt = huntChoice
    // this.props.navigation.navigate('Main')
// >>>>>>> c65b202c3a31bfa8e114772bd2e595ec2891dd61
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
