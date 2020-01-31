# API 비동기식 처리와 Logout시 Navigation 처리
* 작성자 : 이동준
* 작성일 : 2020.01.29

## 1. 작업

    1. UserIcon이 벗어나는 상황을 해결
    2. Screen이 API 호출 이후에 보이게 수정
    3. Logout 시 navigation의 stack 초기화

## 2. 문제상황과 해결방법
--------

#### 1. 기존에 UserIcon이 벗어나는 문제가 발생했다.
    
< img 들어가기 >

이 부분에 Icon을 가져와 Style을 상속받게 하여 문제를 해결
~~~
    const UserIcon = (props) => {
const [customStyle,setCustomStyle] = useState(props.customStyle);
const [ImageUri,setImageUri] = useState('');

useEffect(()=>{
    setImageUri(props.Image);
});

    /** return 부분에 조건문 축약을 통해서 간단하게 표현하였음.
     * Image로 부터 가져오기 때문에 기존에 Icon의 fontSize 문제에 벗어남
     *  + 화면 배열에서도 벗어난다.
     */
    return (
        ImageUri==''?  <Image style={customStyle} source={require('../img/icon/default-user.png')}/>:<Image style={customStyle} source={{uri:ImageUri}}/>
    )
}
~~~
------

#### 2. Screen이 API로 부터 데이터를 전부 가져오기 전에 화면이 로딩되는 문제가 발생했었다.

async, await에 대한 정확한 사용방법에 대해 부족했었기 때문이다. 

promise를 사용하는 방법도 있지만 ES6 이후의 문법을 통해 명확하게 보이도록 구현했다.

실행 단계는 getToken => start => setLoad 순으로 시작하게 된다.

* 개선 후 코드
~~~
    /**
     * start 함수
     * 제일 먼저 실행해야될 함수들의 모음
     * 아래에 계속 추가하면 됨.
     */
    const start = async () => {
        await getMyGroups();
        await getCheckMakeGroup();
        await getMyInfo();
    }

    /**
     *  화면이 mount 단계되자마자 getToken을 통해 API key를 가져왔다.
     */
    useEffect(()=>{
        getToken();
    },[]);

    /**
     * token 이 수정되면 start 함수를 실행하고 난 뒤에 setLoad를 true로 수정한다.
     */
    useEffect(()=>{
        if(token!=''){
           start().then(()=>{
            setLoad(true);
           }).catch(()=>{});
        }
    },[token]);
~~~

---------

#### 3. setting에서 로그아웃 수정

기존에는 navigation에 navigate를 이용해 인증화면으로 돌아가게 했었다.

하지만 이럴 경우 발생하는 문제는 사용자가 바뀌고 난 뒤에 HomeScreen에서 화면이 Render를 하지 않는 문제가 발생

 => 코드 수정도 필요하지만 그러기 보다 logout 방법에 대해 알아보다 아래와 같은 방법을 찾았다.

StackActions에서 현재 Navigation 스택을 초기화하는 작업을 하고 첫 화면으로 돌아가도록 dispatch를 실시하였다.
~~~
    import { StackActions,NavigationActions } from 'react-navigation';

    const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Auth' }),
        ],
      });

    navigation.dispatch(resetAction);
~~~
-----
## 3. 개선이 필요할 부분

1. 중복되는 API 사용이 보이고 있다. 이 부분에 대해서는 팀원들의 의견을 물어보고 진행
    
    * 그룹가져오기 등

-----
## 4. 향후 진행 방향

1. redux에 대한 필요성 => AsyncStorage를 지속적으로 사용에 문제점이 있을 것으로 예상

2. splash 화면 부분 수정 => 앱 로딩에 대한 속도부분

3. [정적 변수로 바꿀 부분을 수정](./2020-01-30.md)
