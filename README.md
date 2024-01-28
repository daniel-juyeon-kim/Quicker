# Quicker <!-- omit in toc -->

블록체인 기반 퀵, 배달 중개 플랫폼

Quicker는 스마트컨트랙(Smart contract)으로 의뢰인과 배송원 사이의 계약을 자동화 하여 금융기관의 매개없이 결제와 배송이 이뤄지고 투표를 통해 권력을 분산한 Web3 플랫폼입니다.

## 관련 기술

- **Front:** React, TypeScript, Kotlin(Android), Zustand, TMapAPI
- **Back:** Node.js, TypeScript, Express.js, Sequlize, Mongoose, SlackAPI, Naver SMS API
- **Blockchain:** Solidity, Klaytn
- **DB:** MariaDB, MongoDB
- **Compute:** AWS EC2, GCP Compute Engine, CloudType
- **Network:** Cloudflare
- **Tool:** Git, Slack, Figma, ERDCloud

## 담당

- 배영준: 프론트
- 이수현: 백(블록체인), 프론트(Sub)
- 김주연: 백(Main), 프론트(Sub)

## 시스템 구조

### 거래 프로세스<!-- omit in toc -->

![Alt text](https://github.com/dltndn/Quicker_web_part/assets/70008866/ba37075e-ff43-4919-a7c8-26c3f892935f)

### 시스템 아키텍처<!-- omit in toc -->

![Alt text](docs/images/system-structure.svg)

### 스마트컨트랙<!-- omit in toc -->

![Alt text](https://github.com/dltndn/Quicker_web_part/assets/70008866/4d58b4e5-445f-4dac-a82e-e0f5e9486a96)

### 데이터베이스 ERD<!-- omit in toc -->

![Alt text](<docs/images/데이터베이스 구조.png>)

## 시연

### 시연 영상 링크<!-- omit in toc -->

- [유튜브](https://www.youtube.com/@Quicker-Youtube/featured)

### 로그인<!-- omit in toc -->

![Alt text](docs/gifs/%EC%95%B1%EC%9C%BC%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif)

### 의뢰 생성<!-- omit in toc -->

![Alt text](docs/gifs/%EC%9D%98%EB%A2%B0-%EC%83%9D%EC%84%B1.gif)

### 의뢰 수락<!-- omit in toc -->

![Alt text](docs/gifs/%EC%9D%98%EB%A2%B0-%EC%88%98%EB%9D%BD.gif)

#### 수취인에게 메세지 발송<!-- omit in toc -->

![Alt text](docs/gifs/%EB%A9%94%EC%84%B8%EC%A7%80-%EC%A0%84%EC%86%A1.gif)

### 의뢰인과 배송원 사이 채팅<!-- omit in toc -->

![Alt text](docs/gifs/%EC%B1%84%ED%8C%85.gif)

### 배송원 실시간 위치 추적<!-- omit in toc -->

![Alt text](docs/gifs/%EB%B0%B0%EC%86%A1%EC%9B%90-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81.gif)

### 배송 완료<!-- omit in toc -->

- QR코드, [사진 전송](https://youtu.be/RDm0j8RfQWQ?feature=shared&t=480)을 통한 배송완료가 가능

![Alt text](docs/gifs/%EB%8C%80%EB%A9%B4-%EC%A0%84%EB%8B%AC.gif)

### 정산<!-- omit in toc -->

![Alt text](docs/gifs/%EC%A0%95%EC%82%B0-%EA%B3%BC%EC%A0%95.gif)

### 서버 장애 알림 봇<!-- omit in toc -->

![slcak 에러 로그 이미지](docs/images/error-log.png)

## 추가 기능 및 변경 사항(v2) <!-- omit in toc -->

- 블록체인 네트워크 변경(Polygon -> Klaytn)
- 암호화폐 지갑 연결 방식 변경
- 블록체인 가스비 대납
- 배송컨트랙 프록시 구조 적용
- 토큰 스테이킹
- 거래 수수료 투표
- 프로필 NFT 적용

## 보완 사항 <!-- omit in toc -->

- 배포 자동화
