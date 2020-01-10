react native hook app 종료하는 방법

~~~
import {BackHandler} from 'react-native'; // BackHandler 추가하기

  /**
  * handlerBack 버튼 구현
  */
  handleBackButton = () => {
        if (!navigation.isFocused()) { 
            // The screen is not focused, so don't do anything
            return false;
        }
        Alert.alert(
            'JBNUHub', // alert title
            '종료하시겠습니까?', [{ // text , button : true, false
                text: '아니요',
                onPress: () => console.log('어플 종료'),
                style: 'cancel'
            }, {
                text: '네',
                onPress: () => BackHandler.exitApp() // app 종료
            }, ], {
                cancelable: false
            }
        )
        return true;
    } 
    useEffect(()=>{
        // backHandler를 사용하여 설정
        BackHandler.addEventListener('hardwareBackPress',handleBackButton.bind(this));
        return ()=>{
            // 종료하고 나서 해당 이벤트 제거할 것!
            BackHandler.removeEventListener('hardwareBackPress',handleBackButton.bind(this));
        }
    });
~~~