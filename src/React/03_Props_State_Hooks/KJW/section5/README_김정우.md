# section5_React.js입문

## 5.1 실습 준비하기

- main.jsx 내 StrictMode태그
  - 개발모드로 리액트를 실행하고있을 때 우리가 작성한 코드에 혹시나 잠재적인 문제가 있는지 내부적으로 검사해서 경고해주는 도구
  - 초심자는 별로 안필요함, 혼란유발
- ESLint 설치
  - 작성한 코드를 정적으로 검사해 혹시나 오류가 발생할만한 코드가있으면 경고를 띄워줌
  - eslintrc.cjs파일의 rules에 끝에 2줄 추가
  - no-unused-vars: 코드상에 실제로 사용하지 않는 변수가 있을 때 이를 오류로 알려줌, 혼란을 방지하려고 끔
  - react/prop-types: 리액트를 다 배우고 조금더 안전하게 사용할 수 있게 하는 옵션, 혼란방지용 off
  ```cjs
  rules: {
    ...js.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
    ...reactHooks.configs.recommended.rules,
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    "react/prop-types": "off",
  },
  ```

## 5.2 React 컴포넌트

- 함수로 만든 것을 함수컴포넌트라고 함
  - 이 함수컴포넌트들은 첫글자가 반드시 대문자가 되어야 한다.
  - 리액트에서는 첫글자가 대문자여야 얘를 컴포넌트라고 인정함
- App.jsx

```jsx
import "./App.css";
import Header from "./components/Header"; // jsx생략가능
import Main from "./components/Main";
import Footer from "./components/Footer";

// App이 부모컴포넌트, Header가 자식컴포넌트가 됨
// 모든 리액트 컴포넌트들은 App을 조상으로 갖는 계층구조를 가지게 됨
// App을 루트컴포넌트라 부름
// 그래서 main.jsx에서 <App />이 되어있는 것
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
```

## 5.3 JSX로 UI 표현하기

- 사실 React 컴포넌트에서 함수 return에 HTML문법을 작성하게 되면 JS는 얘를 문법적인 오류로 판단을 한다.
- 리액트에서는 JSX 문법을 사용하므로 적법하다고 판단한다.
- JSX: 확정된 자바스크립트 문법 (JS Extensions)
- JSX의 중괄호에는 JS표현식만 넣을 수 있다.
  - 삼항연산자도 가능
  - 숫자나 문자로 표현되는 값이면 중괄호 안에 다 넣을 수 있다.
  - 한줄로 평가될 수 없으니 if, for문 같은 것 불가능하다.
  - JS 표현식인 것
    - 그냥 값(리터럴)
    - 변수이름
    - 연산식
- 예시코드 Main.jsx

```jsx
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다
// 예를들어 img태그도 <img />와같이 셀프클로징을 하던지 닫는태그도 써줘야함
// 4. 최상위 태그는 반드시 하나여야만 한다.
// 최상위 태그를 <>이렇게 빈태그로 해도 jsx는 오류로 인식하지는 않지만
// 실제로 출력해보면 개발자도구로 봤을 때 다 흩뿌려져있다. 안묶임
// 객체는 렌더링할 수 없기때문에 obj.a와 같이 접근해야함

import "./Main.css";
// 인라인속성으로 style태그를 넣지않고 외부 css파일을 불러오는 방법
const Main = () => {
  const user = {
    name: "김정우",
    isLogin: true,
  };

  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  if (user.isLogin) {
    return (
      // <div
      //   style={{
      //     backgroundColor: "red",
      //     // css처럼 background-color 이렇게 쓰지말고 camelCase로
      //     borderBottom: "5px solid blue",
      //   }}
      // >
      // 원래 html에서는 class였지만 jsx이기때문에 className으로 해야함
      <div className="logout">로그아웃</div>
    );
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
```

## 5.4 Props로 데이터 전달하기

- 만약 리액트로 naver의 헤더부분을 구현한다면
  - SearchBar 컴포넌트
  - Button 컴포넌트 여러개… 반복렌더링(메일, 카페, 블로그 …)
  - text={메일}, img={mail.png}… 이런 것들처럼 값을 전달하는 것을 Props라 한다. **Properties**의 줄임말이라고 생각
  - Props는 부모컴포넌트로부터 자식으로만 전달할 수 있다. 자식에서 부모로는 불가능하다

