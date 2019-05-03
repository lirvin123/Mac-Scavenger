import React from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { WebBrowser } from 'expo'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { Icon } from 'react-native-elements'
import Photos from '../photos.json'

export default class HighScores extends React.Component {

  constructor() {
    super()

    let photos = require('../photos.json')
    let times = photos.map((hunt) => {
      this.retrieveItem(hunt.huntName).then((value) => {
        this.updateTime(hunt.huntName, value)
      })
      return { huntName: hunt.huntName, time: '' }
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
        return "—" 
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
      <Text key={hunt.huntName}>{index + 1}. {hunt.huntName}: {hunt.time}</Text>
    )

    return (
    <View style={{ flex: 1, backgroundColor: "#B5E1E2" }}>
      {times}
      <Text>Note: Only first Time will be recorded</Text>
    </View>
     )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Times",
      headerRight: (<Icon name="home" underlayColor='#B5E1E2' iconStyle={{paddingHorizontal: 5}} onPress={navigation.getParam('Hunt')}/>),
      headerStyle: { backgroundColor: '#B5E1E2' }
    }
  }
}
