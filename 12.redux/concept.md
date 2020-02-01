## Redux의 개념
-----------

#### 1. 액션(Action)

상태에 어떠한 변화가 필요하게 될 때, 액션을 발생시키게 된다.

하나의 객체로 표현되는데 다음과 같은 형식으로 이루어져 있다.
~~~
{
    type : "VALUE"
}
~~~

액션 객체는 type 필드를 필수적으로 가지고 있어야 하고 그외의 값은 개발자 마음대로 넣을 수 있다.

ex)
~~~
{
  type: "ADD_TODO",
  data: {
    id: 0,
    text: "리덕스 배우기"
  }
}
~~~

#### 2. 액션 생성함수(Action Creator)

액션을 만드는 함수이며, 단순히 파라미터를 받아와서 액션객체 형태로 만들어 준다.

~~~
function addTodo(data) {
  return {
    type: "ADD_TODO",
    data
  };
}

// 화살표 함수로도 만들 수 있습니다.
const changeInput = text => ({ 
  type: "CHANGE_INPUT",
  text
});
~~~

#### 3. 리듀서(reducer)

리듀서는 변화를 일으키는 함수이며 2가지 파라미터를 받아온다.

~~~
function reducer(state, action) {
  // 상태 업데이트 로직
  return alteredState;
}
~~~

리듀서는, 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환한다.

#### 4. 스토어(Store)

redux에서는 1 어플리케이션당 하나의 스토어를 만들 수 있다. 스토어 안에는 앱 상태와 리튜서 그리고 몇가지 내장함수들이 있다.

#### 5. 디스패치(dispatch)

디스패치는 스토어의 내장함수 중 하나이다. 

액션을 발생시키는것이라고 이해하는 게 좋음.
dispatch 함수는 액션을 파라미터로 전달한다. dispatch(action) 

#### 6. 구독(subscribe)

구독 또한 스토어의 내장함수 중 하나이다. subscribe 함수는, 함수 형태의 값을 파라미터로 받아온다. 

subscribe 함수에 특정 함수를 전달해주면, 액션이 dispatch 될 때 마다 전달해준 함수가 호출됨.