# App Store Distribution
* 작성자 : 이동준
* 작성일 : 2020.02.06

## 1. 작업
-------------- 
1. xcode 빌드 및 애플 앱 스토어에 어플 등록 


## 2. 진행 과정
--------

처음에 개발자 등록이후 개발 Device을 등록할 것(인증서 발급 받아야됨)

#### 1) 기존 앱 버전 업데이트

JBNUHub 수정작업 이후 xcode를 통해서 빌드작업을 진행.

(기존에 나와있는데로 고쳤지만 수정이 되지 않아 직접 xcode에서 수정하고 빌드함.)

빌드할 때, Signing & Capabilities에서 Signing > Team 추가할 것
(안하면 진행 안됨)


...

앱 Test 할 것

...

AppStore에 올릴때 상단 바에서 Product > Archive 실행 

이후 Distribution 진행을 하면 AppStore Connect 사이트에서 "나의 앱"에서 올라왔는지 확인

해당하는 앱 아래에 "버전 추가"를 해서 빌드 불러오기를 하면 됨

이후 앱 테스트 진행이후 자동 배포 됨.
