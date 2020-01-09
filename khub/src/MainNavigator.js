import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import LectureScreen from './screens/LectureScreen';
import SettingScreen from './screens/setting/SettingScreen';

import GroupSearchScreen from './screens/group/GroupSearchScreen';
import GroupMakeScreen from './screens/group/GroupMakeScreen';

import NoteScreen from './screens/note/NoteScreen';

import MyPageScreen from './screens/my/MyPageScreen';

import NoticeScreen from './screens/notice/NoticeScreen';

import PrefFavoriteScreen from './screens/pref/PrefFavoriteScreen';
import PrefHiddenGroupScreen from './screens/pref/PrefHiddenGroupScreen';

import Animated, { Easing } from 'react-native-reanimated';

const MainNavigator = createStackNavigator({
    //Auth 로그인
    Auth: {screen: AuthScreen },
    //Home 홈
    Home: {screen: HomeScreen },
    Lecture : {screen: LectureScreen},
    Setting : {screen:SettingScreen},
    //MyPage 마이페이지
    MyPage : {screen:MyPageScreen},
    //Notice 공지
    Notice : {screen:NoticeScreen},
    //Note 쪽지
    Note : {screen:NoteScreen},
    //Group 그룹
    GroupMake : {screen:GroupMakeScreen},
    GroupSearch : {screen:GroupSearchScreen},
    //pref
    PrefFavorite : {screen:PrefFavoriteScreen},
    PrefHiddenGroup : {screen:PrefHiddenGroupScreen},
},{
    initialRouteName : 'Auth',
    headerMode : 'none',
})

const App = createAppContainer(MainNavigator);
export default App;