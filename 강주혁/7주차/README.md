# 7주차 - 챕터 12

## map()

> x 값이 있는 배열을 Y 값이 있는 배열로 변환

```js
function map(array, f) {
  const result = [];
  forEach(array, (element) => {
    result.push(f(element));
  });

  return result;
}
```

넘기는 함수가 계산이면 map()을 사용하는 코드도 계산,  
넘기는 함수가 액션이면 map()을 사용하는 코드도 액션

### 함수를 전달하는 세 가지 방법

1. 전역으로 정의하기
2. 지역적으로 정의하기
3. 인라인으로 정의하기

## filter()

> 배열에서 일부 항목을 선택하는 함수

```js
function filter(array, f) {
  const result = [];
  forEach(array, (element) => {
    if (f(element)) result.push(element);
  });

  return result;
}
```

술어(predicate) : true 또는 false을 리턴하는 함수

## reduce()

> 배열을 순회하면서 값을 누적하는 함수

```js
function reduce(array, initValue, f) {
  let result = initValue;
  forEach(array, (element) => {
    result = f(result, element);
  });

  return result;
}
```

### reduce()로 할 수 있는 것들

- 실행 취소/실행 복귀
- 테스트할 때 사용자 입력을 다시 실행하기
- 시간 여행 디버깅
- 회계 감사 추적