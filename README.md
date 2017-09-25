# Software based DGPS Implementation Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

GPS - NMEA Sentence Information: [GPS - NMEA](http://aprs.gids.nl/nmea/)

### Interpreted Message in this project
* GPGGA
* GPRMC
* GPGSA
* GPGSV

### 고려 사항
* 총 GPXXX sentence: 58
* The number of Interpreted sentences: 19
* 현 단계 인터넷 검색 결과로는 위 4개 메시지로 충분하다고 하나, 확신할 수 없음

### 다음 단계
* 추가로 필요한 메시지가 있을 경우, 포맷 및 메시지 의미 이해 추진
* NTRIP 메시지 포맷 분석 및 simulation program 제작
* RTK Alogorithm 분석
* GPS Sentence, NTRIP Message에 RTK Algorithm 적용

### 이슈
* 스마트폰 단말 단에서 JavaScript Service Worker 구현 가능한지 확인
  * 구현 가능하다면 Native Program으로 implementation할 필요 없음
* NTRIP 메시지 분석 및 RTK Algorithm 분석작업은 조팀장과 협의해서 처리

### Program 구동 방법
* gps-simulation program on heroku: [gps-simulation](https://gps-simulation.herokuapp.com/) 
* 원하는 갯수 만큼의 GPS sentence 숫자를 input box에 입력한 후 Start GPS 버튼 클릭
* 중간에 Pause, Restart 가능함
* 상단 메뉴바에 DGPS는 클릭 가능하나 아직 미구현
* 메뉴에 NTRIP 메시지도 추가할 예정
* 프로그램 화면은 Responsive하므로 Mobile에서 보는데도 무리가 없음
  * 큰 화면에서는 2 x 2, 작은 화면에서는 4 x 1로 표시

### 9.25 진행 경과
* 국립해양측위정보원에 문의 결과 Ntrip 정보를 받는 방법은 Ntrip Client를 이용하거나, 동 기관에서 제공하는 스마트폰 기반 서비스를 이용하는 방법밖에 없음
* 즉, 프로그램적으로 관련 정보에 접근하는 방법이 현재 없음. Open API 형태로 Key를 제공하는 방법은 현재 개발 중에 있다고 하는데 우리가 필요한 것은 Open API 형태.
* 국토지리정보원도 자체 개발 [Ntrip Client](http://www.gnssdata.or.kr/rtcm/getRtcmView.do) 배포 중
* 국토지리정보원의 경우도 Ntrip Client를 통해서만 자료 수신 가능한 상태고 Open API 형태로 제공할 구체적인 계획은 없는 상태
* 현재 Ntrip Client는 윈도우즈용 밖에 없는 상태로 우회해서 데이터를 획득하는 방법을 강구해야 함