### 예시코드

- Button.jsx

```jsx
const Button = ({ text, color = "black", children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
// 당연히 color props가 있을거라 생각하고 코드를 쓰면 undefined일때 오류가 발생
// default값 설정하면 오류방지할 수 있다.
// Button.defaultProps = {
//   color: "black",
// };
// 위에 color=black으로 디폴트값을 직접설정해 주는 것이 jsx권장방식

export default Button;
```

- App.jsx

```jsx
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// Props는 객체로 묶여서 자식컴포넌트의 매개변수로 전달이된다.
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
```

## 5.5 이벤트 처리하기(이벤트 핸들링)

- 이벤트(웹 내부에서 발생하는 사용자의 모든 행동) ex.버튼클릭, 메세지입력, 스크롤 등등
- 핸들링(다루다, 취급하다, 처리하다)
- 즉, 이벤트가 발생했을 때 그것을 처리하는 것을 의미 ex.버튼 클릭시 경고창 노출
- onClick 속성으로함
  - 만약 함수를 따로 만들고 onClick내부에 함수만 전달할때는 호출을하지않고 함수이름만 써서 한다.
- onMouseEnter
  - 마우스를 올려놓기만 해도 동작함
- 합성이벤트(Synthetic Base Event)

  - 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
  - 브라우저마다 이벤트 객체가 서로 다르다.(브라우저별 스펙이 달라서)
  - 이를 Cross Browsing Issue라고 함
  - 이걸 해결해 주는것이 합성이벤트(모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태)

  ```jsx
  // Button.jsx
  const Button = ({ text, color = "black", children }) => {
    // 이벤트 객체
    const onClickButton = (e) => {
      console.log(e); // 합성이벤트 객체
      console.log(text);
    };
    return (
      <button
        // onMouseEnter={onClickButton}
        onClick={onClickButton}
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
  };

  export default Button;
  ```

## 5.6 State로 상태관리하기

- State = 상태, 현재 가지고 있는 형태나 모양을 정의, 변화할 수 있는 동적인 값
- State의 값에 따라 렌더링 되는 UI가 결정된다.
- 컴포넌트가 다시 렌더링 되는 상황을 리액트에서는
  - 리 렌더(Re-Render)
  - 리 렌더링(Re-Rendering)
  - 이라고 부른다.
- 하나의 컴포넌트에 여러개의 state를 만드는 것도 가능하다.
  - 현재 전구의 점등상태
  - 현재 전구의 고장유무
  - 현재 전구의 더러움유무
  - etc…
- 만약 useState를 사용하지 않고 일반 자바스크립트 문법으로 코드를 작성하게 될 경우에는 컴포넌트가 리렌더링 되지 않아서 아무런 변화가 일어나지 않는다
- 왜냐하면 리액트의 컴포넌트는 State의 변화에 따라서 리렌더링 되기 때문!!

```jsx
// App.jsx
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  // const state = useState(0);
  // console.log(state); // useState의 인수값이 첫번째 배열의 요소가 됨
  // (2) [0, ƒ] f가 state의 상태를 변화시키는 상태변화함수
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
```

## 5.7 State와 Props로 전달하기

```jsx
// App.jsx
import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// 리랜더링 되는 케이스
// 1. 자신이 관리하는 state값이 변경
// 2. 자신이 제공받는 props값이 변경
// 3. 부모컴포넌트가 ReRendering되면 자식컴포넌트로 ReRendering됨
// 이 경우는 3번상황이라서 (부모:app) +를 눌러도 Bulb(자식)도 리랜더링됨
// 불필요하므로 현재코드와같이 수정함
function App() {
  // const [count, setCount] = useState(0);
  // const [light, setLight] = useState("OFF");
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```

```jsx
// Bulb.jsx
import { useState } from "react";
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
```

```jsx
// Counter.jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
```

## 5.8 State로 사용자 입력 관리하기 1

- input태그의 placeholder → 아무것도 입력안했을 때 나오는 이름
- 이벤트객체의 target 프로퍼티의 value값이 input태그에 입력한 값

