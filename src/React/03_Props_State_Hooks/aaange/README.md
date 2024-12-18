# 01 Props로 데이터 전달하기
## props란?
- 리액트에서는 페이지를 컴포넌트라는 단위로 나눠 마치 레고를 조립하듯 개발함.
- 예로 네이버 메인페이지를 개발한다면, 검색바 컴포넌트를 따로 개발하고, 아래 아이콘 모양만 다르고 구성은 같은 버튼의 경우 버튼 컴포넌트를 개발하여 반복 렌더링할 수 있음.
    ```jsx
    function App() {
        return (
            <>
              <Button text={"메일"} img={"mail.png"} />
              <Button text={"카페"} img={"cafe.png"} />
              <Button text={"블로그"} img={"blog.png"} />
              ...
            </>
        )
    }
    ```
    - 이와 같이 버튼 하나 하나에 값을 전달할 수 있음
    - 함수의 인수를 전달하듯이.
    - 컴포넌트에 전달되는 값들을 **Props(Properties의 줄임말)**이라고 부름
    - Props를 이용하면 컴포넌트를 마치 함수처럼 각각 전달하는 값에 따라서 출력되는 UI가 다르게 명령할 수 있음.
## 실습
- **components** 폴더에 `Button.jsx` 파일을 만들고, 다음과 같이 컴포넌트를 만들어준다.
  ```jsx
  const Button = () => {
      return <button>click</button>
  };

  export default Button;
  ```
- App.jsx로 가 import문을 작성하고 return 안에 내용을 모두 지운 후 Button 컴포넌트를 3개 작성해준다.
  ```jsx
  import './App.css';
  import Header from "./components/Header";
  import Main from "./components/Main";
  import Footer from "./components/Footer";
  import Button from "./components/Button";

  function App() {

    return (
      <>
        <Button />
        <Button />
        <Button />
      </>
    );
  }

  export default App
  ```
- 각각의 버튼들이 서로 다른 Props를 전달하게 하기 위해 text를 작성한다.
  ```jsx
  <Button text={"메일"} color={"blue"}/>
  <Button text={"카페"} />
  <Button text={"블로그"}/>
  ```
- 버튼 컴포넌트 파일에서 매개변수로 props를 작성 후 console.log를 작성
  ```jsx
  const Button = (props) => {
      console.log(props)
      return <button>클릭</button>
  };
  ```
  - 그럼 "메일", "카페", "블로그" 세 가지가 모두 출력됨.
    - 앱 컴포넌트에서 버튼 컴포넌트를 3개 랜더링하도록 해서 그렇다.
- 컴포넌트에 props를 작성해주면 해당 props는 객체 형태로 묶여서 자식 컴포넌트(Button 컴포넌트)의 매개변수로 전달된다.
- 전달되는 매개변수를 이용하여 다음과 같이 점 표기 법으로 text를 출력한다.
  ```jsx
  const Button = (props) => {
      console.log(props)
      return (
        <button style={{color: props.color}}>
          {props.text}
        </button>)
  };
  ```
### Props 기본 값 설정
  - color props는 "메일" 버튼에만 제공되어 나머지 버튼에는 갖고 있지 않은 props임.
  - 그런데 이 때 color를 모두 가지고 있다고 확정하여 명령어를 다음과 같이 작성할 경우 오류가 발생함
    ```jsx
    <button style={{color: props.color}}>
      {props.text} - {props.color.toUppercase()}
    </button>
    ```
    - color를 제공 받지 않는 props의 경우 undefined 상태인데, undefined에 점 표기법을 사용하니 오류가 발생하는 것.
  - 이러한 경우 기본 값을 설정하여 오류를 해결할 수 있음
    ```jsx
    Button.defaultProps = {
      color: "black",
    }
    ```
### Props를 받아 사용할 때 편리하게 사용하는 방법
- props는 객체로 묶여 매개변수로 전달되는데 객체로 받아오지 않고 구조분해할당을 이용하여 직접 받아오는 방법이 있음
  ```jsx
  const Button = ({text, color}) => {
      return (
        <button style={{color: color}}>
          {text} - {color.toUpperCase()}
        </button>)
  };
  ```
