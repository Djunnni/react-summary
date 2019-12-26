### React Native 1번

* props 와 state에 대해 알아보기

현재 예제는 props에 대해 알아본다. 

App.js에서 TestComponent를 이용해서 카운트를 더해보는 일을 한다.

state , props 가 변경되면 render 가 발생한다.

#### 참고 

~~~
 _updateCount(idx){
    const newDatas = [...this.state.datas];
    newDatas[idx].count = newDatas[idx].count+1;

    this.setState({datas:newDatas});
  }
~~~
datas의 정보들을 newDatas에 deep copy를 함
