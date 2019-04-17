import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import { photoIndex, setPhotoIndex } from './riddle'
import {Button} from 'native-base'
import { huntIndex } from './hunt'

export default class Correct extends React.Component {

  constructor(props) {
    super(props)
    this.state = { photos: require('../photos.json')}
  }

  checkEnd = () => {
    if (photoIndex == this.state.photos[huntIndex].hints.length) {
      setPhotoIndex(0)
      return this.props.navigation.navigate('Done')
    }
    else {
      return this.props.navigation.push('Main')
    }
  }

  render() {

      return (
        <View
          style={Styles.container}>
          <Text style={Styles.title}> Correct! </Text>
          <Button block success onPress={this.checkEnd}>
            <Text style={Styles.buttonText}> {(photoIndex == this.state.photos[huntIndex].hints.length) ? "Finish" : "Next Round"} </Text>
          </Button>
        </View>
      )
    }
  }
