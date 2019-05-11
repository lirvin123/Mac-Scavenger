# Mac Scavenger

A scavenger hunt app geared toward students at Macalester College. The app is built using React Native and Expo.

A photo-based scavenger hunt app for people at Macalester College!

This app is cross-platform, written in JavaScript and React-Native, and powered by Expo.

## Running the project:

This project uses node, so make sure you have that installed first!

1. Clone the git repo
2. Download Expo CLI (`npm install expo-cli --global` in terminal/command line)
      1. At this point it may make you get an account, but if it doesn't
          you should make one anyway and make sure that you are logged in
3. Download Expo Client on your phone, or get a iOS or android device simulator
      1. You should also log into your account on your phone
4. In the terminal, navigate to the folder where the project exists
5. Install (`npm install`) the following libraries:
      * native-base
      * react-native elements
      * react-native-responsive-screen
      * react-native-responsive-fontsize
      * react-native-looped-carousel
      * react-native-image-progress
      * react-progress
6. Run `expo start --tunnel` (or `expo start`, or `npm start` and choose tunnel)
7. Open the phone app, navigate to projects and click the project under Recently in Development
      1. Alternatively, you could select either run on iOS simulator or run on android simulator, if you have a simulator open on your machine
      2. You could also scan the QR code with your phone, assuming you have expo downloaded on your phone
8. You can open the code itself in any text editor, expo should reload upon the saving of any of the documents
9. When you are ready to build to a phone:
      * [Follow these instructions](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/#3-start-the-build)
      * Note: To do an iOS build with Expo, you must have a paid Apple developer account

## Known Bugs
      * When the user gets a riddle correct and clicks “Next Round”, they can see the riddle change during the transition animation
      * When the user gets a riddle correct, they can still click or swipe back to the round screen, and then if they go back to the riddle screen their correct answer will have been deleted (and they would need to resubmit the answer)
      * The app does not save the state upon exiting the game (i.e. if the app is killed during a game, the state of that game will not be saved or reloaded upon re-entering the app)
      * On an iPad or Tablet, the image of the college building at the bottom of the home screen is slightly cut off at the top
      * Because a monospace font is not used for the riddle screen, sometimes a long answer can run slightly off of the text input box (although there is a character limit)
      * When the user submits a correct answer on the riddle screen, the answer moves slightly left (due to the check-mark icon)
      * For android phones, there is no backup icon that will look correct if the phone does not support Android Adaptive Icons (i.e. there will be a white box or circle surrounding the icon)
      * This rarely happens, but occasionally images will just not load. We have a progress bar if an image is in the process of loading, but occasionally an image will just show up as blank. We believe this has something to do with how Cloudinary is storing our images, and for the most part it doesn’t happen, but definitely something to note!

## Code Sources
      * [Binding Function](https://stackoverflow.com/questions/43039719/undefined-is-not-a-object-in-this-state-reactnative)
      * [componentDidMount code](https://stackoverflow.com/questions/45837208/react-navigation-re-render-previous-page-when-going-back)
      * [Back Button](https://stackoverflow.com/questions/42831685/disable-back-button-in-react-navigation)
      * [Fixing Modal Swipe Gestures](https://stackoverflow.com/questions/49284669/how-do-you-disable-swipe-down-to-close-on-the-modal-component-in-react-native)
