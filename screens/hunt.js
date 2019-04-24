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

  setHunt(huntChoice) {
    hunt = huntChoice
    this.props.navigation.navigate('Instructions')
  }

  render() {

    var hunts = this.state.photos.map(hunt => (
      <Button danger block style={Styles.huntButton} onPress={() => this.setHunt(hunt)} key={hunt.huntName}>
        <Text style={Styles.buttonText}> {hunt.huntName} </Text>
      </Button>
      )
    )

    return (
      <View style={Styles.instructions}>
        {hunts}
      </View>
    )
  }
}
