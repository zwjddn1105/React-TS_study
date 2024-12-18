# Optimization

## 최적화란 ?

> 웹 서비스의 성능을 개선하는 모든 행위를 일컫음

---

## useMemo란 ?

> "메모이제이션" 기법을 기반으로 불필요한 연산을 최적화 하는 리액트 훅

### 메모이제이션이란 ?

- 이전에 연산한 값을 저장해두었다가, 같은 연산이 반복되는 경우 이전에 연산한 값을 재사용하는 기법

### React App 내부의 최적화 방법

1. 컴포넌트 내부의 불필요한 연산 방지
2. 컴포넌트 내부의 불필요한 함수 재생성 방지
3. 컴포넌트의 불필요한 리렌더링 방지

### React.memo를 사용한 컴포넌트 최적화

- React.memo를 사용하면 컴포넌트의 props가 변경되지 않았다면 리렌더링을 방지할 수 있음

```jsx
import React from 'react';

const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});

export default MyComponent;
```

### useMemo를 사용한 값 최적화

- useMemo를 사용하면 특정 값이 변경되지 않았다면 이전에 연산한 값을 재사용할 수 있음

```jsx
import React, { useMemo } from 'react';

const MyComponent = ({ value }) => {
  const result = useMemo(() => {
    return value + 10;
  }, [value]);

  return <div>{result}</div>;
};

export default MyComponent;
```

### useCallback을 사용한 함수 최적화

- useCallback을 사용하면 특정 함수를 재생성하지 않고 재사용할 수 있음

```jsx
import React, { useCallback } from 'react';

const MyComponent = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return <button onClick={handleClick}>Click Me</button>;
};

export default MyComponent;
```

### React.memo를 사용한 컴포넌트 최적화

- React.memo를 사용하면 컴포넌트의 props가 변경되지 않았다면 리렌더링을 방지할 수 있음

```jsx
import React from 'react';

const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});

export default MyComponent;
```

