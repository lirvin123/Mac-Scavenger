import React from 'react'
import { Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { Photos } from '../photos.json'

export default class Instructions extends React.Component {

  render() {
    return (
    <View style={Styles.hunt}>
      <Button danger block large onPress={() => this.props.navigation.navigate('Main')} style={Styles.button}>
        <Text style={Styles.buttonText}> Yeah read this! </Text>
      </Button>
    </View>
     )
   }
 }
