import React from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import { Button } from 'native-base'
import { hunt } from './home'
import { Icon } from 'react-native-elements'

export var currentRound = 0

export var setcurrentRound = (round) => {currentRound = round}

export default class Riddle extends React.Component {

  constructor() {
    super()
    this.state = {
      answered: false,
      riddleGuess: '',
      message: "Guess",
      nextRound: false,
      icon: ''
    }
  }

  checkGuess() {
    if ((this.state.riddleGuess.toLowerCase()).trim() == hunt.hints[currentRound].riddleAnswer) {
      if (currentRound + 1 == hunt.hints.length) { /* Prevents array out of bounds error */
        this.setState({ riddle: '', message: "Finish", nextRound: true, icon: 'check' })
      }
      else {
        this.setState({ message: "Next Round", nextRound: true, icon: 'check' })
      }
    }
    else {
      this.textInput.clear()
      this.setState({ icon: "clear", riddleGuess: '' })
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ backToHome: this.backToHome })
  }

  backToHome = () => {
    Alert.alert(
      "Are you Sure?",
      "Your game will be lost",
      [
        { text: 'Cancel' },
        { text: 'End Game', onPress: () => {this.props.navigation.navigate('Home')} }
      ]
    )
  }

  press = () => {
    this.setState({ answered: true })
    if (this.state.nextRound) {
      if (currentRound + 1 == hunt.hints.length){
        setcurrentRound(0)
        this.props.navigation.navigate('Done')
      }
      else {
        this.props.navigation.push("Round")
        setcurrentRound(currentRound + 1)
      }
    }
    else {
      this.checkGuess()
    }
  }

  render() {

    return (
      <View style={Styles.baseView}>
        <ScrollView contentContainerStyle={Styles.riddleScreen} keyboardShouldPersistTaps={'handled'} keyboardDismissMode={'on-drag'}>
          <Text style={Styles.riddle}> {hunt.hints[currentRound].riddle} </Text>
          <View style={Styles.textInputView} >
            <TextInput
              autoCorrect={false}
              autoFocus={true}
              editable={this.state.nextRound ? false : true}
              maxLength={30}
              onChangeText={(text) => { this.setState({ riddleGuess: text }) }}
              onSelectionChange={() => this.setState({ answered: false })}
              onSubmitEditing={this.press}
              placeholder={'Type answer here'}
              ref={input => { this.textInput = input }}
              style={Styles.textInput}>
            </TextInput>
            {this.state.answered ? (<Icon name={this.state.icon} iconStyle={{ alignSelf: 'center'}}></Icon>) : null}
          </View>
          <Button block large success style={Styles.guess} onPress={this.press}>
            <Text style={Styles.buttonText}> {this.state.message} </Text>
          </Button>
        </ScrollView>
      </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Solve the Puzzle:",
      headerRight: (<Icon name="home" iconStyle={Styles.iconPadding} underlayColor='#B5E1E2' onPress={navigation.getParam('backToHome')}/>),
      headerStyle: Styles.backgroundColor,
      headerTitleStyle: Styles.headerOnRiddle
    }
  }
}
