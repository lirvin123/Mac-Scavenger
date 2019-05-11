import React from 'react'
import { AsyncStorage, Image, SafeAreaView, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { elapsedTime } from './round'
import { hunt } from './home'

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
      console.log('??')
    }
  }

  render() {
    return (
      <View style={Styles.baseView}>
        <SafeAreaView style={Styles.doneScreen}>
            <Text style={Styles.goodJob}> Good job! </Text>
            <Text style={Styles.endTime}> {elapsedTime} </Text>
            <Button success block onPress={() => this.props.navigation.navigate('Home')} style={Styles.doneButton}>
              <Text style={Styles.buttonText}> Back to Home </Text>
            </Button>
            <Button success block onPress={() => this.props.navigation.navigate('Times')} style={Styles.doneButton}>
              <Text style={Styles.buttonText}> Hunt Times </Text>
            </Button>
        </SafeAreaView>
        <View style={Styles.bottomImageView}>
          <Image style={Styles.bottomImage}
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}>
          </Image>
        </View>
      </View>
     )
   }
 }
