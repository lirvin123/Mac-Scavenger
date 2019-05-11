# Malibary

A photo-based scavenger hunt app for people at Macalester College!

This app is cross-platform, written in JavaScript and React-Native, and powered by Expo. 

## Running the project:

This project uses node, so make sure you have that installed first!

1. Clone the git repo
2. Download Expo CLI `npm install expo-cli --global` in terminal/command line
      1. At this point it may make you get an account, but if it doesn't
          you should make one anyway and make sure that you are logged in
3. Download Expo Client on your phone, or get a iOS or android device
      simulator
      1. You should also log into your account on your phone
4. In the terminal, navigate to the folder where the project exists
5. install (`npm install`) the following libraries:
      * react-navigation
      * native-base
      * react-native elements
      * react-native-responsive-screen
      * react-native-responsive-fontsize
      * react-native-looped-carousel
      * react-native-progress
      * react-native-image-progress
6. Run `expo start` (or try `expo start --tunnel` if your network doesn't support using LAN)
7. Open the phone app, navigate to projects in the Expo App and click the project under Recently in Development
      1. Alternatively, you could select either run on iOS simulator or run on android simulator in Expo Client, if you have a simulator open on your machine
      2. You could also scan the QR code with your phone, assuming you have expo downloaded on your phone
8. You can open the code itself in any text editor, expo should reload upon the saving of any of the documents

## ios/Android Build:

Refer to: https://docs.expo.io/versions/latest/distribution/building-standalone-apps/ for information on doing a build.
*Note: To do an ios build with Expo, you must have a paid Apple developer account*
