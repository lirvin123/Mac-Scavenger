import React from 'react'
import { Alert, Image, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { Button } from 'native-base'


export var hunt

export default class Hunt extends React.Component {

  constructor() {
    super()
    this.state = { photos: require('../photos.json') }
  }

  setHunt(huntChoice) {
    hunt = huntChoice
    this.props.navigation.navigate('Instructions')
  }

  render() {

    var hunts = this.state.photos.map(hunt => (
      <Button block success style={Styles.huntButton} onPress={() => this.setHunt(hunt)} key={hunt.huntName}>
        <Text style={{color: '#fff', fontSize: 30}}> {hunt.huntName} </Text>
      </Button>
      )
    )

    return (
      <View style={{flex: 1}}>
        <View style={Styles.huntScreen}>
            {hunts}
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image style={{position: 'absolute', bottom: '0%', width: 425, height:250}} source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}></Image>
        </View>
      </View>
    )
  }
}
