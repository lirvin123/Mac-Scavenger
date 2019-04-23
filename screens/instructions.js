import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import {Button} from 'native-base'
import { hunt } from './hunt'
import Photos from '../photos.json'

export default class Instructions extends React.Component {

  render() {

    return (
    <View style={Styles.hunt}>
      <Text style={Styles.riddle}> {"Welcome to " + '\"' + hunt.huntName + '\"' } </Text>
      <Text style={{fontSize: 15, textAlign: "center"}}> {"Rounds:" + hunt.hints.length} </Text>
      <Text style={{fontSize: 15, textAlign: "center"}}> {hunt.description}  </Text>
      <Text style={{fontSize: 15, textAlign: "center"}}> {"Geographic Range:" + hunt.geographicrange}  </Text>
      <Text style={{fontSize: 15, textAlign: "center"}}>  Unlocking the second photo will add 5 minutes to your timer,
                                                          and unlocking the third photo will add 10 minutes to your timer
                                                          Giving up will add twenty minutes to your timer.</Text>
      <Button danger block large onPress={() => this.props.navigation.navigate('Main')} style={Styles.button}>
        <Text style={Styles.buttonText}> Start: timer will start immediately </Text>
      </Button>
    </View>
     )
   }
 }
