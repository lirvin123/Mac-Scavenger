import React from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { elapsedTime } from './main'
import { hunt } from './hunt'

export default class Done extends React.Component {

  componentDidMount() {
    this.storeItem(hunt.huntName, elapsedTime)
  }

  async storeItem(key, item) {
    try {
      const score = await AsyncStorage.getItem(key)
      if (score == null) {
        var storedItem = await AsyncStorage.setItem(key, item.toString())
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
    <View style={Styles.hunt}>
      <Text style={Styles.done}> Done! </Text>
      <Text style={Styles.endTime}> {'End Time: ' + elapsedTime} </Text>
      <Button danger block large onPress={() => this.props.navigation.push('Hunt')} style={Styles.button}>
        <Text style={Styles.buttonText}> Back to Home </Text>
      </Button>
    </View>
     )
   }
 }
