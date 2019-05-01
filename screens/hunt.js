import React from 'react'
import { Alert, Image, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { Button } from 'native-base'
import { Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export var hunt

export default class Hunt extends React.Component {

  constructor() {
    super()
    this.state = { photos: require('../photos.json') }
  }

  componentDidMount() {
    this.props.navigation.setParams({ toScores: this.toScores })
  }

  setHunt(huntChoice) {
    hunt = huntChoice
    this.props.navigation.navigate('Instructions')
  }

  backToHome = () => {
    Alert.alert(
      "Are you Sure?",
      "Your game will be lost",
      [
        { text: 'Cancel' },
        { text: 'End Game', onPress: () => {this.props.navigation.navigate('Hunt')} }
      ]
    )
  }

  toScores = () => {
    this.props.navigation.navigate('HighScores')
  }

  render() {

    var hunts = this.state.photos.map(hunt => (
      <Button block success style={Styles.huntButton} onPress={() => this.setHunt(hunt)} key={hunt.huntName}>
        <Text style={Styles.buttonText}> {hunt.huntName} </Text>
      </Button>
      )
    )

    return (
      <View style={{flex: 1, backgroundColor: '#B5E1E2'}}>
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
      headerRight: (<Icon name="home" onPress={navigation.getParam('toScores')}/>),
      }
    }
  }
