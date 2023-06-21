# 8주차 - 챕터 13

> 챕터 13 - 함수형 도구 체이닝

## 체인을 명확하게 만들기

1. 단계에 이름 붙이기

- 고차 함수를 함수로 분리하여 이름 붙임

-> 함수 이름을 통해 체인의 각 단계를 명확하게 표현할 수 있음

2. 콜백에 이름 붙이기

- 중첩 콜백을 함수로 분리하여 이름 붙임

-> 재사용하기 좋아짐

3. 두 방법을 비교

- 어떤 방법이 더 좋은지 코드를 비교해 결정하기

---

> 스트림 결합
>
> - map()과 filter(), reduce() 체인을 최적화하는 것

대부분의 경우에는 여러 단계를 사용하는 것이 더 명확하고 읽기 쉽다! 병목이 생겼을 때만 쓰는 것이 좋음

## 반복문을 함수형 도구로 리팩터링하기

- 전략 1. 이해하고 다시 만들기

- 전략 2. 단서를 찾아 리팩터링

### 팁 1. 데이터 만들기

데이터를 배열에 넣으면 함수형 도구를 쓸 수 있음

array에 있는 값들 중 어떤 범위의 값을 반복한다? -> `.slice()` 메서드 사용

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = array.slice(2, 5);
console.log(newArray); // [3, 4, 5]
```

### 팁 2. 한 번에 전체 배열을 조작하기

고차 함수들은 배열 전체에 동작하기 때문에 함수형 도구 쓸 수 있음

기존 반복문을 함수형 도구로 바꾸어 조작하기

### 팁 3. 작은 단계로 나누기

인덱스를 가지고 반복하고 있는 경우엔 팁 1을 적용하여 인덱스 배열을 만들고, 팁 2를 적용하여 함수형 도구를 사용하기

본문에는 `indices`라는 인덱스 배열을 만들어서 `map()`을 사용하여 인덱스를 가지고 반복하도록 했는데, 나는 이런 식으로 보통 한다.

```js
// 본문 방식
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const indices = [];
for (let i = 0; i < array.length; i++) {
  indices.push(i);
}

const newArray = indices.map((index) => {
  const subArray = array.slice(index, index + 3);
  return average(subArray);
});
```

```js
// 내 방식
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = array.map((_, index) => {
  const subArray = array.slice(index, index + 3);
  return average(subArray);
});

//or
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = Array.from({ length: array.length }, (_, index) => {
  const subArray = array.slice(index, index + 3);
  return average(subArray);
});
```

## 체이닝 디버깅을 위한 팁

- 구체적인 것을 유지하기
  - 각 단계에서 어떤 걸을 하고 있는지 알기 쉽게 이름을 잘 지어야 함
- 출력해보기
  - 각 단계 사이에 print 구문을 넣어 코드 돌려보아 예상대로 동작하는지 확인할 수 있음
- 타입을 따라가 보기
  - 함수형 도구는 타입이 있어 각 단계를 지나는 값의 타입을 따라가 보기

## 데이터를 사용해 창의적으로 만들기

장바구니에 들어가는 데이터가 단순히 아이템의 이름만 나열이 되어있다면 데이터 조작이 어려움

제품을 추가하거나 삭제하는 동작을 목록에 넣어 데이터를 조작할 수 있도록 만들기

```js
// x
const cart = ['shirt', 'socks', 'jacket', 'pants'];

// o
const cartOps = [
  ['add', 'shirt'], // 배열이 아닌 객체로 만들어도 됨
  ['add', 'socks'],
  ['add', 'jacket'],
  ['add', 'pants'],
  ['remove', 'socks'],
];
```

인자를 데이터로 만들면 함수형 도구를 체이닝하기 좋다.
