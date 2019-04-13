import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  home_Hunt: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
   button: {
     padding: 20,
     alignSelf: 'center',
     margin: 10
   },
   unlockButton: {
     padding: 30,
     position: 'absolute',
     top: 100,
     left: 90   //not sure if this is a permanent solution
   },
   buttonText: {
     color: '#fff',
     textAlign: 'center',
     fontSize: 30
   },
   title: {
     textAlign: 'center',
     fontSize: 50
   },
   riddle: {
     textAlign: 'center',
     fontSize: 35
   },
   round: {
     textAlign: 'center',
     fontSize: 35
   },
  penalty: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    position: 'absolute',
    top: 200
  },
  done: {
    textAlign: 'center',
    fontSize: 50
  },
  endTime: {
    textAlign: 'center',
    fontSize: 20
  },
  giveUp: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
