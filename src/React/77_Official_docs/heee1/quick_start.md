# 📜 React v18.3.1 공식문서 읽기 - Quick Start

- 공식문서를 토대로 학습하였으며 궁금한 부분은 검색해서 추가 정리

</br>

## 1. 컴포넌트 생성 및 중첩하기

- React 앱은 컴포넌트로 구성된다.
- 컴포넌트는 고유한 로직과 모양을 가진 UI의 일부이다. 컴포넌트의 크기는 버튼만큼 작을 수도 있고 전체 페이지만큼 클 수도 있다.
- React 컴포넌트는 마크업을 반환하는 자바스크립트 함수이다.
  cf. 마크업을 반환한다 : HTML 또는 유사한 마크업 언어로 작성된 콘텐츠를 반환한다.

  ```jsx
  function MyButton() {
    return <button>I'm a button</button>;
  }

  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }
  ```

  - `<MyButton />`처럼 React 컴포넌트 이름은 항상 대문자로 시작하고, HTML 태그는 소문자로 시작해야 한다.
  - export default : 파일의 기본 컴포넌트 지정

</br>

## 2. JSX로 마크업 작성하기

- JSX에서는 `<br />`와 같이 태그를 닫아야 한다.
- 컴포넌트는 여러개의 JSX 태그를 반환할 수 없다.(반드시 하나의 부모 요소로 감싸져야 한다.)
- `<div>...</div>` 또는 `<>...</>` 등과 같이 **공유되는 부모**로 감싸야 한다.
  ```jsx
  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>
          Hello
          <br />
          안녕
        </p>
      </>
    );
  }
  ```

</br>

## 3. 스타일 추가하기

- className으로 CSS 클래스 지정정

```jsx
<img className="avatar" />
```

```css
.avatar {
  border-radius: 50%;
  background-color: black;
}
```

- React는 CSS 파일을 추가하는 방법을 규정하지 않는다. 가장 간단한 방법은 HTML에 <link> 태그를 추가하는 방법이다.
- React 프로젝트에서는 CSS 파일을 React 컴포넌트에서 Import하는 방법이 자주 사용된다.
  ```jsx
  import "./styles.css";
  ```

</br>

## 4. 데이터 표시하기

- JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있다. 중괄호를 사용하면 코드에서 일부 변수를 삽입하여 사용자에게 표시할 수 있도록 자바스크립트로 **“이스케이프 백(Escape Back)”** 할 수 있다.

```jsx
// 1.
return <h1>{user.name} // 자바스크립트로 탈출</h1>;

// 2. JSX 어트리뷰트에서도 활용 가능
return (
  <img
    className="avatar" // avatar 문자열을 css로 전달
    src={user.imageUrl} // user.imageUrl 변수값 읽은 다음 src 어트리뷰트로 전달
  />
);
```

- 이스케이프 백(Escape Back): JSX 내부에서 `중괄호 {}`를 사용하여 JavaScript 표현식을 사용할 수 있다는 뜻. HTML처럼 보이는 JSX 코드에 동적으로 데이터를 삽입할 수 있는 방법이다.

```jsx
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize, // 자바스크립트 변수 사용
          height: user.imageSize, // 자바스크립트 변수 사용
        }}
      />
    </>
  );
}
```

- 위의 예시에서 style={{}}는 style={} JSX 중괄호 안에 있는 일반 {} 객체이다. 스타일이 자바스크립트 변수에 의존하는 경우(자바스크립트 코드에서 동적으로 계산된 값을 사용해야하는 경우) style 어트리뷰트를 사용할 수 있다.

<details>
<summary>cf. 🤔어트리뷰트(Attribute)와 속성은 다른 것일까</summary>

- 어트리뷰트가 속성이라고 생각했는데 Attribute도, Property도 둘다 번역하면 **속성**이라는 의미를 가지고 있다. 그렇다면 이 둘의 차이는 무엇일까

- 어트리뷰트(Attribute) : HTML 코드에 작성된 원래 값 (정적)
- 속성(Property) : 브라우저가 해석하고 DOM 객체에 반영된 동적인 값. HTML의 Attribute를 DOM내에서 대신한 표현

  | 구분                 | Attribute                                  | Property                   |
  | -------------------- | ------------------------------------------ | -------------------------- |
  | **사용 위치**        | HTML 태그                                  | JavaScript DOM 객체        |
  | **역할**             | 태그에 초기 값을 설정                      | DOM 객체에서 동적으로 관리 |
  | **React에서의 용어** | HTML 어트리뷰트와 유사한 형태로 props 전달 | props로 동적 데이터 전달   |

  - 예시 : src나 alt가 어트리뷰트이다.

    ```html
    <img src="image.png" alt="Sample Image" />
    ```

  - 예시

    ```html
    <img id="myImage" src="image.png" alt="Sample Image" />
    <script>
      const img = document.getElementById("myImage");

      // Attribute 접근
      console.log(img.getAttribute("src")); // "image.png"

      // Property 접근
      console.log(img.src); // "http://example.com/image.png" (전체 URL)
    </script>
    ```

