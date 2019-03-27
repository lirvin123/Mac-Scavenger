import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Main from '../screens/main';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Main: { screen: Main }
});

const App = createAppContainer(AppNavigator);

export default App;
