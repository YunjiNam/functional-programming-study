> 3주차

# 챕터6 - 카피-온-라이트로 쓰기를 읽기로 바꾸기

## 카피-온-라이트

- 불변성 원칙
- 읽기
  - 데이터에서 정보 가져오기
  - 데이터 바꾸지 않음
- 쓰기
  - 데이터 바꾸기

### 단계

1. 복사본 만들기
2. 복사본 변경하기
3. 복사본 리턴하기

=> `쓰기`를 `읽기`로 바꾼다!

## 자바스크립트 배열

- 순서 있는 값을 나타내는 컬렉션
- 다른 타입의 항목을 동시에 가질 수 있음

### `.shift()` 메서드는 쓰면서 읽기도 하는데?

접근 방법

1. 읽기와 쓰기 함수로 각각 분리

```js
// 읽기
function getFirstItem(items) {
  return items[0];
}

// 쓰기
function removeFirstItem(items) {
  var itemsCopy = items.slice();
  itemsCopy.shift();
  return itemsCopy;
} // or
function removeFirstItem(items) {
  return items.slice(1);
}
```

2. 함수에서 값을 두 개 리턴

```js
function shift(array) {
  var array_copy = array.slice();
  var first = array_copy.shift();
  return {
    first: first,
    array: array_copy,
  };
} // or
function shift(array) {
  return {
    first: getFirstItem(array),
    array: removeFirstItem(array),
  };
}
```

## 불변 데이터 구조를 읽는 것은 계산!

- 변경 가능한 데이터를 읽는 것은 `액션`
- 변경 불가능한 데이터를 읽는 것은 `계산`
- 데이터에 쓰기가 없다? -> 변경 불가능한 데이터 => 계산
- 쓰기를 읽기로 바꾸면 코드에 계산이 많아져요 => 액션이 줄어들어요

## 바뀔 때마다 복사하면 비효율적 아닌가?

- 그래도 충분히 빨라요
- 미리 최적화하지 말고 속도가 느린 부분이 있다면 그때 최적화하세요

> `얕은 복사`: 데이터 구조의 최상위 단계만 복사하는 것
> `구조적 공유`: 얕은 복사는 같은 메모리를 가리키는 참조에 대한 복사본을 만듦

## 객체에 대한 카피-온-라이트

- 배열은 `.slice()` 메서드로 복사했지만 객체는 어떻게 복사할까요?
  - `Object.assign()` 메서드를 사용하면 됩니다
