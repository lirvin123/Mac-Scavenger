import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { ListItem, Icon } from 'react-native-elements'
import { Button } from 'native-base'
import { hunt } from './home'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export var start
export var setStart = (amount) => {start = amount}

export default class Instructions extends React.Component {

  startHunt(){
   this.props.navigation.navigate('Round')
   setStart(new Date().getTime())
  }

  render() {
    return (
      <SafeAreaView style={Styles.baseView}>
        <View style={Styles.instructions}>
          <Text style={Styles.title}>{"Welcome to" + "\n"}
            <Text style={{ fontWeight: 'bold', color: hunt.color, marginVertical: hp('1%') }}>{hunt.huntName}</Text> {/* Not in Styles because color is needed through JSON file */}
          </Text>
          <Text style={Styles.huntDescription}>{hunt.description}</Text>
          <ListItem
            leftIcon={{ name: "image" }}
            containerStyle={Styles.ruleView}
            marginHorizontal={wp('10%')}
            title={
              <Text style={Styles.rulesBold}>Rounds:
                <Text style={Styles.rules}>{" " + hunt.hints.length}</Text>
              </Text>
            }/>
          <ListItem
            leftIcon={{ name: "room" }}
            containerStyle={Styles.ruleView}
            marginHorizontal={wp('10%')}
            title={
              <Text style={Styles.rulesBold}>Range:
                <Text style={Styles.rules}>{" " + hunt.geographicrange}</Text>
              </Text>
            }/>
            <ListItem
              leftIcon={{ name: "schedule" }}
              containerStyle={Styles.ruleView}
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
       headerTitle: 'Instructions',
       headerStyle: { backgroundColor: '#B5E1E2' },
       headerTitleStyle: Styles.headerWithBackButton
     }
   }
 }
