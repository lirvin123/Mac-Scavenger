import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Round from '../screens/round'
import Riddle from '../screens/riddle'
import Home from '../screens/home'
import Done from '../screens/done'
import Instructions from '../screens/instructions'
import Times from '../screens/times'

const RoundStack = createStackNavigator({
    Round: { screen: Round, navigationOptions: { gesturesEnabled: false, headerLeft: null, headerBackTitle: "Back" }},
    Riddle: { screen: Riddle},
    Done: { screen: Done, navigationOptions: { header: null, gesturesEnabled: false }}
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
)

const HomeStack = createStackNavigator({
    Home: { screen: Home, navigationOptions: { title: "Select a Hunt:", headerBackTitle: "Back" }},
    Instructions : { screen: Instructions, navigationOptions: { headerBackTitle: "Back"} }
})

const TimesStack = createStackNavigator({
    Times: { screen: Times }
})

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeStack },
    Times: { screen: TimesStack },
    Round: { screen: RoundStack }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const App = createAppContainer(AppNavigator)

export default App
