import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Main from '../screens/main'
import Riddle from '../screens/riddle'
import Correct from '../screens/correct'
import Incorrect from '../screens/incorrect'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Riddle: { screen: Riddle },
    Main: { screen: Main },
    Correct: { screen: Correct },
    Incorrect: { screen: Incorrect }
  }
)

const App = createAppContainer(AppNavigator)

export default App
