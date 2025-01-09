# CSR,SSR

### 1. **CSR (Client-Side Rendering)**

- **동작 방식**:
    1. 브라우저는 서버에서 최소한의 HTML 파일과 JavaScript 번들을 받는다
    2. JavaScript가 실행되어 DOM을 생성하고 화면을 렌더링
    3. 데이터는 클라이언트에서 API 호출로 가져와서 화면을 업데이트
- **장점**:
    - 초기 서버 부하가 적음.
    - 사용자와 상호작용이 많은 SPA(Single Page Application)에 적합.
    - 페이지 이동 시 속도가 빠름(클라이언트 내에서 처리).
- **단점**:
    - 초기 로딩 속도가 느림(JavaScript 로드/실행 필요).
    - SEO(Search Engine Optimization)에 불리(검색 엔진이 JavaScript를 실행하지 않을 경우 콘텐츠가 노출되지 않음).
- **예시**:
React, Vue와 같은 SPA 프레임워크의 기본 설정.

---

### 2. **SSR (Server-Side Rendering)**

- **동작 방식**:
    1. 사용자가 요청을 보내면 서버에서 즉시 HTML을 생성하여 브라우저로 보냄
    2. 브라우저는 HTML을 렌더링하고 이후에 JavaScript를 로드하여 상호작용 기능을 활성화
- **장점**:
    - 초기 렌더링이 빠르고, 콘텐츠가 즉시 표시됨.
    - SEO에 유리(서버에서 완전한 HTML을 제공).
- **단점**:
    - 서버 부하 증가(요청마다 HTML을 생성).
    - 페이지 이동 시 전체 HTML을 다시 가져와야 하므로 클라이언트 측에서 느릴 수 있음.
- **예시**:
Next.js, Nuxt.js의 기본 설정.

---

### 3. **SSG (Static Site Generation)**

- **동작 방식**:
    1. 빌드 시 모든 페이지를 정적으로 생성해 놓음.
    2. 클라이언트는 CDN에서 사전에 생성된 HTML을 받아 렌더링.
- **장점**:
    - 정적 파일이므로 로딩 속도가 매우 빠름.
    - 서버 부하가 적음.
    - SEO와 성능에 매우 유리.
- **단점**:
    - 콘텐츠가 자주 변경되는 웹사이트에는 부적합.
    - 페이지를 새로 추가하거나 수정할 경우 빌드 과정을 다시 수행해야 함.
- **예시**:
블로그, 문서 사이트(Gatsby, Hugo 등 사용).

---

### 4. **SSG와 SSR의 비교**

| 특징 | SSG | SSR |
| --- | --- | --- |
| **렌더링 시점** | 빌드 타임 | 요청 시(Server-Side) |
| **속도** | 정적 파일이라 빠름 | 매번 HTML 생성으로 상대적으로 느림 |
| **SEO** | 뛰어남 | 뛰어남 |
| **유지 보수** | 데이터가 자주 변경되는 사이트에 비적합 | 실시간 데이터 반영 가능 |
| **사용 사례** | 블로그, 문서, 정적 페이지 | 동적인 데이터가 필요한 웹앱 |

---

### 5. **ISR (Incremental Static Regeneration)**

- **동작 방식**:
    1. SSG처럼 초기에는 정적 페이지를 생성.
    2. 설정한 시간 간격(`revalidate`)마다 요청이 들어오면 서버에서 페이지를 다시 생성하여 캐싱.
- **장점**:
    - SSG의 장점(빠른 속도, 저비용)과 SSR의 장점(동적 데이터)을 결합.
    - 실시간 데이터를 반영하면서도 성능 최적화 가능.
- **단점**:
    - 업데이트 주기(`revalidate`)에 의존하므로, 즉각적인 데이터 반영은 어려울 수 있음.
- **예시**:
Next.js에서 제공 (`getStaticProps` + `revalidate` 옵션).

---

### 6. **Edge Runtime**

