import React from 'react'
import { Alert, AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, Platform } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { Stopwatch } from 'react-native-stopwatch-timer'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex } from './riddle'
import Carousel from 'react-native-looped-carousel'
import {Button} from 'native-base'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.resetStopwatch = this.resetStopwatch.bind(this)
    this.toggleStopwatch = this.toggleStopwatch.bind(this)
    this.state = {
      photos: require('../photos.json'),
      currentIndex: 0,
      hintOneBlur: 100,
      hintTwoBlur: 100,
      hintOneUnlocked: false,
      hintTwoUnlocked: false,
      photoIndex: photoIndex,
      stopwatchReset: false,
      stopwatchStart: false,
      totalDuration: 90000
    }
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
    Alert.alert(
      'Are you sure?',
      '+20 Minute Penalty',
      [
        { text: 'Go Back' },
        { text: 'Give Up' }
      ]
    )
  }

  conditionalVisibility(style, visible) {
    return Object.assign({ display: visible ? 'flex' : 'none' }, style)
  }

  render() {

    var unlockButtonOne;
    var unlockButtonTwo;

    if (!this.state.hintOneUnlocked) {
      unlockButtonOne = (
        <TouchableOpacity
            style={Styles.unlockButton}
            onPress={this.unlock}>
          <View style={{ flex: 1 }} >
            <Text style={Styles.buttonText}>Unlock</Text>
            <Text style={Styles.penalty}>+5 minutes</Text>
          </View>
        </TouchableOpacity>
      );
    }
    else {
      unlockButton = (
        <Text>''</Text>
      )
    }

    if (!this.state.hintTwoUnlocked) {
      unlockButtonTwo = (
        <TouchableOpacity
            style={Styles.unlockButton}
            onPress={this.unlock}>
            <View style={{ flex: 1 }} >
              <Text style={Styles.buttonText}>Unlock</Text>
              <Text style={Styles.penalty}>{this.state.hintOneUnlocked ? "+7 minutes" : "Both for +15 minutes"}</Text>
            </View>
        </TouchableOpacity>
      )
    }

    return (
      <View
          style={Styles.container}>
        <Text style={Styles.round}> {"Round " + (photoIndex + 1)} </Text>
        <Carousel
            style={{ width: 325, height: 350}}
            autoplay={false}
            isLooped={false}
            onAnimateNextPage={(index) => this.changeIndex(index)}
            bullets={true}>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photos[this.state.photoIndex].pathName + 1 }}
              style={{ width: 325, height: 415 }}/>
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photos[this.state.photoIndex].pathName + 2 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintOneBlur}/>
            {unlockButtonOne}
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.photos[this.state.photoIndex].pathName + 3 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintTwoBlur}/>
            {unlockButtonTwo}
          </View>
        </Carousel>
        <Button block danger onPress={ () => this.props.navigation.push('Riddle')}>
          <Text style={Styles.buttonText}> Found it! </Text>
        </Button>
        <Button block danger onPress={this.giveUp}>
          <Text style={Styles.buttonText}> Give Up </Text>
        </Button>
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
        </View>
    )
  }
}
