import React from 'react'
import { Alert, Text, View, Image } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { BlurView } from 'expo'
import Styles from '../assets/styles'
import Photos from '../photos.json'
import { photoIndex, setPhotoIndex } from './riddle'
import Carousel from 'react-native-looped-carousel'
import { Button } from 'native-base'
import { hunt } from './hunt'
import { Icon } from 'react-native-elements'
import { start, setStart } from './instructions'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export var elapsedTime

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
      seconds: (new Date().getTime() - start) / 1000,
      photos: require('../photos.json'),
      timerOn: false
    }
  }

  changeIndex(index) {
    this.setState({ currentIndex: index })
  }

  componentDidMount() {
    this.props.navigation.setParams({ title: "Round " + (photoIndex + 1), backToHome: this.backToHome })
    this.startTimer()
  }

  componentWillUnmount() {
    setPhotoIndex(0)
    clearInterval(this.interval)
  }

  formatTime(time) {
    var timeInt = parseInt(time)%60
    var timeStr = timeInt.toString()
    if (timeInt < 10) {
      timeInt = '0' + timeInt.toString()
    }
    return timeInt
  }

  startTimer() {
    if(!this.state.timerOn) {
      this.interval = setInterval(
        () => this.setState(() => ({ seconds: (new Date().getTime() - start) / 1000 })),
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
        { text: 'End Game', onPress: () => {this.props.navigation.navigate('Hunt')} }
      ]
    )
  }

  giveUp = () => {
    if (photoIndex + 1 == hunt.hints.length) {
      setPhotoIndex(0)
      this.props.navigation.navigate('Done')
      elapsedTime = this.formatTime(this.state.seconds / 3600) + ':' + this.formatTime((this.state.seconds + 1200) / 60) + ':' + this.formatTime(this.state.seconds)
    }
    else {
      setPhotoIndex(photoIndex + 1)
      setStart(start - 1200000)
      this.props.navigation.push('Main')
    }
  }

  unlock = () => {
    let hints = this.state.hints
    hints[this.state.currentIndex].unlocked = true
    this.setState({ hints })
    setStart(start - (hints[this.state.currentIndex].penalty * 60000))
  }

  render() {

    var timeWithColons

    var sec = parseInt(this.state.seconds)%60
    var min = parseInt((this.state.seconds)/60)%60
    var hr = parseInt((this.state.seconds)/3600)%60

    timeWithColons = <Text style={Styles.timer}> {this.formatTime(this.state.seconds / 3600)} : {this.formatTime(this.state.seconds / 60)} : {this.formatTime(this.state.seconds)} </Text>
    elapsedTime = this.formatTime(this.state.seconds / 3600) + ':' + this.formatTime(this.state.seconds / 60) + ':' + this.formatTime(this.state.seconds)

    var hints = this.state.hints.map(hint => {
      if (hint.unlocked == false) {
        if (hint.number == 3 && this.state.hints[1].unlocked == false) {
          return (
            <View style={Styles.main} key={"Locked View " + hint.number}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + hint.number }}
                style={Styles.photo}
                blurRadius={100}
                key={"Locked Image " + hint.number}/>
              <Text style={Styles.message} key={"Hint 3 Message"}>Unlock Previous to Access!</Text>
            </View>
          )
        }
        else {
          return (
          <View style={Styles.main} key={"Locked View " + hint.number}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + hint.number }}
              style={Styles.photo}
              blurRadius={100}
              key={"Locked Image " + hint.number}/>
            <Button block warning style={Styles.unlockButton}
                    onPress={this.unlock} key={"Unlock Button " + hint.number}>
              <Text style={Styles.buttonText} key={hint.number}>Unlock</Text>
            </Button>
            <Text style={Styles.penalty} key={"Penalty " + hint.number}>
                  {'+ ' + hint.penalty + ' minute penalty'}
            </Text>
          </View>
          )
        }
      }
      else {
        return (
          <View style={Styles.main} key={"Unlocked View " + hint.number}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[photoIndex].pathName + hint.number }}
              style={Styles.photo}
              blurRadius={0}
              key={"Unlocked Image " + hint.number}/>
          </View>
        )
      }
    })

    return (
      <View style={Styles.main}>
        {timeWithColons}
        <Carousel
            style={Styles.photo}
            autoplay={false}
            isLooped={false}
            onAnimateNextPage={(index) => this.changeIndex(index)}
            bullets={true}>
          {hints}
          <View style={Styles.main}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}
            style={Styles.photo}
            blurRadius={100}/>
            <Button block danger style={Styles.unlockButton}
                    onPress={this.giveUp}>
              <Text style={Styles.buttonText}>Give Up</Text>
            </Button>
            <Text style={Styles.penalty}>+20 minute penalty</Text>
          </View>
        </Carousel>
        <Button block large success style={Styles.foundIt}
                onPress={ () => this.props.navigation.push('Riddle')}>
          <Text style={Styles.buttonText}>Found it!</Text>
        </Button>
        </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('title'),
      headerRight: (<Icon name="home" underlayColor='#B5E1E2' onPress={navigation.getParam('backToHome')}/>),
      headerStyle: { backgroundColor: '#B5E1E2' }
    }
  }
}