- **동작 방식**:
    - 서버 대신 **엣지 서버(Edge Server)**에서 실행
    - 전 세계적으로 분산된 데이터 센터(CDN)에서 JavaScript를 실행하고, 사용자와 가까운 곳에서 콘텐츠를 제공.
- **장점**:
    - 사용자와 물리적으로 가까운 위치에서 처리되므로 **지연 시간(latency)**이 매우 낮음.
    - 빠른 응답 속도로 동적 데이터 제공.
- **단점**:
    - 실행 환경이 제한적(JavaScript만 지원, 일부 Node.js API 제한).
- **사용 사례**:
    - 글로벌 서비스(동적 데이터가 포함된 콘텐츠를 빠르게 배포).
    - Vercel, Cloudflare Workers에서 사용.

---

### 7. **SSR vs SSG vs ISR vs Edge Runtime 비교**

| 특징 | SSR | SSG | ISR | Edge Runtime |
| --- | --- | --- | --- | --- |
| **렌더링 시점** | 요청 시 | 빌드 타임 | 요청 시 (설정된 주기마다) | 요청 시 |
| **응답 속도** | 느림 | 빠름 | 빠름 | 매우 빠름 |
| **데이터 변경 반영** | 실시간 | 빌드 후 반영 불가 | 설정 주기마다 반영 | 실시간 |
| **SEO** | 우수 | 우수 | 우수 | 우수 |
| **사용 사례** | 동적 페이지 | 정적 콘텐츠 | 동적 데이터 기반 콘텐츠 | 글로벌 동적 콘텐츠 배포 |

---

### 요약

- **CSR**: 클라이언트에서 모든 렌더링. SPA 구조에 적합.
- **SSR**: 서버에서 HTML을 생성해 SEO에 적합. 데이터 변경이 많은 동적 사이트에 적합.
- **SSG**: 빌드 시 HTML 생성. 정적 콘텐츠에 적합.
- **ISR**: SSG에 동적 데이터 변경 기능 추가. 동적 콘텐츠 + 빠른 성능 요구 시 적합.
- **Edge Runtime**: 사용자의 위치에 맞춰 글로벌로 콘텐츠를 빠르게 제공. 글로벌 동적 데이터 서비스에 적합.

---

## **1. Hydration**

### 정의:

- **Hydration**은 서버에서 생성된 정적 HTML을 클라이언트에서 JavaScript와 연결(활성화)하여 **상호작용이 가능**한 페이지로 만드는 과정
- Next.js와 같은 SSR/SSG 기반 프레임워크는 **HTML 생성(서버)** → **Hydration(클라이언트)** 과정을 통해 초기 로딩 속도를 최적화

### 연관:

- **SSR**과 **SSG**에서 모두 사용:
    - SSR: 서버가 HTML을 렌더링하고 클라이언트에서 Hydration.
    - SSG: 빌드 타임에 정적으로 생성된 HTML을 클라이언트에서 Hydration.

### 장단점:

- **장점**:
    - 초기 로딩 시 콘텐츠가 즉시 표시되며, SEO와 사용자 경험(UX)에 긍정적.
- **단점**:
    - Hydration 과정 자체가 브라우저에서 JavaScript 실행을 요구하므로 느려질 수 있음.

---

## **2. SEO (Search Engine Optimization)**

### 정의:

- 검색 엔진이 사이트의 콘텐츠를 효율적으로 크롤링하고 인덱싱할 수 있도록 최적화하는 과정
- HTML 콘텐츠가 있는 **SSR**과 **SSG**는 SEO에 유리한 구조를 제공

### 연관:

- **CSR**: 콘텐츠가 클라이언트에서 렌더링되므로, 검색 엔진이 JavaScript를 실행하지 못하면 콘텐츠를 읽지 못함 → SEO에 불리.
- **SSR/SSG**: HTML을 서버에서 생성하기 때문에 검색 엔진이 콘텐츠를 바로 읽을 수 있음 → SEO에 유리.

### Next.js의 특징:

- SSR과 SSG를 지원하여 SEO를 강화.
- 동적 데이터(예: 블로그, 뉴스)를 사용하는 경우, SSR을 통해 실시간 SEO 대응 가능.
- 정적 콘텐츠는 SSG를 사용해 빌드 타임에 미리 HTML을 생성, 크롤러 친화적.

