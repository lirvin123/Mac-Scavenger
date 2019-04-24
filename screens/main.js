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
import { seconds } from './instructions'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      gaveUp: false,
      hints: [
        {
          number: 1,
          unlocked: true,
          penalty: 0
        },
        {
          number: 2,
          unlocked: false,
          penalty: 5
        },
        {
          number: 3,
          unlocked: false,
          penalty: 7
        }
      ],
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
    this.props.navigation.setParams({ title: "Round " + (photoIndex + 1), backToHome: this.backToHome })
  }

  componentWillUnmount() {
    setPhotoIndex(0)
    clearInterval(this.interval)
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

  backToHome = () => {
    Alert.alert(
      "Are you Sure?",
      "Your game will be lost",
      [
        { text: 'Cancel' },
        { text: 'Home', onPress: () => {this.props.navigation.navigate('Hunt')} }
      ]
    )
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
    let hints = this.state.hints
    hints[this.state.currentIndex].unlocked = true
    this.setState({ hints })
  }

  render() {

    //var seconds = this.state.timer
    var timeWithColons
    var sec = parseInt(seconds)%60
    var min = parseInt(parseInt(seconds)/60)%60
    var hr = parseInt(parseInt(seconds)/3600)

    if (this.state.hints[1].unlocked) {
      min += 5
    }
    if (this.state.hints[2].unlocked) {
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
    //this.startTimer()

    var hints = this.state.hints.map(hint => {
      if (hint.unlocked == false) {
        if (hint.number == 3 && this.state.hints[1].unlocked == false){
          return (
            <View style={Styles.container} key={"Locked View " + hint.number}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + hint.number }}
                style={{ width: 325, height: 415 }}
                blurRadius={100}
                key={"Locked Image " + hint.number}/>
              <Text style={Styles.penalty} key={"Hint 3 Message"}>Unlock Previous to Access!</Text>
            </View>
          )
        }
        else {
          return (
          <View style={Styles.container} key={"Locked View " + hint.number}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + hint.number }}
              style={{ width: 325, height: 415 }}
              blurRadius={100}
              key={"Locked Image " + hint.number}/>
            <Button block warning style={Styles.unlockButton} onPress={this.unlock} key={"Unlock Button " + hint.number}>
              <Text style={Styles.buttonText} key={hint.number}>Unlock</Text>
            </Button>
            <Text style={Styles.penalty} key={"Penalty " + hint.number}>{'+ ' + hint.penalty + ' minute penalty'}</Text>
          </View>
          )
        }
      }
      else {
        return (
          <View style={Styles.container} key={"Unlocked View " + hint.number}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + hint.number }}
              style={{ width: 325, height: 415 }}
              blurRadius={0}
              key={"Unlocked Image " + hint.number}/>
          </View>
        )
      }
    })

    return (
      <View style={Styles.container}>
        {timeWithColons}
        <Carousel
            style={{ width: 325, height: 350}}
            autoplay={false}
            isLooped={false}
            onAnimateNextPage={(index) => this.changeIndex(index)}
            bullets={true}>
          {hints}
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
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('title'),
      headerRight: (<Icon name="home" onPress={navigation.getParam('backToHome')}/>)
    }
  }
}
