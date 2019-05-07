import React from 'react'
import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import RF from "react-native-responsive-fontsize"

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
    fontSize: RF(4.25),
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
  },
  giveUp: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  guess: {
    width: wp('90%'),
    height: hp('8%'),
    alignSelf: 'center',
    paddingHorizontal: hp('3.5%')
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
    alignSelf: 'center',
    justifyContent: 'flex-start'
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
    justifyContent: 'space-evenly',
  },
  message: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: '50%'
  },
  penalty: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    position: 'absolute',
    top: "60%",
    alignSelf: 'center'
  },
  photo: {
    width: wp('90%'),
    height: hp('65%'),
    alignSelf: 'center'
  },
  riddle: {
    textAlign: 'center',
    fontSize: RF(4.25),
    alignSelf: 'center',
    maxHeight: hp('20%'),
    paddingHorizontal: hp('3%')
  },
  riddleScreen: {
    flex: .58,
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp('5%')
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
  ruleView: {
    backgroundColor: "#B5E1E2",
    paddingBottom: hp('1%')
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
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
    marginHorizontal: wp('5%')
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: RF(4.25),
    alignSelf: 'flex-start'
  },
  times:{
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp('0.5%')
  },
  huntTimes: {
    fontSize: hp('5%'),
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: hp('1%')
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
