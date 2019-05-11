import React from 'react'
import { AsyncStorage, Image, Text, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Hunts from '../hunts.json'
import { Button } from 'native-base'
import { Icon } from 'react-native-elements'

export var hunt

export var setHunt = (choice) => {hunt = choice}

export default class Hunt extends React.Component {

  constructor() {
    super()
    this.state = {
      hunts: require('../hunts.json'),
      huntList: []
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ toScores: this.toTimes })
  }

  async getCompletedState(huntName) {
    try {
      let time = await AsyncStorage.getItem(huntName)
      return (time != null)
    }
    catch (error) {
      return '??'
    }
  }

  loadHunts() {
    let huntList = this.state.hunts.map((hunt) => {
      this.getCompletedState(hunt.huntName).then((completed) => {
        this.updateCompletedState(hunt.huntName, completed)
      })
      return { huntName: hunt.huntName, completed: '' }
    })
    this.setState({ huntList })
  }

  selectHunt(huntName) {
    for (var hunt of this.state.hunts) {
      if (hunt.huntName === huntName) {
        setHunt(hunt)
      }
    }
    this.props.navigation.navigate('Instructions')
  }

  updateCompletedState(huntName, completed) {
    let huntList = this.state.huntList
    for (var hunt of huntList) {
      if (hunt.huntName === huntName) {
        hunt.completed = completed
      }
    }
    this.setState({ huntList })
  }

  toTimes = () => {
    this.props.navigation.navigate('Times')
  }

  render() {

    let hunts = this.state.huntList.map(hunt => (
      <Button block success style={Styles.huntButton} onPress={() => this.selectHunt(hunt.huntName)} key={hunt.huntName}>
        <Icon name={hunt.completed ? 'check-box' : 'check-box-outline-blank'} color='white' iconStyle={Styles.iconStyle}/>
        <Text style={Styles.buttonText}> {hunt.huntName} </Text>
      </Button>
      )
    )

    return (
      <View style={Styles.baseView}>
        <NavigationEvents onWillFocus={payload => this.loadHunts()} />
        <View style={Styles.huntScreen}>
          {hunts}
        </View>
        <View style={Styles.bottomImageView}>
          <Image
            style={Styles.bottomImage}
            source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg' }}>
          </Image>
        </View>
      </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: Styles.backgroundColor,
      headerRight: (<Icon name="list" iconStyle={Styles.iconPadding} underlayColor='#B5E1E2' onPress={navigation.getParam('toScores')}/>),
      headerTitleStyle: Styles.header
      }
    }
  }