- App.jsx에 작성된 부모 컴포넌트의 경우에도 전달할 props가 많아진다면 다음과 같이 객체로 묶은 다음 스프레드 연산자로 작성할 수도 있음.
  ```jsx
  function App() {
    const buttonProps = {
      text: "메일",
      color: "blue",
      a: 1,
      b: 2,
      c: 3,
    }

    return (
      <>
        <Button {...buttonProps}/>
        <Button text={"카페"} />
        <Button text={"블로그"}/>
      </>
    );
  }
  ```
### Props가 전달할 수 있는 것들
- 프롭스는 일반적인 문자열같은 자바스크립트 값 뿐만 아니라 html 요소나 리액트 컴포넌트도 전달할 수 있음.
  ```jsx
  <Button text={"블로그"}>
    <div>자식요소</div>
  </Button>
  ```
  ```jsx
  const Button = ({ text, color, children }) => {
    return (
      <button style={{ color: color }}>
        {text} - {color.toUpperCase()}
        {children}
      </button>)
  };
  ```
  - 자식 요소들은 자동으로 children이라는 매개변수로 전달이 됨.
  - 컴포넌트도 가능
    ```jsx
      <Button text={"블로그"}>
        <Header />
      </Button>
      ```
### Props는 부모 컴포넌트에서 자식 컴포넌트로만 전달할 수 있음
- 반대로 자식 컴포넌트에서 부모 컴포넌트로 값을 전달하는 것은 리액트에서 불가능하다.




# 02 State로 상태 관리하기 
## State - 상태
- 어떤 사물이 현재 가지고 있는 상황이나 형편을 이르는 말, 변경할 수 있음
- 컴포넌트의 현재 상태를 보관하는 변수
  - state를 갖는 React 컴포넌트
    - state의 값에 따라 렌더링 되는 UI가 결정된다
    - state 값이 바뀌면 새로 렌더링 된다.
      - 리 랜더(Re-Render)
      - 리 렌더링(Re-Rendering)
## state 만들기
### 사전 준비
```jsx
// App.jsx
import './App.css';

function App() {

  return (
    <>
    </>
  );
}

export default App;
```
- App.jsx를 보이는 것과 같이 리턴 내부 등 모두 지우기
### 실습
```jsx
import './App.css';
import {useState} from "react";

function App() {

  const state = useState();
  console.log(state);
  return (
    <>
    </>
  );
}
```
- state를 사용하기 위해서는 리액트에서 제공하는 내장함수인 `useState`를 import 해야 함.
- 함수 내부에 `useState`를 받아줄 변수를 만들고 cosole.log를 작성해보기.
- 그럼 console에 2가지를 요소를 가진 배열이 출력됨.
  - 0. state의 값 (useState의 인수 값)
  - 1. state를 변화시키는 상태 변환 함수
```jsx
function App() {
  
  const [state, setState] = useState(0);
  return (
    <>
    <h1>{state}</h1>
    </>
  );
}
```
- 때문에 state를 변수로 받아주는 것이 아니라 구조 분해 할당을 통해 받아주는 것이 일반적임.
```jsx
function App() {

  const [state, setState] = useState(0);
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=> {
      setState(state + 1)
    }}>+</button>
    </>
  );
}
```
- 이와 같이 버튼 이벤트 핸들러에 변화 함수를 넣어주면 버튼이 클릭될 때마다 state가 1씩 증가하게 됨.
- 이 과정에서 변화 함수를 통해 state가 바뀌게 되는데 바뀔 때마다 App.jsx가 다시 렌더링 됨.
  - state가 변화될 때마다 다시 렌더링되고 이를 **리렌더링**이라고 함
