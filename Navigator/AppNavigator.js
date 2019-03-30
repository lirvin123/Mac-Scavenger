import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Main from '../screens/main';
import Riddle from '../screens/riddle'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Main: { screen: Main },
    Riddle: { screen: Riddle }
});

const App = createAppContainer(AppNavigator);

export default App;
