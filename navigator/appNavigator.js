import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Main from '../screens/main'
import Riddle from '../screens/riddle'
import Correct from '../screens/correct'
import Incorrect from '../screens/incorrect'
import Hunt from '../screens/hunt'
import Done from '../screens/done'

const AppNavigator = createStackNavigator({
    Hunt: { screen: Hunt },
    Main: { screen: Main },
    Riddle: { screen: Riddle, navigationOptions: { header: null } },
    Done: { screen: Done, navigationOptions: { header: null }}
  }
)

const App = createAppContainer(AppNavigator)

export default App