#### 새로운 state
이전에 있던 state의 이름을 헷갈리게 하지 않기 위해 변경해줌.
```jsx
function App() {

  const [count, setCount] = useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> {
      setCount(count + 1)
    }}>+</button>
    </>
  );
}
```
- count로 변경하고 함수 return 안에도 전반적으로 변경해줌. 
- 브라우저에서 테스트 했을 때 오류가 나지 않아야 함.
```jsx
function App() {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=> {
        setLight(light === "ON" ? "OFF" : "ON")
      }}>{light === "ON" ? "끄기" : "켜기"}</button>
    </div>
    <div>
    <h1>{count}</h1>
    <button onClick={()=> {
      setCount(count + 1)
    }}>+</button>
    </div>
    </>
  );
}
```
- light라는 새로운 state를 만들어 줌
- 이전에 있던 h1 태그와 button 태그를 div로 묶어주고, 새로 만들어줄 h1 태그와 button도 div로 묶어 가독성을 높임
- 삼항연산자를 활용하여 state가 "OFF"인 경우 전구를 켜고 아니라면 전구를 끌 수 있게 코드를 작성.
## 왜 state를 사용할까?
그냥 let을 사용하여 변수를 만들고 위와 같은 기능을 구현할 수 있는데, 왜 React에서는 state라는 기능을 사용하는 것인가?
```jsx
function App() {
  let light = "OFF";

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=> {
        light = light === "ON" ? "OFF" : "ON";
      }}>{light === "ON" ? "끄기" : "켜기"}</button>
    </div>
    </>
  );
}
```
- 이처럼 let 변수를 사용하여 제작하면 light의 변수 값이 바뀌긴 하지만, 페이지가 리렌더링 되지는 않음.
- 때문에 버튼을 눌러도 h1 태그에 있는 {light}값이 바뀌지 않는 것.
- React에서는 state의 값이 변경되어야 리렌더링 됨.
#### 때문에 리엑트에서 변화하는 가변적인 값을 관리할 때, 그런 값을 화면에 랜더링 시켜주고자 한다면 일반 변수가 아닌 state를 사용함.




# 03 State와 Props
### 실습
```jsx
// App.jsx
const Bulb = ({light}) => {
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor : "orange"}}>ON</h1>
      ):(
        <h1 style={{ backgroundColor: "gray"}}>OFF</h1>
      )} 
    </div>
  )
}
```
- 앱 컴포넌트 위에 전구 역할을 하는 Bulb 함수를 선언해 줌.
- Bulb는 부모 컴포넌트로부터 프롭스(Props)로 전구의 상태, 전구가 꺼져 있는지 켜져 있는지를 받아 올 것.
```jsx
function App() {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
    <div>
      <Bulb light={light} />
      <button onClick={()=> {
        setLight(light === "ON" ? "OFF" : "ON")
      }}>{light === "ON" ? "끄기" : "켜기"}</button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={()=> {
        setCount(count + 1)
      }}>+</button>
    </div>
    </>
  );
}
```
- 그리고 h1 태그 대신 자식 컴포넌트로 Bulb를 넣고, props로 light도 넣어주기.
- 그리고 "끄기/켜기" 버튼을 클릭하면 배경이 잘 설정되어 자식 컴포넌트인 Bulb가 잘 작동한다.
#### 여기서 알 수 있는 중요한 사실
- 버튼을 클릭해 light state를 계속 변경해주면 Bulb 컴포넌트가 계속 리렌더링 되는 것.
- 자식 컴포넌트는 부모로부터 받는 Props의 값이 바뀌면 리렌더링 된다는 사실을 알 수 있음.
- 자식 컴포넌트는 자신이 가지고 있는 state의 값이 변경되지 않아도 부모로 받는 Props의 값이 변경되면 리 렌더링 된다. ⭐️
#### 이 상태에서 count 버튼 클릭
- count 버튼을 클릭하면 Bulb 컴포넌트의 값이 리랜더링 된다.
  - console.log가 클릭 시 반복적으로 뜸
- count와는 상관이 없어 보이는 Bulb 컴포넌트가 왜 리렌더링 될까?
  - React의 컴포넌트는 3가지 상황에서 리렌더링 됨.
### React 컴포넌트가 리렌더링 되는 3가지 상황
1. 자신이 관리하는 state의 값이 변경되었을 때
2. 자신이 제공받는 Props의 값이 변경되었을 때
3. 부모 컴포넌트가 리렌더링 될 때

