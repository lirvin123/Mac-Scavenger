import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Main from '../screens/main'
import Riddle from '../screens/riddle'
import CorrectGuess from '../screens/correctGuess'
import IncorrectGuess from '../screens/incorrectGuess'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Main: { screen: Main },
    Riddle: { screen: Riddle },
    CorrectGuess: { screen: CorrectGuess },
    IncorrectGuess: { screen: IncorrectGuess }
  }
)

const App = createAppContainer(AppNavigator)

export default App
