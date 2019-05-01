import React from 'react'
import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Main from './main'
import Photos from '../photos.json'
import { Button } from 'native-base'
import { hunt } from './hunt'
import { Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export var photoIndex = 0

export var setPhotoIndex = (index) => {photoIndex = index}

export default class Riddle extends React.Component {

  constructor() {
    super()
    this.state = {
      photos: require('../photos.json'),
      riddleGuess: '',
      message: "Guess",
      nextround: false,
      result: '',
      icon: 'help'
    }
    this.width = Dimensions.get('window').width
  }

  backToHome = () => {
    Alert.alert(
      "Are you Sure?",
      "Your game will be lost",
      [
        { text: 'Cancel' },
        { text: 'Home', onPress: () => {this.props.navigation.navigate('Hunt')} }
      ]
    )
  }

  press = () => {
    if (this.state.nextRound == true) {
      if (photoIndex + 1 == hunt.hints.length){
        setPhotoIndex(0)
        return this.props.navigation.navigate('Done')
      }
      else {
        setPhotoIndex(photoIndex + 1)
        return this.props.navigation.push("Main")
      }
    }
    else {
      this.checkGuess()
    }
  }

  checkGuess() {
    if ((this.state.riddleGuess.toLowerCase()).trim() == hunt.hints[photoIndex].riddleAnswer) {
      if (photoIndex + 1 == hunt.hints.length) {
        this.setState({ riddle: '', message: "Finish", nextRound: true, icon: 'check' })
      }
      else {
        this.setState({ message: "Next Round", nextRound: true, icon: 'check' })
      }
    }
    else {
      this.textInput.clear()
      this.setState({ icon: "clear" })
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ backToHome: this.backToHome })
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#B5E1E2' }}>
        <View style={Styles.riddleScreen}>
          <Text style={Styles.riddle}> {hunt.hints[photoIndex].riddle} </Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxHeight: hp('6%')}} >
            <TextInput
              autoCorrect={false}
              autoFocus={true}
              maxLength={30}
              onChangeText={(text) => { this.setState({ riddleGuess: text }) }}
              onSelectionChange={ () => this.setState({ result: '' }) }
              placeholder={'Type answer here'}
              ref={input => { this.textInput = input }}
              style={Styles.textInput}>
            </TextInput>
            <Icon name={this.state.icon} style={{ alignSelf: 'center'}}></Icon>
          </View>
          <Button block large success style={Styles.guess} onPress={this.press}>
            <Text style={Styles.buttonText}> {this.state.message} </Text>
          </Button>
        </View>
      </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Solve the Puzzle:",
      headerRight: (<Icon name="home" onPress={navigation.getParam('backToHome')}/>),
      headerStyle: { backgroundColor: '#B5E1E2' }
    }
  }
}
