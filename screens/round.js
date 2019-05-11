import React from 'react'
import { Alert, NetInfo, Text, View } from 'react-native'
import AppNavigator from '../navigator/appNavigator'
import { BlurView, Font } from 'expo'
import Styles from '../assets/styles'
import Hunts from '../hunts.json'
import { currentRound, setcurrentRound } from './riddle'
import Carousel from 'react-native-looped-carousel'
import { Button } from 'native-base'
import { hunt } from './home'
import { Icon } from 'react-native-elements'
import { start, setStart } from './instructions'
import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress'

export var elapsedTime

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      connected: true,
      currentIndex: 0,
      fontLoaded: false,
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
      hunts: require('../hunts.json'),
      timerOn: false,
    }
  }

  changeIndex(index) {
    this.setState({ currentIndex: index })
  }

  async componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange) /* For detecting airplane mode/no network */
    NetInfo.isConnected.fetch().done((isConnected) => { this.setState({ connected: isConnected })})
    await Font.loadAsync({ 'robotoMonoLight': require('../assets/RobotoMono-Light.ttf'), })
    this.setState({ fontLoaded: true })
  }

  componentWillMount() {
    this.props.navigation.setParams({ title: "Round " + (currentRound + 1), backToHome: this.backToHome })
    this.startTimer()
  }

  componentWillUnmount() {
    setcurrentRound(0)
    clearInterval(this.interval) /* Clears timer */
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)
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
        { text: 'End Game', onPress: () => {this.props.navigation.navigate('Home')} }
      ]
    )
  }

  handleConnectionChange = (isConnected) => {
    this.setState({ connected: isConnected })
  }

  giveUp = () => {
    if (currentRound + 1 == hunt.hints.length) {
      setcurrentRound(0)
      this.props.navigation.navigate('Done')
      elapsedTime = this.formatTime(
        this.state.seconds / 3600) + ':' + this.formatTime((this.state.seconds + 1200) / 60) + ':' + this.formatTime(this.state.seconds
      ) /* Makes sure final 20 minutes gets added */
    }
    else {
      setcurrentRound(currentRound + 1)
      setStart(start - 1200000)
      this.props.navigation.push('Round')
    }
  }

  handleError = () => {
    this.setState({ error: true}) /* This is a function because you can't update state in render() */
  }

  unlock = () => {
    let hints = this.state.hints
    hints[this.state.currentIndex].unlocked = true
    this.setState({ hints })
    setStart(start - (hints[this.state.currentIndex].penalty * 60000))
  }

  render() {

    let timeWithColons = <Text style={Styles.timer}> {this.formatTime(this.state.seconds / 3600)} : {this.formatTime(this.state.seconds / 60)} : {this.formatTime(this.state.seconds)} </Text>
    elapsedTime = this.formatTime(this.state.seconds / 3600) + ':' + this.formatTime(this.state.seconds / 60) + ':' + this.formatTime(this.state.seconds)

    let hints = this.state.hints.map(hint => {
      if (!hint.unlocked) {
        if (hint.number == 3 && this.state.hints[1].unlocked == false) {
          return (
            <View key={"Locked View " + hint.number}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[currentRound].pathName + hint.number }}
                style={Styles.photo}
                indicator={Progress.Circle}
                indicatorProps={{
                  size: 90,
                  borderWidth: 0,
                  color: '#4169e1',
                  alignSelf: 'center'
                }}
                blurRadius={100}
                key={"Locked Image " + hint.number}/>
              <Text style={Styles.message} key={"Hint 3 Message"}>Unlock Previous to Access!</Text>
            </View>
          )
        }
        else {
          return (
          <View key={"Locked View " + hint.number}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[currentRound].pathName + hint.number }}
              style={Styles.photo}
              blurRadius={100}
              indicator={Progress.Circle}
              indicatorProps={{
                size: 90,
                borderWidth: 0,
                color: '#4169e1',
                alignSelf: 'center'
              }}
              key={"Locked Image " + hint.number}/>
            <Button block warning style={Styles.unlockButton} onPress={this.unlock} key={"Unlock Button " + hint.number}>
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
          <View key={"Unlocked View " + hint.number}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/' + hunt.hints[currentRound].pathName + hint.number }}
              style={Styles.photo}
              blurRadius={0}
              indicator={Progress.Circle}
              indicatorProps={{
                size: 90,
                borderWidth: 0,
                color: '#4169e1',
                alignSelf: 'center'
              }}
              key={"Unlocked Image " + hint.number}/>
          </View>
        )
      }
    })

    let error = ( /* When phone is not connected to network */
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Phone is offline.</Text>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>Connect to continue.</Text>
      </View>
    )

    let round = (
      <View style={Styles.main}>
        {this.state.fontLoaded ? (timeWithColons) : null}
        <Carousel
            style={Styles.photo}
            autoplay={false}
            isLooped={false}
            onAnimateNextPage={(index) => this.changeIndex(index)}
            bullets={true}>
          {hints}
          <View>
            <Image
              source={{ uri: 'https://res.cloudinary.com/lirvin/image/upload/v1556311054/college.jpg'}}
              style={Styles.photo}
              blurRadius={100}/>
            <Button block danger style={Styles.unlockButton} onPress={this.giveUp}>
              <Text style={Styles.buttonText}>Give Up</Text>
            </Button>
            <Text style={Styles.penalty}>+20 minute penalty</Text>
          </View>
        </Carousel>
        <Button block large success style={Styles.foundIt} onPress={ () => this.props.navigation.push('Riddle')}>
          <Text style={Styles.buttonText}>Found it!</Text>
        </Button>
        </View>
    )

    return (
      <View style={Styles.main}>
        {this.state.connected ? round : error}
      </View>
    )
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('title'),
      headerRight: (<Icon name="home" iconStyle={Styles.iconPadding} underlayColor='#B5E1E2' onPress={navigation.getParam('backToHome')}/>),
      headerStyle: Styles.backgroundColor,
      headerTitleStyle: Styles.header
    }
  }
}
