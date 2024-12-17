# useMemo란?


- useMemo는 계산 비용이 높은 함수의 결과값을 메모이제이션(캐싱)하는 데 사용되는 훅입니다.

**구문**:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

**활용**:

1. 성능 최적화: 비용이 많이 드는 계산을 최적화하여 불필요한 재계산을 방지합니다.
2. 참조 동일성 유지: 객체나 배열을 메모이제이션하여 불필요한 리렌더링을 방지합니다.
3. 의존성 배열을 통한 제어: 특정 값이 변경될 때만 재계산을 수행합니다.

### 1. 리스트 필터링

```jsx
import React, { useState, useMemo } from 'react';

function FilteredList({ items, filterCriteria }) {
  const filteredItems = useMemo(() => {
    console.log('리스트 필터링 중...');
    return items.filter(item => item.includes(filterCriteria));
  }, [items, filterCriteria]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

```

이 예시에서는 items 배열이나 filterCriteria가 변경될 때만 필터링 연산이 수행됩니다.

### 2. 객체 생성 최적화

```jsx
import React, { useMemo } from 'react';

function UserProfile({ name, age }) {
  const userInfo = useMemo(() => {
    console.log('사용자 정보 생성 중...');
    return {
      formattedName: name.toUpperCase(),
      ageNextYear: age + 1
    };
  }, [name, age]);

  return (
    <div>
      <p>이름: {userInfo.formattedName}</p>
      <p>내년 나이: {userInfo.ageNextYear}</p>
    </div>
  );
}

```

이 예시에서는 name이나 age가 변경될 때만 새로운 userInfo 객체가 생성됩니다.

## useMemo의 주요 활용 포인트

1. **성능 최적화**: 복잡한 계산이나 데이터 처리를 최적화합니다.
2. **불필요한 리렌더링 방지**: 객체나 배열의 참조 동일성을 유지하여 자식 컴포넌트의 불필요한 리렌더링을 방지합니다.
3. **의존성 관리**: 특정 값들이 변경될 때만 계산을 수행하도록 제어합니다.

useMemo를 사용할 때는 항상 성능 향상과 코드 복잡성 사이의 균형을 고려해야 합니다. 모든 계산에 useMemo를 적용하는 것은 오히려 성능을 저하시킬 수 있으므로, 실제로 최적화가 필요한 경우에만 사용하는 것이 좋습니다

## UseMemo와 useCallback의 비교useMemo


- **정의**: useMemo는 계산 비용이 높은 함수의 결과값을 메모이제이션하여, 의존성 배열에 지정된 값이 변경될 때만 `재계산`하도록 합니다.
- **용도**: 복잡한 계산 결과를 캐싱하여 성능을 최적화하는 데 사용됩니다.

**구문**:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

## useCallback

- **정의**: useCallback은 함수를 메모이제이션하여, 의존성 배열에 지정된 값이 변경될 때만 `새로운 함수를 생성`합니다.
- **용도**: 함수를 자식 컴포넌트에 props로 전달할 때 불필요한 리렌더링을 방지하기 위해 사용됩니다.

**구문**:

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

```

## useMemo와 useCallback 비교 표

| 특징 | useMemo | useCallback |
| --- | --- | --- |
| 목적 | 계산 결과 값을 메모이제이션 | 함수를 메모이제이션 |
| 반환값 | 메모이제이션된 값 | 메모이제이션된 함수 |
| 사용 예시 | 복잡한 계산 결과 캐싱 | 자식 컴포넌트에 전달할 함수 최적화 |
| 의존성 배열 | 값이 변경될 때만 재계산 | 의존성 배열의 값이 변경될 때만 새로운 함수 생성 |
| 성능 최적화 | 불필요한 재계산 방지 | 불필요한 함수 생성 방지 |
| 사용 사례 | 데이터 변환, 필터링 등 | 이벤트 핸들러, API 호출 등 |

## 요약

- **useMemo는 계산된 값을 저장하여 성능을 최적화하고, useCallback은 함수를 저장하여 자식 컴포넌트의 리렌더링을 방지합니다.**
- 두 훅 모두 의존성 배열을 기반으로 작동하며, 적절히 활용하면 React 애플리케이션의 성능을 크게 향상시킬 수 있습니다.