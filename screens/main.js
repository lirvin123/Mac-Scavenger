import React from 'react'
import { Alert, Text, View, Image } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex, setPhotoIndex } from './riddle'
import Carousel from 'react-native-looped-carousel'
import { Button } from 'native-base'
import TimerMixin from 'react-timer-mixin'
import { hunt } from './hunt'
import { Icon } from 'react-native-elements'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      gaveUp: false,
      hintOneUnlocked: false,
      hintTwoUnlocked: false,
      photos: require('../photos.json'),
      timer: 0,
      timerOn: false,
      totalDuration: 9000
    }
  }

  changeIndex(index) {
    this.setState({ currentIndex: index })
  }

  componentDidMount() {
    this.props.navigation.setParams({ title: "Round " + (photoIndex + 1) })
  }

  startTimer() {
    if(!this.state.timerOn) {
      this.interval = TimerMixin.setInterval(
        () => this.setState((prevState)=> ({ timer: prevState.timer + 1 })),
        1000
      )
      this.state.timerOn = true
    }
  }

  giveUp = () => {
    if (photoIndex + 1 == hunt.hints.length) {
      setPhotoIndex(0)
      this.setState({ gaveUp: true })
      this.props.navigation.navigate('Done')
    }
    else {
      setPhotoIndex(photoIndex + 1)
      this.props.navigation.push('Main')
    }
  }

  unlock = () => {
    if (this.state.currentIndex == 1 && this.state.hintOneUnlocked == false) {
      this.setState({ hintOneUnlocked: true })
    }
    else if (this.state.currentIndex == 2 && this.state.hintTwoUnlocked == false) {
      this.setState({ hintTwoUnlocked: true })
    }
  }

  render() {

    var unlockButtonOne
    var unlockButtonTwo
    var unlockTextOne
    var unlockTextTwo
    var seconds = this.state.timer
    var timeWithColons
    var sec = parseInt(seconds)%60
    var min = parseInt(parseInt(seconds)/60)%60
    var hr = parseInt(parseInt(seconds)/3600)

    if (this.state.hintOneUnlocked) {
      min += 5
    }
    if (this.state.hintTwoUnlocked) {
      min += 7
    }
    if (this.state.gaveUp) {
      min += 20
    }

    minString = min.toString()
    secString = sec.toString()
    hrString = hr.toString()

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

    if (!this.state.hintOneUnlocked && !this.state.hintTwoUnlocked) {
      unlockButtonOne = (
        <Button block warning style={Styles.unlockButton} onPress={this.unlock}>
            <Text style={Styles.buttonText}>Unlock</Text>
        </Button>
      )
      unlockTextOne = (
        <Text style={Styles.penalty}>+5 minute penalty</Text>
      )
      unlockTextTwo = (
        <Text style={Styles.penalty}>Unlock previous to access!</Text>
      )
    }
    else if (this.state.hintOneUnlocked && !this.state.hintTwoUnlocked) {
      unlockButtonTwo = (
        <Button block warning style={Styles.unlockButton} onPress={this.unlock}>
              <Text style={Styles.buttonText}>Unlock</Text>
        </Button>
      )
      unlockTextTwo = (
        <Text style={Styles.penalty}>+7 minute penalty</Text>
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
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + 1 }}
              style={{ width: 325, height: 415 }}/>
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + 2 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintOneUnlocked? 0 : 100}/>
            {unlockButtonOne}
            {unlockTextOne}
          </View>
          <View style={Styles.container}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + 3 }}
              style={{ width: 325, height: 415 }}
              blurRadius={this.state.hintTwoUnlocked? 0 : 100}/>
            {unlockButtonTwo}
            {unlockTextTwo}
          </View>
          <View style={Styles.giveUp}>
            <Button block danger style={Styles.unlockButton} onPress={this.giveUp}>
              <Text style={Styles.buttonText}>Give Up</Text>
            </Button>
            <Text style={Styles.penalty}>+20 minute penalty</Text>
          </View>
        </Carousel>
        <Button block success onPress={ () => this.props.navigation.push('Riddle')}>
          <Text style={Styles.buttonText}>Found it!</Text>
        </Button>
        </View>
    )
  }
  static navigationOptions = ({ navigation }) => ({
     title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? '': navigation.state.params.title,
     headerRight: <Icon name="home"/>
   })
}
