# 🏗️ Toms Boilerplate

이 프로젝트는 자주 사용하는 Next.js 기술 스택으로 폴더 구조를 잡아놓은 보일러플레이트입니다.

## 기술 스택

- Next.js
- TypeScript
- TanStack Query
- ESLint
- Prettier
- yarn berry@4.5.0

## 📁 폴더 구조

이 프로젝트는 Next.js의 일반적인 구조를 따르며, 추가적인 폴더들로 구성되어 있습니다:

```
.
├── .next
├── public
├── src
│   ├── app
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── models
│   ├── serverActions
│   ├── services
│   ├── styles
│   ├── types
│   └── utils
├── package.json
├── tsconfig.json
└── README.md
```

### 🗂️ 주요 폴더 설명

- `src/`: 프로젝트의 소스 코드가 위치한 메인 폴더입니다.

  - `app/`: 🖥️ Next.js의 App Router에 관련된 파일들이 위치합니다.
  - `components/`: 🧩 재사용 가능한 React 컴포넌트들이 위치합니다.
  - `constants/`: 🔒 프로젝트 전반에 걸쳐 사용되는 상수들이 정의됩니다.
  - `hooks/`: 🎣 커스텀 React 훅들이 위치합니다.
  - `models/`: 📊 데이터 모델 인터페이스가 위치합니다.
  - `serverActions/`: 🔄 Next.js의 서버 액션 관련 로직이 위치합니다.
  - `services/`: 🌐 API 호출이나 외부 서비스와의 통신을 담당하는 로직이 위치합니다.
  - `styles/`: 🎨 전역 스타일이나 스타일 관련 유틸리티가 위치합니다.
  - `types/`: 📝 외부 라이브러리 타입 정의 파일들이 위치합니다.
  - `utils/`: 🛠️ 유틸리티 함수들이 위치합니다.

- `public/`: 📁 정적 파일들(이미지, 폰트 등)이 위치합니다.

이 구조는 코드의 모듈화와 유지보수성을 높이는 데 도움이 됩니다. 각 폴더는 특정 책임을 가지고 있어, 프로젝트가 커져도 관리하기 쉽게 만들어줍니다.

## 🚀 시작하기

1. 저장소를 클론합니다:
   ```
   git clone https://github.com/tomdevkr93/toms-boilerplate.git
   ```
2. 의존성을 설치합니다:
   ```
   yarn install
   ```
3. 개발 서버를 실행합니다:
   ```
   yarn dev
   ```
4. 브라우저에서 `http://localhost:3000`을 열어 결과를 확인합니다.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조해 주세요.
