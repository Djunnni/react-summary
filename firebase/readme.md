### React native firebase 이용방법

* ios

1. npm install --save react-native-firebase

2. react-native link react-native-firebase

3. ios 폴더 들어가기

4. AppDelegate.h 에 추가
~~~
#import <Firebase.h>
~~~

5. AppDelete.m 에 추가
~~~
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRAPP configure];
~~~

6. Podfile 에 추가하기
~~~
  pod 'Firebase/Core'
  pod 'RNFirebase', :path => '../node_modules/react-native-firebase/ios'
  pod 'Firebase/Auth'
~~~
* RNFirebase 경로 잘보기 => 기존에 ios 는 빠져서 pod install 진행이 어려웠음.

##### 사용 예시
~~~
import firebase from 'react-native-firebase';
import React , {useState,useEffect} from 'react-native';

// firebase 회원가입 예시 코드 
export default SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [passwd,setPasswd] = useState('');

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,passwd)
        .then(()=> {
            navigation.navigate('Main')
        }).catch(error => console.log(error));
    }
}

~~~

