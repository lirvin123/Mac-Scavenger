import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Screens/Home';
import Main from '../Screens/Main';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Main: { screen: Main }
});

const App = createAppContainer(AppNavigator);

export default App;
