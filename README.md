## Quicker

블록체인 기반 퀵, 배달 중개 플랫폼

Quicker는 스마트컨트랙(Smart contract)으로 의뢰인과 배송원 사이의 계약을 자동화 하여 금융기관의 매개없이 결제와 배송이 이뤄지고 투표를 통해 권력을 분산한 Web3 플랫폼입니다.

### 사용 기술

**Front:** React, TypeScript, Zustand, TMapAPI, Kotlin(Android)\
**Back:** Node.js, TypeScript, Express.js, Sequelize, Mongoose, SlackAPI, Naver SMS API\
**Blockchain:** Solidity, Klaytn\
**DB:** MariaDB, MongoDB\
**Compute:** AWS EC2, GCP Compute Engine, CloudType\
**Network:** Cloudflare\
**Tool:** Git, Slack, Figma, ERDCloud

### 역할

- **배영준:** 프론트
- **이수현:** 블록체인, 프론트
- **김주연:** [백엔드](docs/backend/보고서.md), 프론트

### 시스템 구조

#### 시스템 아키텍처

![Alt text](docs/images/system-structure.svg)

#### 데이터베이스 ERD

![Alt text](<docs/images/데이터베이스 구조.png>)

#### 거래 프로세스

![Alt text](https://github.com/dltndn/Quicker_web_part/assets/70008866/ba37075e-ff43-4919-a7c8-26c3f892935f)

#### 스마트컨트랙

![Alt text](https://github.com/dltndn/Quicker_web_part/assets/70008866/4d58b4e5-445f-4dac-a82e-e0f5e9486a96)

#### 주요 기능

- 암호화폐 지갑 연결방식의 로그인 시스템
- 스마트 컨트랙을 활용한 탈중앙화 자동 결제 기능 구현
- 전체 실시간 거래 현황을 보여준는 Explorer페이지 제공
- 중앙DB에서 관리되는 사용자들의 개인정보
- 배송원 실시간 위치 제공
- 의뢰 수락 및 배달 완료 시 앱 알림기능
- 배송 완료 후 의뢰인, 수취인에게 완료 사진 전송
- 배송물품 대면 전달 시 QR코드 인증
- 의뢰인과 배송원 사이 채팅 기능

## 추가 기능 및 변경 사항(v2)

- 블록체인 네트워크 변경(Polygon -> Klaytn)
- 암호화폐 지갑 연결 방식 변경
- 블록체인 가스비 대납
- 배송컨트랙 프록시 구조 적용
- 토큰 스테이킹
- 거래 수수료 투표
- 프로필 NFT 적용
