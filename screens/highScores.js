import React from 'react'
import { AsyncStorage, Image, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Icon } from 'react-native-elements'
import Photos from '../photos.json'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

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

    let times = this.state.times.map((hunt, index) => /* Text style not in styles because it uses hunt.color */
      <View key={hunt.huntName + " View"}>
        <Text style={{fontSize: hp('5%'), color: hunt.color, textAlign: 'center', fontWeight: 'bold', marginVertical: hp('0.5%')}} key={hunt.huntName + " Name"}>{hunt.huntName}</Text>
        <Text style={Styles.times} key={hunt.huntName + " Time"}>{hunt.time}</Text>
      </View>
    )

    return (
      <View style={Styles.baseView}>
        <View style={Styles.huntScreen}>
          {times}
          <Text style={{textAlign: 'center'}}> ** Only the first time played will be displayed **</Text>
        </View>
        <View style={Styles.bottomImageView}>
          <Image style={Styles.bottomImage}
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}>
          </Image>
        </View>
      </View>

     )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Times',
      headerRight: (<Icon name="home" iconStyle={Styles.iconPadding} underlayColor='#B5E1E2' onPress={navigation.getParam('Hunt')}/>),
      headerStyle: Styles.backgroundColor,
      headerTitleStyle: Styles.header
    }
  }
}
