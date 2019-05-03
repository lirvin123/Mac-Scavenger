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
    this.state = {
      photos: require('../photos.json'),
    }
    this.retrieveItem('Feeling Thirsty?').then((value) => {this.setState({ baoScore: value })})
    this.retrieveItem("Lily's Hunt").then((value) => {this.setState({ lilyScore: value })})
    this.retrieveItem("Ryan's Hunt").then((value) => {this.setState({ ryanScore: value })})
    this.retrieveItem("Maddie's Hunt").then((value) => {this.setState({ maddieScore: value })})
  }

  async retrieveItem(key) {
    try {
      const retrievedItem = await AsyncStorage.getItem(key)
      if (retrievedItem == null) {
        return "--"
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

    return (
    <View style={{ flex: 1, backgroundColor: "#B5E1E2" }}>
      <Text>{'1. Feeling Thirsty?: ' + this.state.baoScore}</Text>
      <Text>{'2. Lily\'s Hunt: ' + this.state.lilyScore}</Text>
      <Text>{'3. Ryan\'s Hunt: ' + this.state.ryanScore}</Text>
      <Text>{'4. Maddie\'s Hunt: ' + this.state.maddieScore}</Text>
      <Text>Note: Only first score will be recorded</Text>
    </View>
     )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Scores",
      headerRight: (<Icon name="home" underlayColor='#B5E1E2' iconStyle={{paddingHorizontal: 5}} onPress={navigation.getParam('Hunt')}/>),
      headerStyle: { backgroundColor: '#B5E1E2' }
    }
  }
}
