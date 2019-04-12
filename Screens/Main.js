import React from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, Platform } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { Stopwatch } from 'react-native-stopwatch-timer'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex } from './riddle'
import Carousel from 'react-native-looped-carousel'
import { StackActions, NavigationActions } from 'react-navigation';

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.resetStopwatch = this.resetStopwatch.bind(this)
    this.toggleStopwatch = this.toggleStopwatch.bind(this)
    this.state = {
      allPhotos: require('../photos.json'),
      currentIndex: 0,
      hintOneBlur: 100,
      hintTwoBlur: 100,
      hintOneUnlocked: false,
      hintTwoUnlocked: false,
      stopwatchReset: false,
      stopwatchStart: false,
      totalDuration: 90000
    }
  }
  // static navigationOptions = {
  //        headerTitle:'Disable back Options',
  //        headerTitleStyle: {color:'white'},
  //        headerStyle: {backgroundColor:'black'},
  //        headerTintColor: 'red',
  //        headerForceInset: {vertical: 'never'},
  //        headerLeft: " "
  //      }

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
        hintOneUnlocked: true
      })
    }
    else if (this.state.currentIndex === 2 && this.state.hintTwoUnlocked === false) {
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
          hintOneBlur: 100,
          hintTwoBlur: 100,
          hintOneUnlocked: false,
          hintTwoUnlocked: false
        })
        this.forceUpdate()
      }
    )
  }

  conditionalVisibility(style, visible) {
    return Object.assign({ display: visible ? 'block' : 'none' }, style)
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
            onAnimateNextPage={(index) => this.changeIndex(index)}
            bullets={true}>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.allPhotos[photoIndex].pathName + 1 }}
              style={{ width: 325, height: 415 }} />
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.allPhotos[photoIndex].pathName + 2 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintOneBlur} />
            <TouchableOpacity
                style={this.conditionalVisibility(Styles.unlockButton, !this.state.hintOneUnlocked)}
                onPress={this.unlock}>
              <Text style={Styles.buttonText}> Unlock </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + this.state.allPhotos[photoIndex].pathName + 3 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintTwoBlur} />
            <TouchableOpacity
                style={this.conditionalVisibility(Styles.unlockButton, !this.state.hintTwoUnlocked)}
                onPress={this.unlock}>
              <Text style={Styles.buttonText}> Unlock </Text>
            </TouchableOpacity>
          </View>
        </Carousel>
        <TouchableOpacity
            style={Styles.button}
            onPress={ () => this.props.navigation.navigate('Riddle')}>
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
        </View>
    )
  }
  static navigationOptions = { //got rid of the back button
        headerLeft : null
    };
}
