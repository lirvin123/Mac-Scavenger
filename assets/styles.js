import React from 'react'
import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#B5E1E2'
  },
  button: {
    padding: 20,
    alignSelf: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp('5%'),
    alignSelf: 'center'
  },
  done: {
    textAlign: 'center',
    fontSize: 50
  },
  endTime: {
    textAlign: 'center',
    fontSize: 20
  },
  foundIt: {
    width: wp('90%'),
    height: hp('8%'),
    alignSelf: 'center',
    marginTop: hp('5%')
  },
  giveUp: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  hunt: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  huntButton: {
    flex: 1,
    margin: wp('5%'),
    width: wp('90%'),
    alignSelf: 'center'
  },
  huntDescription: {
    fontSize: hp('2.75%'),
    textAlign: 'center',
    marginVertical: hp('1%'),
    marginHorizontal: wp('5%')
  },
  huntScreen: {
    flex: 2,
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-around',
    marginBottom: hp('8%'),
  },
  instructions: {
    flex: 1,
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-evenly',
  },
  main: {
    flex: 1,
    backgroundColor: '#B5E1E2',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  message: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%'
  },
  penalty: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    position: 'absolute',
    top: "60%"
  },
  photo: {
    width: wp('90%'),
    height: hp('60%')
  },
  riddle: {
    textAlign: 'center',
    fontSize: 40
  },
  riddleScreen: {
    flex: 1,
    backgroundColor: '#B5E1E2',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rules: {
    textAlign: 'left',
    fontSize: hp('3.75%'),
    fontWeight: 'normal'
  },
  rulesBold: {
    fontSize: hp('3.75%'),
    textAlign: "left",
    fontWeight: 'bold'
  },
  startButton: {
    flex: 1,
    maxHeight: hp('8%'),
    minHeight: hp('8%'),
    marginBottom: wp('5%'),
    marginTop: wp('2%'),
    width: wp('90%'),
    alignSelf: 'center'
  },
  startTime: {
    fontSize: hp('2.75%'),
    textAlign: "center",
    marginTop: hp('2.5%'),
    marginBottom: hp('2%'),
    marginHorizontal: wp('5%')
  },
  textInput: {
    textAlign: 'center',
    fontSize: 30
  },
  timer: {
    fontSize: hp('4%'),
    fontWeight: '200'
  },
  title: {
    fontSize: hp('5%'),
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: hp('2%')
  },
   unlockButton: {
     padding: 30,
     justifyContent: 'center',
     alignItems: 'center',
     position: 'absolute',
     alignSelf: 'center',
     bottom: '60%'
   }
})
