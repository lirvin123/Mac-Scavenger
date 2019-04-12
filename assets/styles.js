import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
   button: {
     backgroundColor: 'red',
     padding: 20
   },
   unlockButton: {
     backgroundColor: 'magenta',
     padding: 20,
     position: 'absolute',
     top: 100               //not sure if this is a permanent solution
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
  unlock: {
    backgroundColor: 'blue',
    padding: 20
  }

})