</details>

</br>

## 5. 조건부 렌더링

- 자바스크립트 코드 작성할 떄와 동일하다.

```jsx
// 1. if
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);


// 2. 삼항연산자
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>


// 3. &&
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

</br>

## 6. 리스트 렌더링하기

- for문, map() 함수 사용(자바스크립트 기능)

  ```jsx
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  export default function ShoppingList() {
    const listItems = products.map((product) => (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {product.title}
      </li>
    ));

    return <ul>{listItems}</ul>;
  }
  ```

  - React는 나중에 항목을 삽입, 삭제 또는 재정렬할 때 어떤 일이 일어났는지 알기 위해 key를 사용한한다.

    cf. 🤔 key를 생략하면 어떻게 될까?

    - React는 key가 없을 경우 각 항목의 인덱스를 사용하여 처리한다.
    - 그러나 이는 문제가 발생할 수 있다.
      - 항목의 순서가 바뀔 때 : React는 항목의 순서를 식별하지 못하고 전체 리스트를 다시 렌더링한다.
      - 항목이 추가되거나 제거될 때 :기존 항목의 상태(예: 폼 입력값)가 잘못된 항목으로 이동할 수 있다.
    - 리스트가 아닌 단일 요소를 렌더링하거나 항목의 순서와 변경사항이 절대 없다면 생략해도 되지만 그렇지 않다면 key값을 사용하길 권장한다.

</br>

## 7. 이벤트에 응답하기

- 컴포넌트 내부에 이벤트 핸들러 함수를 선언하여 이벤트에 응답할 수 있다.
  ```jsx
  function MyButton() {
    function handleClick() {
      alert("클릭!!");
    }
    return <button onClick={handleClick}>Click me</button>;
  }
  ```
  - onClick={handleClick}의 끝에는 소괄호가 없다. 이벤트 핸들러를 호출하지 않고 전달만 하면 된다. React는 사용자가 버튼을 클릭할 때 이벤트 핸들러를 호출한다.

</br>

## 8. 화면 업데이트하기

- 컴포넌트가 특정 정보를 '기억'해서 표시되게하고 싶을 때 `state` 사용

  ```jsx
  import { useState } from "react";

  function MyButton() {
    const [count, setCount] = useState(0); // 0은 초기값

    function handleClick() {
      setCount(count + 1);
    }

    return <button onClick={handleClick}>{count}번 클릭함</button>;
  }
  ```

  - useState로부터 현재 state(count)와 이를 업데이트할 수 있는 함수(setCount)를 얻을 수 있다. 자유롭게 이름을 지정할 수 있지만 일반적으로 `[something(현재 상태 값), setSomething(상태를 업데이트할 함수)]` 형태로 작성한다.
  - 버튼이 처음 표시될 때는 useState()에 0을 전달했기 때문에 count가 0이 된다.
  - 버튼을 클릭하면 이벤트 핸들러(handleClick)가 호출되고 setCount가 호출되어 count를 1 증가시킨다.
  - React는 state가 변경될 때 해당 컴포넌트 함수(MyButton)를 다시 호출하여 업데이트된 UI를 렌더링한다. => '1번 클릭함'
  - 같은 컴포넌트를 여러 번 렌더링하면 각각의 컴포넌트는 고유한 state를 얻게 되므로 각 컴포넌트의 count 값은 별도로 증가한다.

</br>

## 9. Hook 사용하기
- Hook : use로 시작하는 함수. 다른 함수보다 더 제한적이며 컴포넌트나 다른 Hool의 상단에서만 호출할 수 있다.
  - useState는 React 내장 Hook 중 하나


</br>

## 10. 컴포넌트 간에 데이터 공유하기
```jsx
export default function MyApp() {
  const [count, setCount] = useState(0) // 위에서 만든 MyButton에 있던 state를 MyApp으로(위로) 이동해서 작성하기

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>같이 업데이트 되는 카운터</h1>
      <MyButton count={count} onClick={handleClick}/> // MyApp에서 MyButton으로 state(count)와 이벤트 핸들러(handleClick) 전달
      <MyButton count={count} onClick={handleClick}/> // JSX 중괄호 사용하여 MyButton에 전달
    </div>
  )
}

function MyButton() {
  return (
    <button onClick={onClick}>
      {count}번 클릭함
    </button>
  )
}
```
- 이렇게 전달한 정보를 `props`라고 한다.
- MyApp 컴포넌트는 count state와 handleClick 이벤트 핸들러를 포함하며, 이 두가지를 각 버튼에 props로 전달
- 버튼 클릭 -> onClick 핸들러 실행 -> handleClick 함수 내부 코드 setCount(count + 1) 실행 -> count state 변수 증가 -> 각 버튼에 prop로 새로운 count 값 전달 -> 모든 버튼에 새로운 값이 표시
- 이를 “state 끌어올리기”라고 하며 state를 위로 이동함으로써 컴포넌트 간에 state를 공유한다.