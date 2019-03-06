import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import Picture1 from '../Screens/Picture1';
import Picture2 from '../Screens/Picture2';
import Picture3 from '../Screens/Picture3';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    Picture1: { screen: Picture1 },
    Picture2: { screen: Picture2 },
    Picture3: { screen: Picture3 }
});

const App = createAppContainer(AppNavigator);

export default App;
