import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import LectureScreen from './screens/LectureScreen';
import SettingScreen from './screens/SettingScreen';
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