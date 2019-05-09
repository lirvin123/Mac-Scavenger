import React from 'react'
import { StyleSheet } from 'react-native'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
  baseView: {
    flex: 1,
    backgroundColor: '#B5E1E2'
  },
  bottomImage:{
    bottom: '0%',
    height: hp('35%'),
    position: 'absolute',
    width: wp('100%')
  },
  bottomImageView: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: RF(4.25),
    color: '#fff',
    textAlign: 'center'
  },
  doneButton: {
    alignSelf: 'center',
    height: hp('8%'),
    marginVertical: hp('1%'),
    width: wp('90%')
  },
  doneScreen: {
    flex: 2,
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-evenly'
  },
  endTime: {
    alignSelf: 'center',
    fontSize: hp('9%'),
    textAlign: 'center'
  },
  foundIt: {
    height: hp('8%'),
    alignSelf: 'center',
    width: wp('90%')
  },
  goodJob: {
    fontSize: hp('4.25%'),
    textAlign: 'center'
  },
  guess: {
    alignSelf: 'center',
    height: hp('8%'),
    paddingHorizontal: hp('3.5%'),
    width: wp('90%')
  },
  huntButton: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    margin: wp('5%'),
    width: wp('90%')
  },
  huntDescription: {
    fontSize: hp('2.75%'),
    marginHorizontal: wp('5%'),
    marginVertical: hp('1%'),
    textAlign: 'center'
  },
  huntScreen: {
    flex: 2,
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-around',
    marginBottom: hp('8%'),
  },
  iconStyle : {
    marginLeft: 20,
    marginRight: 10
  },
  iconPadding: {
    paddingHorizontal: 5
  },
  instructions: {
    flex: 1,
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-evenly',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-evenly'
  },
  message: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    position: 'absolute',
    textAlign: 'center',
    top: '50%'
  },
  penalty: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    position: 'absolute',
    textAlign: 'center',
    top: '60%'
  },
  photo: {
    height: hp('65%'),
    alignSelf: 'center',
    width: wp('90%')
  },
  riddle: {
    alignSelf: 'center',
    fontSize: RF(4.25),
    maxHeight: hp('20%'),
    paddingHorizontal: hp('3%'),
    textAlign: 'center'
  },
  riddleScreen: {
    flex: .58,
    alignItems: 'center',
    backgroundColor: '#B5E1E2',
    justifyContent: 'space-evenly',
    paddingHorizontal: wp('5%')
  },
  rules: {
    fontSize: hp('3.75%'),
    fontWeight: 'normal',
    textAlign: 'left'
  },
  rulesBold: {
    fontSize: hp('3.75%'),
    fontWeight: 'bold',
    textAlign: "left"
  },
  ruleView: {
    backgroundColor: "#B5E1E2",
    paddingBottom: hp('1%')
  },
  startButton: {
    flex: 1,
    alignSelf: 'center',
    maxHeight: hp('8%'),
    marginBottom: wp('5%'),
    marginTop: wp('2%'),
    minHeight: hp('8%'),
    width: wp('90%')
  },
  startTime: {
    fontSize: hp('2.75%'),
    marginBottom: hp('3%'),
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
    textAlign: "center"
  },
  textInput: {
    flex: 1,
    alignSelf: 'flex-start',
    fontSize: RF(4.25),
    textAlign: 'center',
  },
  times:{
    fontWeight: 'bold',
    marginVertical: hp('0.5%'),
    textAlign: 'center'
  },
  title: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
    marginVertical: hp('2%'),
    textAlign: 'center'
  },
   unlockButton: {
     flex: 1,
     alignSelf: 'center',
     bottom: '60%',
     justifyContent: 'center',
     paddingHorizontal: hp('3%'),
     paddingVertical: hp('5%'),
     position: 'absolute'
   }
})
