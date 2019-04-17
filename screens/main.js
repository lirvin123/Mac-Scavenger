import React from 'react'
import { Alert, AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex, setPhotoIndex } from './riddle'
import Carousel from 'react-native-looped-carousel'
import { Button } from 'native-base'
import TimerMixin from 'react-timer-mixin'
import { StackActions, NavigationActions } from 'react-navigation'
import { huntIndex } from './hunt'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: require('../photos.json'),
      currentIndex: 0,
      hintOneBlur: 100,
      hintTwoBlur: 100,
      hintOneUnlocked: false,
      hintTwoUnlocked: false,
      gaveUp: false,
      photoIndex: photoIndex,
      timer: 0,
      totalDuration: 9000,
      timerOn: false
    }
  }

  startTimer() {
    if(!this.state.timerOn) {
      this.interval = TimerMixin.setInterval(
        () => this.setState((prevState)=> ({ timer: prevState.timer + 1 })),
        1000
      );
      this.state.timerOn = true;
    }
  }

  changeIndex(index) {
    this.setState({
      currentIndex: index
    })
  }

  unlock = () => {
    if (this.state.currentIndex === 1 && this.state.hintOneUnlocked === false) {
      this.setState({
        hintOneBlur: 0,
        hintOneUnlocked: true,
        hintTwoPenalty: 7
      })
    }
    else if (this.state.currentIndex === 2 && this.state.hintTwoUnlocked === false) {
      this.setState({
        hintTwoBlur: 0,
        hintTwoUnlocked: true
      })
      if (this.state.hintOneUnlocked == false) {
        this.setState({
          hintOneBlur: 0,
          hintOneUnlocked: true,
        })
      }
    }
    else {
      this.props.navigation.navigate('Riddle')
    }
  }

  giveUp = () => {
    if (photoIndex + 1 == this.state.photos[huntIndex].hints.length) {
      setPhotoIndex(0)
      this.setState({
        gaveUp: true,
      })
      this.props.navigation.navigate('Done')
    }
    else {
      setPhotoIndex(photoIndex + 1)
      this.props.navigation.push('Main')
    }
  }

  render() {

    var unlockButtonOne;
    var unlockButtonTwo;
    var unlockTextOne;
    var unlockTextTwo;
    var seconds = this.state.timer;
    var newVar;
    var timeWithColons;
    sec = parseInt(seconds)%60;
    min = parseInt(parseInt(seconds)/60)%60;
    hr = parseInt(parseInt(seconds)/3600);

    if (this.state.hintOneUnlocked) {
      min += 5
    }
    if (this.state.hintTwoUnlocked) {
      min += 7
    }
    if (this.state.gaveUp) {
      min += 20
    }

    minString = min.toString();
    secString = sec.toString();
    hrString = hr.toString();
    if (sec < 10) {
      secString = '0' + sec.toString()
    }
    if (min < 10) {
      minString = '0' + min.toString()
    }
    if (hr < 10) {
      hrString = '0' + hr.toString()
    }



    timeWithColons = <Text style={{ fontSize: 30 }}> {hrString} : {minString} : {secString} </Text>
    this.startTimer()






    if (!this.state.hintOneUnlocked) {
      unlockButtonOne = (
        <Button block warning style={Styles.unlockButton} onPress={this.unlock}>
          <View style={{ flex: 1 }} >
            <Text style={Styles.buttonText}>Unlock</Text>
          </View>
        </Button>
      )
      unlockTextOne = (
        <Text style={Styles.penalty}>+5 minute penalty</Text>
      )
    }
    else {
      unlockButton = (
        <Text>''</Text>
      )
    }

    if (!this.state.hintTwoUnlocked) {
      unlockButtonTwo = (
        <Button block warning style={Styles.unlockButton} onPress={this.unlock}>
            <View style={{ flex: 1 }} >
              <Text style={Styles.buttonText}>Unlock</Text>
            </View>
        </Button>
      )
      unlockTextTwo = (
        <Text style={Styles.penalty}>{this.state.hintOneUnlocked ? "+7 minute penalty" : "Both for +15 minute penalty"}</Text>
      )
    }


    return (
      <View
          style={Styles.container}>







        {timeWithColons}

        <Carousel
            style={{ width: 325, height: 350}}
            autoplay={false}
            isLooped={false}
            onAnimateNextPage={(index) => this.changeIndex(index)}
            bullets={true}>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photos[huntIndex].hints[photoIndex].pathName + 1 }}
              style={{ width: 325, height: 415 }}/>
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photos[huntIndex].hints[photoIndex].pathName + 2 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintOneBlur}/>
            {unlockButtonOne}
            {unlockTextOne}
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photos[huntIndex].hints[photoIndex].pathName + 3 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintTwoBlur}/>
            {unlockButtonTwo}
            {unlockTextTwo}
          </View>
          <View style={Styles.giveUp}>
            <Button block danger style={Styles.unlockButton} onPress={this.giveUp}>
              <Text style={Styles.buttonText}> Give Up </Text>
            </Button>
            <Text style={Styles.penalty}>+20 minute penalty</Text>
          </View>
        </Carousel>
        <Button block success onPress={ () => this.props.navigation.push('Riddle')}>
          <Text style={Styles.buttonText}> Found it! </Text>
        </Button>
        </View>
    )
  }
  static navigationOptions = {
    headerLeft: null,
    title: "Round " + (photoIndex + 1),
  }
}