#### count 버튼 클릭시 Bulb 컴포넌트가 리렌더링된 이유
- count 버튼을 클릭하면 App컴포넌트의 state가 변경되었기에 1번에 의해 리렌더링
- App 컴포넌트가 리렌더링 되면서 App 컴포넌트를 부모로 가지고 있는 Bulb 컴포넌트가 리렌더링 된 것
#### 그러나 Bulb 컴포넌트는 count 버튼과 관련이 없음 -- 불필요한 리렌더링
- 이처럼 불필요한 리렌더링이 발생하고, 이러한 경우가 많아질 경우 성능이 저하 될 수 있음
- 때문에 count와 light처럼 관련이 없는 state를 하나의 컴포넌트에 함께 두지 않고 서로 다른 컴포넌트로 분리해주는 것이 좋음
```jsx
const Bulb = () => {

  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor : "orange"}}>ON</h1>
      ):(
        <h1 style={{ backgroundColor: "gray"}}>OFF</h1>
      )}
      <button onClick={()=> {
        setLight(light === "ON" ? "OFF" : "ON")
      }}>
        {light === "ON" ? "끄기" : "켜기"}
      </button> 
    </div>
    
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={()=> {
          setCount(count + 1)
        }}>+</button>
      </div>
    </>
  )
}

function App() {
  
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}
```
- 이 처럼 Count 컴포넌트를 App 컴포넌트에서 분리하여 자식컴포넌트로 만들기
- light state는 Bulb 컴포넌트 안으로 옮겨주고 props를 지워줌.
  - App 컴포넌트 안에 Bulb 컴포넌트의 props를 제공하는 코드도 지워줌.
  - light 버튼들도 잘라내어 Bulb 컴포넌트 안에 넣어줌.
- **컴포넌트 파일로 분리하기**
  - 'src/components/'폴더에 `Bulb.jsx`, `Counter.jsx` 파일을 만들어 컴포넌트를 옮긴다.
  - `App.jsx`에 import 해줌
```jsx
// App.jsx
import './App.css';
import {useState} from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";


function App() {
  
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```



# 04 State로 사용자 입력 관리하기 1
## 사전 준비
- App.jsx에 작성되어 있던 Bulb, Counter 컴포넌트와 useState import문은 더이상 사용하지 않기에 삭제.
```jsx
import './App.css';

function App() {
  
  return (
    <>

    </>
  );
}

export default App;
```
## 간단한 회원가입 폼 만들기
1. components 폴더에 `Register.jsx` 파일 만들기
    ```jsx
    const Register = ()=> {
        return (
            <h1>register</h1>
        )
    }

    export default Register;
    ```
2. `App.jsx` 파일에 Register 컴포넌트 import 하기
    ```jsx
    // App.jsx
    import Register from './components/Register';

    function App() {
    
    return (
        <>
        <Register />
        </>
    );
    }
    ```
### 수집할 내용 입력하기
1. 사용자의 이름
2. 생년 월일
3. 국적
4. 자기소개
- Register 컴포넌트 내부에 `input 태그`를 작성해주기
    ```jsx
    const Register = ()=> {
        return (
            <div>
                <input placeholder={"이름"} />
            </div>
        )
    }

    export default Register;
    ```
    - placeholder : 사용자가 아무것도 입력하지 않았을 경우 회색으로 나타나는 가이드문구
#### 이름을 state에 저장하기
```jsx
import { useState } from "react";

const Register = ()=> {
    const [name, setName] = useState("");

    return (
        <div>
            <input placeholder={"이름"} />
        </div>
    )
}
```
- state를 구조분해 할당하여 name state를 만들기
- input 안에 값이 바뀌면 상태를 바꿔줄 이벤트 핸들러를 만들기
```jsx
const Register = ()=> {
    const [name, setName] = useState("");

    const onChangeName = (e) => {
        console.log(e)
    }

    return (
        <div>
            <input onChange={onChangeName} placeholder={"이름"} />
        </div>
    )
}
```
- 이렇게 작성하면 input에 작성된 내용을 콘솔로그를 통해 볼 수 있음
    - SyntheticbaseEvent > target > value에서 "..." 클릭
    - e.target.value로 접근하면 사용자가 입력한 내용에 접근 할 수 있다는 이야기.
