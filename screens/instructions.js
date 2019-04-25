import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import {Button} from 'native-base'
import { hunt } from './hunt'
import Photos from '../photos.json'
import TimerMixin from 'react-timer-mixin'

export var count

export default class Instructions extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      timerOn: false
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ title: hunt.huntName })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startTimer() {
    if(!this.state.timerOn) {
      this.interval = TimerMixin.setInterval(
        () => this.setState((prevState)=> ({ timer: prevState.timer + 1 })),
        1000
      )
      this.state.timerOn = true
    }
  }

  startHunt(){
   this.startTimer()
   this.props.navigation.navigate('Main')
  }

  render() {
    count = this.state.timer
    return (
    <View style={Styles.instructions}>
      <Text style={{fontSize: 30, margin: 20, textAlign: "center", color: 'green'}}> {hunt.description}  </Text>
      <Text style={{fontSize: 25, textAlign: "center", color: 'green'}}> {"Rounds: " + hunt.hints.length} </Text>
      <Text style={{fontSize: 25, textAlign: "center", color: 'green'}}> {"Geographic Range: " + hunt.geographicrange}  </Text>
      <Text style={{fontSize: 20, margin: 20, textAlign: "left", color: 'green'}}> Unlocking the second photo will add 5 minutes to your timer. </Text>
      <Text style={{fontSize: 20, margin: 20, textAlign: "left", color: 'green'}}> Unlocking the third photo will add 10 minutes to your timer. </Text>
      <Text style={{fontSize: 20, margin: 20, textAlign: "left", color: 'green'}}> Giving up will add twenty minutes to your timer. </Text>
      <Text style={{fontSize: 20, margin: 20, textAlign: "center", color: 'green'}}>Timer will begin once you hit start!</Text>
      <Button success block large onPress={this.startHunt.bind(this)} style={{margin: 20}}>
        <Text style={Styles.startTimer}>Start</Text>
      </Button>
    </View>
     )
   }
   static navigationOptions = ({ navigation }) => {
     return {
       headerTitle: navigation.getParam('title'),
     }
   }
 }
