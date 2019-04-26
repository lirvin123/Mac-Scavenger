import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { ListItem, Icon } from 'react-native-elements'
import { Button } from 'native-base'
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
      <Text style={{fontSize: 35, marginVertical: 10, marginHorizontal: 20, textAlign: 'center', fontWeight: 'bold'}}>{"Welcome to" + "\n"}
        <Text style={{fontWeight: 'bold', color: hunt.color}}>{hunt.huntName}</Text>
      </Text>
      <Text style={{fontSize: 20, marginVertical: 10, marginHorizontal: 20, textAlign: 'center'}}>{hunt.description}</Text>
      <ListItem
        leftIcon={{name: "image"}}
        containerStyle={{backgroundColor: "#B5E1E2"}}
        pad={16}
        marginHorizontal={30}
        marginBottom={-5}
        title={
          <Text style={{fontSize: 25, textAlign: "left", fontWeight: 'bold'}}>Rounds:
            <Text style={{fontSize: 25, fontWeight: 'normal'}}>{" " + hunt.hints.length}</Text>
          </Text>
        }/>
      <ListItem
        leftIcon={{name: "room"}}
        containerStyle={{backgroundColor: "#B5E1E2"}}
        pad={16}
        marginHorizontal={30}
        marginBottom={-5}
        title={
          <Text style={{fontSize: 25, textAlign: "left", fontWeight: 'bold'}}>Range:
            <Text style={{fontSize: 25, fontWeight: 'normal'}}>{" " + hunt.geographicrange}</Text>
          </Text>
        }/>
        <ListItem
          leftIcon={{name: "schedule"}}
          containerStyle={{backgroundColor: "#B5E1E2"}}
          pad={16}
          marginHorizontal={30}
          marginBottom={-5}
          title={
            <Text style={{fontSize: 25, textAlign: "left"}}>Complete the hunt as
              <Text style={{fontSize: 25, fontWeight: 'bold'}}> fast</Text>
              <Text style={{fontSize: 25, fontWeight: 'normal'}}> as possible. Unlocking hints will</Text>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}> increase</Text>
              <Text style={{fontSize: 25, fontWeight: 'normal'}}> your overall time!</Text>
            </Text>
          }/>
      <Text style={{fontSize: 20, marginVertical: 10, marginHorizontal: 20, textAlign: "center"}}>Your time begins once you click start!</Text>
      <Button success block large onPress={this.startHunt.bind(this)} style={{margin: 20}}>
        <Text style={Styles.startTimer}>Start</Text>
      </Button>
    </View>
     )
   }
   static navigationOptions = ({ navigation }) => {
     return {
       title: 'Instructions',
     }
   }
 }
