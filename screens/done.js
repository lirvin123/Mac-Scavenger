import React from 'react'
import { AsyncStorage, Text, View, Image, SafeAreaView } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { elapsedTime } from './main'
import { hunt } from './hunt'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


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
      <View style={Styles.areaView}>
        <SafeAreaView style={Styles.doneScreen}>
            <Text style={Styles.goodJob}> Good job! </Text>
            <Text style={Styles.endTime}> {elapsedTime} </Text>
            <Button success block onPress={() => this.props.navigation.navigate('Hunt')} style={Styles.doneButton}>
              <Text style={Styles.buttonText}> Back to Home </Text>
            </Button>
            <Button success block onPress={() => this.props.navigation.navigate('HighScores')} style={Styles.doneButton}>
              <Text style={Styles.buttonText}> Hunt Times </Text>
            </Button>
        </SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <Image style={{position: 'absolute', bottom: '0%', width: wp('100%'), height: hp('35%')}}
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}>
          </Image>
        </View>
      </View>
     )
   }
 }