```jsx
const onChangeName = (e) => {
    setName(e.target.value);
}
```
- 이를 통해 setName에 사용자가 입력한 값이 매개변수로 들어가고 name에 그 값이 저장될 것임.
```jsx
const Register = ()=> {
    const [name, setName] = useState("이름");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <input 
                value={name}
                onChange={onChangeName} 
                placeholder={"이름"} />
            {name}
        </div>
    )
}
```
- 만약 초기값을 설정하려는 경우 input의 속성에 value 값을 설정함으로써 초기값을 띄울 수 있음.


#### 생년월일을 state에 저장하기
1. `<input type="date" />`를 작성하면 날짜 선택기(Date Picker)를 사용할 수 있음
    - 사용하는 브라우저에 따라 다른 모양으로 렌더링 될 수 있음
2. 각 각의 인풋 값을 한 줄씩 보여주기 위해 div로 감싸기
    - 현재 상태에서는 name을 받는 인풋과 생년월일을 받을 인풋이 한줄로 나열되어있고, 딱 붙어있어 보기 않좋음
    ```jsx
    <div>
        <input 
            value={name}
            onChange={onChangeName} 
            placeholder={"이름"} />
    </div>
    <div>
        <input type="date" />
    </div>
    ```
    - div는 한 줄을 통째로 사용하기 때문에 한 줄씩 출력할 수 있음
3. input으로 받을 값을 state에 저장하기
    ```jsx
    const Register = ()=> {
        const [birth, setBirth] = useState("");

        const onChangeBirth = (e) => {
            setBirth(e.target.value);
        }

        return (
            <div>
                <div>
                    <input 
                        value={name}
                        onChange={onChangeName} 
                        placeholder={"이름"} />
                </div>
                <div>
                    <input 
                        value={birth}
                        type="date"
                        onChange={onChangeBirth} />
                </div>

            </div>
        )
    }
    ```
#### 국적을 state에 저장하기
1. select 태그를 이용하면 드롭박스의 형태로 제작할 수 있음
    - option 태그를 사용해 원하는 값들을 드롭박스에 요소로 넣기
    - select 태그는 최상단의 option을 기본 값으로 가지기에 아무것도 선택이 안된 상태를 원한다면 빈 값을 가진 option을 최상단에 위치시켜주기
    ```jsx
    <div>
        <select>
            <option></option>
            <option>한국</option>
            <option>미국</option>
            <option>영국</option>
        </select>
    </div>
    ```
2. state 만들기
    ```jsx
    const Register = ()=> {
        const [country, setCountry] = useState("");

        const onChangeCountry = (e) => {
            setCountry(e.target.value);
        }

        return (
            <div>
                <div>
                    <input 
                        value={name}
                        onChange={onChangeName} 
                        placeholder={"이름"} />
                </div>
                <div>
                    <input 
                        value={birth}
                        type="date"
                        onChange={onChangeBirth} />
                </div>
                <div>
                    <select 
                        value={country}
                        onChange={onChangeCountry}>
                        <option></option>
                        <option>한국</option>
                        <option>미국</option>
                        <option>영국</option>
                    </select>
                </div>

            </div>
        )
    }
    ```
    - select 태그의 경우 value의 값을 선택지에서 보이는 것과 다르게 출력할 수 있음
    ```html
    <div>
        <select 
            value={country}
            onChange={onChangeCountry}>
            <option></option>
            <option value="kr">한국</option>
            <option>미국</option>
            <option>영국</option>
        </select>
        {country}
    </div>
    ```
    - 이렇게 설정하는 경우 드롭 박스에서 "한국"을 선택한 경우 "kr"로 출력되게 할 수 있음.
    - 이를 활용하여 드롭박스에는 친절하고 긴 텍스트를 사용하고 내부적으로는 더 간결한 텍스트를 사용하는 경우가 일반적.
#### 자기소개 입력받기
1. 자기소개는 다른 항목들보다 길 수 있으니 textarea 태그를 사용함.
    - 인풋 태그와 달리 여러줄의 텍스트를 작성할 수 있는 태그.
    - 이를 제외한 다른 부분은 인풋 태그와 동일함.
