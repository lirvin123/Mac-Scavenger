import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  button: {
    padding: 20,
    alignSelf: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#66ccff',
    alignItems: 'center',
    justifyContent: 'space-around',
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
  },
  hunt: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  penalty: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    position: 'absolute',
    top: 200
  },
  riddle: {
    textAlign: 'center',
    fontSize: 40
  },
  textInput: {
    textAlign: 'center',
    fontSize: 30
  },
   unlockButton: {
     padding: 30,
     position: 'absolute',
     top: 100,
     left: 90   //not sure if this is a permanent solution
   },
   huntButton: {
     textAlign: 'center',
     fontSize: 30,
     flex: 6,
     margin: 10
   },
   starTimer: {
     textAlign: 'center',
     fontSize: 20
   },
   instructions: {
     flex: 1,
     backgroundColor: '#66ff66',
     justifyContent: 'space-around',
   }
})
