import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen.js';
import MainScreen from './screens/MainScreen.js';
import LectureScreen from './screens/LectureScreen.js';
import SettingScreen from './screens/SettingScreen.js';
import Animated, { Easing } from 'react-native-reanimated';

const MainNavigator = createStackNavigator({
    Auth: {screen: AuthScreen },
    Main: {screen: MainScreen },
    Lecture : {screen: LectureScreen},
    Setting : {screen:SettingScreen},
},{
    initialRouteName : 'Auth',
    headerMode : 'none',
})

const App = createAppContainer(MainNavigator);
export default App;