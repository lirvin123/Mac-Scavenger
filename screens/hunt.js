import React from 'react'
import { Alert, AsyncStorage, Image, Text, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { Button } from 'native-base'
import { Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export var hunt

export var setHunt = (choice) => {hunt = choice}

export default class Hunt extends React.Component {

  constructor() {
    super()
    this.state = {
      photos: require('../photos.json'),
      huntList: []
    }
  }

  loadHunts() {
    let huntList = this.state.photos.map((hunt) => {
      this.getCompletedState(hunt.huntName).then((completed) => {
        this.updateIcon(hunt.huntName, completed)
      })
      return { huntName: hunt.huntName, completed: '' }
    })
    this.setState({ huntList })
  }

  updateIcon(huntName, completed) {
    let huntList = this.state.huntList
    for (var hunt of huntList) {
      if (hunt.huntName === huntName) {
        hunt.completed = completed
      }
    }
    this.setState({ huntList })
  }

  async getCompletedState(key) {
    try {
      let value = await AsyncStorage.getItem(key)
      return (value != null)
    }
    catch (error) {
      return '??'
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ toScores: this.toScores })
  }

  setHunt(name) {
    for (var hunt of this.state.photos) {
      if (hunt.huntName === name) {
        setHunt(hunt)
      }
    }
    this.props.navigation.navigate('Instructions')
  }

  toScores = () => {
    this.props.navigation.navigate('HighScores')
  }

  render() {

    let hunts = this.state.huntList.map(hunt => (
      <Button block success style={Styles.huntButton} onPress={() => this.setHunt(hunt.huntName)} key={hunt.huntName}>
        <Icon name={hunt.completed ? 'check-box' : 'check-box-outline-blank'} color='white' iconStyle={{ marginLeft: 20, marginRight: 10}}/>
        <Text style={Styles.buttonText}> {hunt.huntName} </Text>
      </Button>
      )
    )

    return (
      <View style={{flex: 1, backgroundColor: '#B5E1E2'}}>
        <NavigationEvents onWillFocus={ payload => this.loadHunts() } />
        <View style={Styles.huntScreen}>
            {hunts}
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
      headerStyle: { backgroundColor: '#B5E1E2' },
      headerRight: (<Icon name="list" iconStyle={{ paddingHorizontal: 5 }} underlayColor='#B5E1E2' onPress={navigation.getParam('toScores')}/>),
      headerStyle: { backgroundColor: '#B5E1E2' },
      headerTitleStyle: {textAlign: 'center', width: '105%'}
      }
    }
  }