2. state에 저장하기
    ```jsx
    const Register = ()=> {
        const [bio, setBio] = useState("");

        const onChangeBio = (e) => {
            setBio(e.target.value);
        }

        return (
            <div>
                <div>
                    <input 
                        value={name}
                        onChange={onChangeName} 
                        placeholder={"이름"} />
                </div>
                <div>
                    <input 
                        value={birth}
                        type="date"
                        onChange={onChangeBirth} />
                </div>
                <div>
                    <select 
                        value={country}
                        onChange={onChangeCountry}>
                        <option></option>
                        <option value="kr">한국</option>
                        <option value="us">미국</option>
                        <option value="uk">영국</option>
                    </select>
                </div>

                <div>
                    <textarea 
                        value={bio}
                        onChange={onChangeBio}/>
                </div>

            </div>
        )
    }
    ```



# 05 State로 사용자 입력 관리하기 2
- 지난 실습에서 반복적으로 사용되는 비슷한 형태의 코드들이 많이 있었음 이를 효율적으로 작성할 수 있도록 수정하고자 함.
## state 선언문
```jsx
const [name, setName] = useState("이름");
const [birth, setBirth] = useState("");
const [country, setCountry] = useState("");
const [bio, setBio] = useState("");
```
원래 이상태였던 선언문들을 삭제
```jsx
const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
})
```
- 이처럼 input을 한번에 받고 객체 형식으로 작성할 수 있도록 수정.
- 이 input을 이용하여 작동하도록 나머지 함수를 수정
    ```jsx
    const onChangeName = (e) => {
        setInput({
            ...input,
            name : e.target.value
        })
    }
    ```
    - setInput에서 name의 값을 e.target.value으로 수정
    - ...Input : 스프레드 연산자를 사용하여 name 이외의 값들은 그대로 유지하도록 해줌.
        - 이를 작성해주지 않으면 setInput의 내용물이 나머지는 지워지고 name : e.target.value만 남게됨.
    - 나머지도 동일하게 수정
- input 속성에서도 value의 값을 `input.값`으로 변경
    ```html
    <div>
        <input 
            value={input.name}
            onChange={onChangeName} 
            placeholder={"이름"} />
    </div>
    ```
    - 나머지도 동일하게 수정
- 제대로 잘 설정이 완료되었는지 확인하기 위해 console.log 작성
    ```jsx
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    console.log(input);
    ```
    - 스프레스 연산자를 통해 변경하려는 값만 변경되는 것을 볼 수 있음.
    - 확인 다 했으면 콘솔로그 지우기
### 이벤트 핸들러 묶어주기 (통합 이벤트 핸들러)
- 통합 이벤트 핸들러 만들기
    ```jsx
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    ```
    - state와 마찬가지로 스프레드 문을 활용하여 다른 이벤트 핸들러는 유지되도록 설정하기.
- 나머지 이벤트 핸들러 삭제
- 리턴문의 인풋 속성에 name을 작성해주고 이벤트 핸들러의 함수를 수정해준다.
    ```html
    <div>
        <input 
            name="name"
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"} />
    </div>
    ```
    - name 속성에는 input의 이름을 넣는다.
    - 나머지 속성도 동일하게 수정
#### 통합 이벤트 핸들러 설명
1. 먼저 통합 이벤트 핸들러에 작성된 onChange라는 함수로 모든 이벤트 핸들러 함수를 수정해주었기에 어디에서 입력을 수정하든 onChange 함수가 실행이 됨.
2. 함수가 실행되면 setInput이라는 함수가 실행되고, 객체로 스프레드 문인 `...input`은 기존에 input으로 받은 값들을 나열해준 다음 마지막에 프로퍼티의 키를 명시하는 자리에 [e.target.name]을 넣어줌.
    - 자바스크립트의 문법으로 새로운 객체를 만들면서 프로퍼티의 키의 자리에 대괄호를 열고 변수의 이름을 작성하면 작성한 변수의 값이 프로퍼티의 키로 설정됨.
    - e.target.name
        - evnet가 발생한 값의 속성 값 중 name이 들어있음.
        - 만약 생년월일을 수정한다면 event의 target은 Input 태그가 될 것이고, 그 타겟의 name은 birth가 되는 것.
        - 즉, [e.target.name]은 birth가 되는 것이고 `birth: e.target.name`가 되는 것.




# 06 React Hooks
## React Hooks
- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 매서드
### 2017년 이전의 React.js