```jsx
// Register.jsx
import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
```

## 5.9 State로 사용자 입력 관리하기 2

- 위의 코드가 비효율적으로 보임, 이를 효율적으로 개선하는 작업을 해본다.

```jsx
// Register.jsx
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 프로퍼티의 키자리에 대괄호로 설정
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // ...input을 빼먹게되면 birth나 country, bio등 관련없는값들은 사라지게된다.
  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };
  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </div>
  );
};

export default Register;
```

## 5.10 useRef로 컴포넌트의 변수 생성하기

- useReference의 줄임말, 컴포넌트 내부에 새로운 Reference 객체를 생성하는 기능, 이 변수는 컴포넌트 내부변수로서 일반적인 값들을 저장할 수 있다.
- 특정 DOM 요소에 접근해서 요소를 조작할 수 있다.
- useRef와 useState는 컴포넌트 내부에서 사용할 변수를 생성한다는 점에서는 동일하나 useRef로 생성한 변수는 값이 바뀌더라도 리렌더링을 유발하지 않는다는 차이가 있다.

| useRef                                 | useState                         |
| -------------------------------------- | -------------------------------- |
| Reference 객체를 생성                  | State를 생성                     |
| 컴포넌트 내부의 변수로 활용 가능       | 컴포넌트 내부의 변수로 활용 가능 |
| 어떤 경우에도 리렌더링을 유발하지 않음 | 값이 변경되면 컴포넌트 리렌더링  |

```jsx
// Register.jsx
import { useState, useRef } from "react";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const refObj = useRef(0);
  // console.log(refObj); // {current: undefined}, useRef에 초기값 넣어서 설정가능
  const countRef = useRef(0);
  const inputRef = useRef();

  // let count = 0
  // countRef대신 js변수로 대체해서 사용한다면
  // input에 값을 계속 입력할때마다 1만 계속 출력됨
  // 이유는 onChange가 작동되면 컴포넌트가 ReRendering되는데
  // 그래서 let count = 0 이게 계속 다시 실행돼서 리셋되기 때문이다.
  // Ref변수는 컴포넌트가 리렌더링 되어도 값이 초기화되지 않는다.
  // 애초에 설계가 그렇게 되어있기 때문임
  // 그렇다면 만약 const Register 외부에 let count를 선언해서 한다면 1 2 3... 이런식으로 출력이 되긴함
  // 하지만 만약 App 컴포넌트에서 Register를 2번 렌더링한다면 Register 2개의 함수가 하나의변수 count를 공유하게 된다.
  // 그렇기 때문에 각 컴포넌트의 수정횟수를 정확히 알 수가 없다.

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
```

## 5.11 React Hooks(낚아채다!)

- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 하는 메서드
- 2017년 이전에는 모든 기능을 이용할 수 있는 Class 컴포넌트를 이용했음
- Function 컴포넌트는 이 당시에 UI렌더링만 할 수 있음
- 그러나 Class 컴포넌트는 문법이 굉장히 복잡했다.
- 그래서 React 개발팀들이 Function 컴포넌트에서도 Class 컴포넌트의 기능을 이용할 수 있게 하는 방법이 없을까? 고민하게됨 (낚아채듯 Class 컴포넌트의 기능을 사용할 수 있게함 → 이를 React Hooks라 한다)
  - 예시로는 useState, useRef가 Hook이었음
  - useEffect, useReducer etc…
  - React Hooks에는 접두사 use가 붙는다.
- 이는 함수컴포넌트 내부에서만 호출할 수 있고 조건문,반복문 내부에서는 호출이 불가능하다.
- use라는 접두사를 이용하여 나만의 Hook(Custom Hook)도 제작가능

```jsx
// HookExam.jsx
import { useState } from "react";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능하다.
// const state = useState() // 오류발생
// 2. 조건부로 호출될 수는 없다. 서로 다른 훅들의 호출순서가 엉망이 돼서 내부적인 오류발생가능성
// 3. 나만의 훅(Custon Hook)을 직접 만들 수 있다.
// 이 Hook들은 보통 src아래 hooks폴더를 따로 만들어서 관리함

function useInput() {
  // use 접두어 붙이면 커스텀훅이 됨
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
```
