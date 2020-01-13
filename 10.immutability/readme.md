javascript immutability 알아보기

#### 1. immutable value vs. mutable value

javascript 의 primitive data type(원시 타입)은 immutable value이다.

    - boolean
    - null
    - undefined
    - Number
    - String
    - Symbol (ES6 부터)

이외의 모든 타입 object는 변경 가능한 (mutable type) 이다.

~~~
var str = 'hello'
str = 'world'
~~~

str 메모리에 hello가 삽입되고 포인터로 hello를 가리킴

두번째 world가 실행되면 새로운 문자열 'world'를 생성하고 str이 가리키게 된다.
이때, 'hello' 와 'world' 모두 메모리상에 그대로 존재하게 됨

str -> hello 
  \ -> world를 가리킴

~~~
var statement = 'immutable value';
var other = statement.slice(11,15);

console.log(statement) // immutable value;
console.log(other) // value
~~~

slice는 statement에서 저장된 문자열을 변경하는게 아니라 새로운 문자열을 생성해 내고 있다. (문자열은 immutable 변수)

~~~
var arr = [];
console.log(arr.length) // 0
var v2 = arr.push(2);
console.log(arr.length) // 1
console.log(v2) //1
var v3 = arr.push(3);
console.log(v3) // 2
~~~

arr은 push method에 의해 update가 되고 v2에는 length가 저장
array는 slice와는 달리 push 하면 직접 대상을 변경 하기 때문 
=> array는 mutable type이여서 변경가능함.

~~~
var user = {
  name: 'Lee',
  address: {
    city: 'jeonju'
  }
};
--> 
    var myName = user.name; // 변수 myName은 string 타입이다.

    user.name = 'Kim';
    console.log(myName); // Lee
<--

myName = user.name;  // 재할당
console.log(myName); // Kim
~~~

user.name을 변경했지만 myName의 값은 변경을 하지 X, myName에 user.name을 할당했을 때, user.name을 참조할당한 것이 아니라 immutable한 문자열 'LEE' 가 메모리에 생성이 되고 myName은 이를 참조.

~~~
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim
~~~

user2 에 user1을 참조 시키면 object이기 때문에 같은 메모리 주소를 참조하고 있다. 따라서 메모리를 공유하기에 user2의 name을 바꾸면 user1의 name도 바뀐다.

#### 2. 불변 데이터 패턴 (immutable data pattern)

의도 하지 않은 객체의 변경이 발생하는 대다수 원인은 "참조한 객체에서 객체를 변경하기" 때문이다. 
객체를 불변객체로 만들어 프로퍼티의 변경을 방지하며 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사(defensive copy)를 통해 새로운 객체를 생성한 후 변경한다.

- 객체의 방어적 복사(defensive copy)
    Object.assign
- 불변객체화를 통한 객체 변경 방지
    Object.freeze


##### 2.1 object.assgin
// Syntax
Object.assign(target, ...sources)
~~~

// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
~~~

assign을 사용하여 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있다.
Object.assign은 완전한 deep copy를 지원하지 않음.
객체 내부 객체는 shallow copy가 된다.

~~~
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
~~~

user1 객체의 내부 객체는 shallow copy로 인해 같은 참조 값을 갖는다.

##### 2.1 object.freeze

freeze를 이용하면 immutable 하게 만들 수 있다.
하지만 객체 내부의 객체(Nested Object)는 변경가능하다.

~~~
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true
~~~


#### Deep Freeze
~~~
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

deepFreeze(user);

user.name = 'Kim';           // 무시된다
user.address.city = 'Busan'; // 무시된다

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }
~~~

#### Immutable.js

[사이트 바로가기](https://immutable-js.github.io/immutable-js/)

Object.assign과 Object.freeze을 사용하여 불변 객체를 만드는 방법은 번거러울 뿐더러 성능상 이슈가 있어서 큰 객체에는 사용하지 않는 것이 좋다.

또 다른 대안으로 Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.

Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 (Permit Immutable) 데이터 구조를 제공한다.

npm을 사용하여 Immutable.js를 설치한다.


참고 사이트 : https://poiemaweb.com/js-immutability