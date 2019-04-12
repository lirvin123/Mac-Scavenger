import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Main from '../screens/main'
import Riddle from '../screens/riddle'
import Correct from '../screens/correct'
import Incorrect from '../screens/incorrect'

const AppNavigator = createStackNavigator({
    Home: { screen: Home, navigationOptions: { header: null } },
    Riddle: { screen: Riddle, navigationOptions: { header: null } },
    Main: { screen: Main, navigationOptions: { header: null } },
    Correct: { screen: Correct, navigationOptions: { header: null } },
    Incorrect: { screen: Incorrect, navigationOptions: { header: null } },
  }
)

const App = createAppContainer(AppNavigator)

export default App
