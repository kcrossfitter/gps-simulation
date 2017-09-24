# Software based DGPS Implementation Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[GPS - NMEA sentence information] (http://aprs.gids.nl/nmea/)

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
