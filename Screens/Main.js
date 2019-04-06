import React from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, Platform } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { Stopwatch } from 'react-native-stopwatch-timer'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex } from './riddle'
import Carousel from 'react-native-looped-carousel'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.resetStopwatch = this.resetStopwatch.bind(this)
    this.toggleStopwatch = this.toggleStopwatch.bind(this)
    this.state = {
      allPhotos: require('../photos.json'),
      button: Styles.button,
      buttonText: "Found it!",
      currIndex: 0,
      hintOneBlur: 100,
      hintTwoBlur: 100,
      hintOneUnlocked: false,
      hintTwoUnlocked: false,
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

  onSwipe(index) {
    if (index === 1) {
      this.setState({
        currIndex: 1
      })
      if (this.state.hintOneUnlocked === true) {
        this.setState({
          button: Styles.button,
          buttonText: "Found it!"
        })
      }
      else {
        this.setState({
          button: Styles.unlock,
          buttonText: "Unlock (+5 min)"
        })
      }
    }
    else if (index === 2) {
      this.setState({
        currIndex: 2
      })
      if (this.state.hintTwoUnlocked === true) {
        this.setState({
          button: Styles.button,
          buttonText: "Found it!"
        })
      }
      else {
        this.setState({
          button: Styles.unlock,
          buttonText: "Unlock (+7 min)"
        })
      }
    }
    else {
      this.setState({
        currIndex: 0,
        button: Styles.button,
        buttonText: "Found it!"
      })
    }
  }

  unlock() {
    if (this.state.currIndex === 1 && this.state.hintOneUnlocked === false) {
      this.setState({
        hintOneBlur: 0,
        hintOneUnlocked: true
      })
    }
    else if (this.state.currIndex === 2 && this.state.hintTwoUnlocked === false) {
      this.setState({
        hintTwoBlur: 0,
        hintTwoUnlocked: true
      })
    }
    else {
      this.props.navigation.navigate('Riddle')
    }
  }

  componentDidMount() {
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
        <Text style={Styles.round}> {"Round " + (photoIndex + 1)} </Text>
        <Carousel
            style={{ width: 325, height: 350}}
            autoplay={false}
            isLooped={false}
            onAnimateNextPage={(index) => this.onSwipe(index)}
            pageInfo={true}
            pageInfoBackgroundColor={'rgba(255,255,255, 0.5)'}
            pageInfoTextSeparator={' of '}>
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
        </Carousel>
        <TouchableOpacity
            style={this.state.button}
            onPress={this.unlock.bind(this)}>
          <Text style={Styles.buttonText}> {this.state.buttonText} </Text>
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
        </View>
    )
  }
}
