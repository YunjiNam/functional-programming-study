# Chapter 12 : 함수형 반복

```
> 대부분의 함수형 프로그래밍 언어에는 컬렉션 데이터를 다룰 수 있는 다양하고 강력한 추상 함수가 있다.

> 그 중 가장 많이 쓰이는 map(), filter(), reduce() 이 세 가지 함수형 도구는 함수형 프로그래밍의 중요한 기반이 된다
```

<br />

> 함수형 도구: map()

```javascript
// 배열과 함수를 인자로 받는다
function map(array, f) {
  // 빈 배열을 만든다
  var newArray = [];
  forEach(array, function (element) {
    // 원래 배열 항목으로 새로운 항목을 만들기 위해 f() 함수를 부른다
    // 원래 배열 항목에 해당하는 새로운 항목을 추가한다
    newArray.push(f(element));
  });
  // 새로운 배열을 리턴한다
  return newArray;
}
```

- map() 은 X(어떤 값의 집합) 값이 있는 배열을 Y(또 다른 값의 집합) 값이 있는 배열로 변환한다
- map() 은 값 하나를 바꾸는 함수를 배열 전체를 바꾸는 데 사용할 수 있다
- map() 에 넘기는 함수가 계산일 때 가장 사용하기 쉽다

<br />

> 함수형 도구: filter()

```javascript
// 배열과 함수를 인자로 받는다
function filter(array, f) {
  // 빈 배열을 만든다
  var newArray = [];
  forEach(array, function (element) {
    // f() 를 호출해 항목을 결과 배열에 넣을지 확인한다
    if (f(element)) {
      // 조건이 맞으면 원래 항목을 결과 배열에 넣는다
      newArray.push(element);
    }
  });
  // 결과 배열을 리턴한다
  return newArray;
}
```

- filter() 는 배열에서 일부 항목을 선택하는 함수로 볼 수 있다
- 새로 만들어진 배열도 원래 배열의 순서를 유지하지만 어떤 항목은 건너뛰기도 한다

<br />

> 함수형 도구: reduce()

```javascript
// 베열과 초깃값, 누적 함수를 받는다
function reduce(array, init, f) {
  // 누적된 값을 초기화한다
  var accum = init;
  forEach(array, function (element) {
    // 누적 값을 계산하기 위해 현재 값과 배열 항목으로 f() 함수를 부른다
    accum = f(accum, element);
  });
  // 누적된 값을 리턴한다
  return accum;
}
```

- reduce() 는 배열을 순회하면서 값을 누적한다
- reduce() 함수를 사용할 때 초기값을 결정하는 것을 조심해야 한다
  - 초기값을 동작과 문맥에 따라 다르다
  1. 계산이 어떤 값에서 시작하는가?
     - 예를 들어 더하기를 한다면 초기값은 0 이어야 한다. 만약 곱하기를 한다면 1 이어야 한다.
  2. 빈 배열을 사용하면 어떤 값을 리턴할 것인가?
  3. 비즈니스 규칙이 있는가?

<br />

> 세 가지 함수형 도구를 비교하기

1. map() : 어떤 배열의 모든 항목에 함수를 적용해 새로운 배열로 바꾼다
2. filter() : 어떤 배열의 하위 집합을 선택해 새로운 배열로 만든다
3. reduce() : 어떤 배열의 항목을 조합해 최종값을 만든다

<br />

> 함수형 프로그래밍은 잘 동작하는 작은 추상화 함수로 되어있다.
