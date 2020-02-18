# Roll Call Recall

## Brief

At the beginning of each new semester or school year, teachers are faced with the challenge of remembering names for a large number of new students. Design an experience to help an educator match faces to names, with the goal of shortening the time needed to reach complete un-aided accuracy.

### How to run

_Requirements_: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native)

  - `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
  - `$ cd react-native-web-monorepo`
  - `$ yarn`
  - `$ cd packages/mobile/ios`
  - `$ pod install`
  - `$ cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `yarn xcode` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn studio` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`

## Provided Examples

1. [Google Cue](http://joelcalifa.com/work/google/)
2. [Faces](http://nenadmilosevic.co/faces-app/)
3. [Pupils](https://volkan.design/pupils.html?mc_cid=6614e8d97f&mc_eid=b9c35cdfa7)

## Implementation

Student face & name flashcard cross-platform application that a teacher can use to train their recognition of current students. 

## Technology

React Native

Project with monorepo project from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).
