import React from 'react'
import { AsyncStorage, Text, View, SafeAreaView, Image } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { Icon } from 'react-native-elements'
import Photos from '../photos.json'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class HighScores extends React.Component {

  constructor() {
    super()

    let photos = require('../photos.json')
    let times = photos.map((hunt) => {
      this.retrieveItem(hunt.huntName).then((value) => {
        this.updateTime(hunt.huntName, value)
      })
      return { huntName: hunt.huntName, time: '', color: hunt.color }
    });

    this.state = {
      photos,
      times
    }
  }

  updateTime(huntName, time) {
    let newTimes = this.state.times
    for (var existingTime of newTimes) {
      if (existingTime.huntName === huntName) {
        existingTime.time = time
      }
    }
    this.setState({ times: newTimes })
  }

  async retrieveItem(key) {
    try {
      const retrievedItem = await AsyncStorage.getItem(key)
      if (retrievedItem == null) {
        return "PLAY TO FIND OUT!"
      }
      const item = retrievedItem.toString()
      return item
    }
    catch (error) {
      return "??"
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ Hunt: this.backToHome })
  }

  backToHome = () => {
    this.props.navigation.navigate('Hunt')
  }

  render() {

    let times = this.state.times.map((hunt, index) =>
      <View key={hunt.huntName + " View"}>
        <Text style={{fontSize: hp('5%'), color: hunt.color, textAlign: 'center', fontWeight: 'bold', marginVertical: hp('0.5%')}} key={hunt.huntName + " Name"}>{hunt.huntName}</Text>
        <Text style={Styles.times} key={hunt.huntName + " Time"}>{hunt.time}</Text>
      </View>
    )

    return (
      <View style={{flex: 1, backgroundColor: '#B5E1E2'}}>
        <View style={Styles.huntScreen}>
            {times}
            <Text style={{textAlign: 'center'}}> ** Only the first time played will be displayed **</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image style={{position: 'absolute', bottom: '0%', width: wp('100%'), height: hp('35%')}}
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}>
          </Image>
        </View>
      </View>

     )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Times',
      headerRight: (<Icon name="home" iconStyle={{ paddingHorizontal: 5 }} underlayColor='#B5E1E2' onPress={navigation.getParam('Hunt')}/>),
      headerStyle: { backgroundColor: '#B5E1E2' },
      headerTitleStyle: {textAlign: 'center', width: '90%'}
    }
  }
}
