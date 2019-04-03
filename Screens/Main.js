import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, Platform, Button, ScrollView, Alert } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import Swiper from 'react-native-swiper'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex } from './riddle'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.toggleTimer = this.toggleTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.toggleStopwatch = this.toggleStopwatch.bind(this)
    this.resetStopwatch = this.resetStopwatch.bind(this)
    this.state = {
      allPhotos: require('../photos.json'),
      swipeIndex: 0,
      hintOneBlur: 100,
      hintTwoBlur: 100,
      hintOneUnlocked: false,
      hintTwoUnlocked: false,
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    }
  }

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }

  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }

  getFormattedTime(time) {
      this.currentTime = time;
  }

  onSwipe(index) {
    if (index == 1 || index == 2) {
      if ((index == 1 && this.state.hintOneUnlocked == true) || (index == 2 && this.state.hintTwoUnlocked == true)) {
        return
      }
        if (index == 1) {
          Alert.alert(
            'Unlock',
            '+5 Minute Penalty',
            [
              { text: 'Go Back' },
              { text: 'Unlock', onPress: () => this.setState({ hintOneBlur: 0, hintOneUnlocked: true }) }
            ],
            { cancelable: false }
          )
        }
        else {
          Alert.alert(
            'Unlock',
            '+7 Minute Penalty',
            [
              { text: 'Go Back' },
              { text: 'Unlock', onPress: () => this.setState({ hintTwoBlur: 0, hintTwoUnlocked: true }) }
            ],
            { cancelable: false }
          )
        }
      }
    }

    componentDidMount() { //code from: https://stackoverflow.com/questions/45837208/react-navigation-re-render-previous-page-when-going-back
      this.props.navigation.addListener(
        'willFocus',
        payload => {
          this.setState({
            index: 0,
            hintOneBlur: 100,
            hintTwoBlur: 100,
            hintOneUnlocked: false,
            hintTwoUnlocked: false
          })
          this.forceUpdate()
        }
      )
    }

  render() {

    return (
      <View
          style={Styles.container}>
        <Swiper
            loop={false}
            onIndexChanged={(index) => this.onSwipe(index)}
            width={325}
            height={415}
            removeClippedSubviews={false}
            index={this.state.swiperIndex}>
          <View
              style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.allPhotos[photoIndex].pathName + 1 }}
              style={{ width: 325, height: 415 }} />
          </View>
          <View
              style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.allPhotos[photoIndex].pathName + 2 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintOneBlur} />
          </View>
          <View
              style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.allPhotos[photoIndex].pathName + 3 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintTwoBlur} />
          </View>
        </Swiper>
        <TouchableOpacity
            style={Styles.button}
            onPress={ () => this.props.navigation.navigate('Riddle') }>
          <Text style={Styles.buttonText}> Found it! </Text>
        </TouchableOpacity>
        <Stopwatch
          laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          getTime={this.getFormattedTime} />
        <TouchableHighlight
            onPress={this.toggleStopwatch}>
          <Text style={{ fontSize: 30 }}> {!this.state.stopwatchStart ? "Start" : "Stop"} </Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.resetStopwatch}>
          <Text style={{ fontSize: 30 }}> Reset </Text>
        </TouchableHighlight>
        <Timer
          totalDuration={this.state.totalDuration}
          msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
        <TouchableHighlight
            onPress={this.toggleTimer}>
          <Text style={{ fontSize: 30 }}> {!this.state.timerStart ? "Start" : "Stop"} </Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.resetTimer}>
          <Text style={{ fontSize: 30 }}> Reset </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const handleTimerComplete = () => alert("custom completion function");