|Class 컴포넌트|Function 컴포넌트|
|:---:|:---:|
|모든 기능을 이용할 수 있음 (ex. State, Ref, etc...)|UI 렌더링만 할 수 있음|
|문법이 복잡함.||
- 사람들은 기능적인 이유로 class 컴포넌트를 대부분 사용하였으나, 문법이 복잡하여 Function 컴포넌트에서도 리액트의 모든 기능을 이용할 수 있기를 바랐음.
- 리액트 개발진과 오픈소스 개발자들이 Class 컴포넌트의 기능을 낚아채 Function 컴포넌트에서 사용할 수 있도록 하는 기능을 개발해냄.
### 지난 공부로 학습한 내용

|개념|내용|
|:----:|:-----:|
|useState|State 기능을 낚아채오는 Hook|
|useRef|Reference 기능을 낚아채오는 Hook|
### React Hooks 특징
- 이름 앞에 동일한 접두사 **use**가 붙음
- React Hooks의 각각의 매서드들을 단수형으로 Hook이라고 부름
- 함수 컴포넌트 내부에서만 호출할 수 있음
- 조건문, 반복문 내부에서는 호출 불가
- use 접두사를 활용하여 사용자 지정 Hook 제작 가능 (Custom Hook)

## 실습
### 사전 준비
- components 폴더에 "HookExam.jsx" 파일 생성
    - 해당 파일 내부에 HookExam 컴포넌트 생성
        ```jsx
        const HookExam = () => {
            return <div>hookexam</div>
        }

        export default HookExam;
        ```
- App.jsx 내부에 선언
    ```jsx
    import './App.css';
    import HookExam from './components/HookExam';

    function App() {
    
    return (
        <>
        <HookExam />
        </>
    );
    }

    export default App;
    ```
### hook 관련 3가지 tip
1. hook은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
    ```jsx
    // HookExam.jsx

    import { useState } from "react";

    const state = useState();

    const HookExam = () => {
        return <div>hookexam</div>
    }
    ```
    - 이처럼 함수 컴포넌트 외부에서 호출할 경우 console에 오류가 뜸.
2. react hook은 조건부로 호출될 수 없다.
    - 조건부로 호출된다는 것은 조건문, 반복문 내부에서 호출된다는 것
    - 컴포넌트 안에 조건문, 반복문 내부에 hook이 존재하는 경우 해당 컴포넌트를 렌더링 할 때 조건문, 반복문 내부의 hook의 호출 순서가 엉망이 되어버리는 문제가 발생.
3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
    ```jsx
    const HookExam = () => {
        const [input, setInput] = useSate("");

        const onChange = (e) => {
            setInput(e.target.value);
        }
        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        )
    }
    ```
    - 이러한 방식으로 작성되던 코드를 커스텀 훅을 사용하게 되면 다음과 같다.
    ```jsx
    function useInput() {
        const [input, setInput] = useState("");

        const onChange = (e) => {
            setInput(e.target.value);
        }
        return [input, onChange];
    }

    const HookExam = () => {

        const [input, onChange] = useInput();

        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        )
    }
    ```
    - 원하는 함수를 만들고 앞에 use 접두사만 붙여주면 됨
    - 당연히 여러번 호출하여 사용하는 것도 가능함.
    #### Custom Hook
    - 일반적으로 커스텀 훅은 위와 같이 컴포넌트와 동일한 파일에 작성하지 않고, src 폴더 안에 hooks라는 폴더 안에 훅의 이름으로 보관한다.
    ```jsx
    // hooks/useInput.jsx

    import { useState } from "react";

    function useInput() {
        const [input, setInput] = useState("");

        const onChange = (e) => {
            setInput(e.target.value);
        }
        return [input, onChange];
    }

    export default useInput;
    ```
    ```jsx
    // HookExam.jsx
    import useInput from "../hooks/useInput";

    const HookExam = () => {

        const [input, onChange] = useInput();

        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        )
    }

    export default HookExam;
    ```
    - `from "../hooks/useInput";` Import 경로를 보면 ..을 통해 상위 폴더로 올라갔다가 작성되는 것을 볼 수 있음.
    