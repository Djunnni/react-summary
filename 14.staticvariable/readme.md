# API URL 정적 변수로 변환
* 작성자 : 이동준
* 작성일 : 2020.01.30

## 1. 작업

    1. API URL 정적 변수로 변환
    
    --- 서버점검으로 인한 내부 개발은 잠시 멈춤 ---

## 2. 문제상황과 해결방법
--------

#### 1. API 요청 URL을 대부분의 Screen에서 매번 선언하는 문제가 발생했다.

BEFORE
~~~
// 각각의 Screen 마다 위에 다음과 같이 선언한 문제가 있었음.
// 하나를 수정하려고 하면 여러번 바꿔야 하는 문제가 있음.
const ApiUrl = 'https://khub.jbnu.ac.kr/****';
~~~

AFTER  
~~~
import { API_URL } from '../staticVariable';
~~~

staticVariable.js
~~~
'use strict';
export const API_URL = 'https://khub.jbnu.ac.kr/****';
~~~

=> 개선사항의 장점 

1.앞으로 URL이 변경되면 staticVariable에서만 수정하면 된다.

=> 의문점 

어떤 경우에는 위와같이 global 하게 사용하려고 하지만 "stackoverflow" 에서는 

redux를 이용해서 처리하라는 경우도 많았음.

## 3. 향후 진행 방향

1. redux에 대한 필요성