---

## **3. TTI (Time to Interactive)**

### 정의:

- 페이지가 **완전히 상호작용 가능한 상태**가 되는 데 걸리는 시간.
- 초기 콘텐츠 로드 시간 + Hydration 완료 시간을 포함.

### 연관:

- **CSR**:
    - TTI가 느림. 초기 화면을 렌더링하기 전에 JavaScript가 모두 로드되고 실행되어야 함.
- **SSR/SSG**:
    - TTI가 빠름. 콘텐츠는 HTML로 즉시 표시되고, JavaScript 로드와 Hydration이 병렬로 진행.
- **Edge Runtime**:
    - 사용자와 가까운 서버에서 실행되므로, 네트워크 지연을 줄여 TTI를 더욱 빠르게 개선.

---

## **4. Next.js와 CSR, SSR, SSG, ISR**

### Next.js에서의 키워드 활용:

### a. CSR:

- Next.js에서 `useEffect`를 활용하거나 `getStaticProps` 없이 작성하면 CSR 방식으로 렌더링.
- 페이지 이동 시 빠르지만 SEO와 TTI에 불리.

### b. SSR:

- `getServerSideProps`를 사용하여 각 요청 시 서버에서 HTML 생성.
- **SEO**:
    - 검색 엔진에 최적화된 HTML 제공.
- **Hydration**:
    - 서버에서 HTML이 먼저 렌더링되므로 빠르게 콘텐츠 표시.
- **TTI**:
    - Hydration 이후 상호작용이 활성화되므로 사용자 경험이 개선.

### c. SSG:

- `getStaticProps`를 사용하여 빌드 타임에 정적 HTML 생성.
- **SEO**:
    - 서버 부담 없이 정적 파일을 배포하므로 SEO에 이상적.
- **TTI**:
    - HTML과 CSS가 바로 로드되므로 빠름.
- **단점**:
    - 실시간 데이터 반영이 어려움 → ISR로 해결 가능.

### d. ISR:

- `revalidate` 속성을 추가하면 일정 주기마다 정적 페이지를 업데이트.
- **SEO**:
    - 최신 콘텐츠를 유지하면서도 정적 사이트처럼 SEO 친화적.
- **TTI**:
    - 정적 파일처럼 빠르지만 데이터는 최신 상태.

---

## **5. Edge Runtime**

### 정의:

- 클라우드의 엣지 서버(전 세계적으로 분산된 CDN)에서 JavaScript를 실행하여 사용자의 위치와 가까운 곳에서 콘텐츠 제공.

### 연관:

- **TTI**:
    - 요청-응답의 네트워크 지연을 줄여 빠른 TTI 제공.
- **SEO**:
    - 서버에서 HTML을 생성하여 콘텐츠를 바로 제공.
- **사용 사례**:
    - Next.js의 Edge Functions는 Edge Runtime에서 동작하며, 동적 콘텐츠와 글로벌 사용자에 최적화됨.

---

## **추천 학습 자료 및 사이트**

### 공식 문서

1. Next.js 공식 문서
    - `getServerSideProps`, `getStaticProps`, ISR 등 Next.js 기능에 대한 상세 설명 제공.
2. SEO와 Next.js
    - SEO와 관련된 Next.js 사용 사례와 가이드.

### 블로그 및 튜토리얼

1. Vercel 블로그
    - Next.js와 관련된 최신 기술 트렌드, Edge Runtime 사례.
2. [Smashing Magazine: CSR vs SSR vs SSG](https://www.smashingmagazine.com/)
    - 렌더링 방식에 대한 실용적인 비교.

### 퍼포먼스 최적화 도구

1. **Lighthouse**: Google Lighthouse
    - TTI, SEO, Hydration 상태를 측정하는 도구.
2. **WebPageTest**: [WebPageTest](https://www.webpagetest.org/)
    - 렌더링 속도와 사용자 경험 분석.

---