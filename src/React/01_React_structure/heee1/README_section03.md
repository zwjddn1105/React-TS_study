# Node.js 기초
- JavaScript 실행환경(Run Time)
- 구동기
- React.js는 Node.js 기반

</br>

## 3.3 Node.js 사용하기
- 터미널에서 실행하기
    ```bash
    node 경로/파일명
    node src/index.js
    ```
- package.json의 script에서 start추가 -> 일종의 매크로 역할
    ```javascript
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node src/index.js"  
    },
    ```

    ```bash
    npm run 스크립트 이름
    npm run start
    ```
</br>

## 3.4 Node.js 모듈 시스템 이해하기
- 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템(ex. 회원 관리 기능: user.js, 장바구니 기능: cart.js, 결제 기능: payment.js)
- index.js, math.js로 실습하기
- ESM 이용 시 package.json에서 "type": "module" 추가
- CJS(Common JS)와 ESM은 동시에 사용할 수 없다.

</br>

## 3.5 Node.js 라이브러리 사용하기
- 라이브러리: 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
- [npm.com](https://www.npmjs.com/)
- Random Color 설치
    -> package.json의 dependencies에서 설치 버전 확인 가능
    -> node_modules: 설치한 라이브러리가 실제 저장되는 곳
    ```bash
    npm i randomcolor
    ```
- node_modules, package-lock.json이 지워지더라도 package.json에 있는 정보 기준으로 npm i로 기존 라이브러리 재설치 가능 => node_modules 공유 안해도 됨