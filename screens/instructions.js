import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, SafeAreaView } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { ListItem, Icon } from 'react-native-elements'
import { Button } from 'native-base'
import { hunt } from './hunt'
import Photos from '../photos.json'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export var start
export var setStart = (amount) => {start = amount}

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

  startHunt(){
   this.props.navigation.navigate('Main')
   setStart(new Date().getTime())
  }

  render() {
    return (
      <SafeAreaView style={Styles.areaView}>
        <View style={Styles.instructions}>
          <Text style={Styles.title}>{"Welcome to" + "\n"}
            <Text style={{ fontWeight: 'bold', color: hunt.color, marginVertical: hp('1%') }}>{hunt.huntName}</Text>
          </Text>
          <Text style={Styles.huntDescription}>{hunt.description}</Text>
          <ListItem
            leftIcon={{ name: "image" }}
            containerStyle={{ backgroundColor: "#B5E1E2" }}
            pad={16}
            marginHorizontal={wp('10%')}
            title={
              <Text style={Styles.rulesBold}>Rounds:
                <Text style={Styles.rules}>{" " + hunt.hints.length}</Text>
              </Text>
            }/>
          <ListItem
            leftIcon={{ name: "room" }}
            containerStyle={{ backgroundColor: "#B5E1E2" }}
            pad={16}
            marginHorizontal={wp('10%')}
            title={
              <Text style={Styles.rulesBold}>Range:
                <Text style={Styles.rules}>{" " + hunt.geographicrange}</Text>
              </Text>
            }/>
            <ListItem
              leftIcon={{ name: "schedule" }}
              containerStyle={{ backgroundColor: "#B5E1E2" }}
              pad={16}
              marginHorizontal={wp('10%')}
              title={
                <Text style={Styles.rules}>Complete the hunt as
                  <Text style={Styles.rulesBold}> fast</Text>
                  <Text style={Styles.rules}> as possible. Unlocking hints will</Text>
                  <Text style={Styles.rulesBold}> increase</Text>
                  <Text style={Styles.rules}> your overall time!</Text>
                </Text>
              }/>
          <Text style={Styles.startTime}>Your time will start immediately!</Text>
          <Button success block large onPress={this.startHunt.bind(this)} style={Styles.startButton}>
            <Text style={Styles.buttonText}>Start</Text>
          </Button>
        </View>
      </SafeAreaView>
     )
   }
   static navigationOptions = ({ navigation }) => {
     return {
       title: 'Instructions',
       headerStyle: { backgroundColor: '#B5E1E2' }
     }
   }
 }
