import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import {Button} from 'native-base'

export default class Instructions extends React.Component {

  render() {
    return (
    <View style={Styles.home_Hunt}>
      <Button danger block large onPress={() => this.props.navigation.navigate('Main')} style={Styles.button}>
        <Text style={Styles.buttonText}> Yeah read this! </Text>
      </Button>
    </View>
     )
   }
 }
