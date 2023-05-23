> p.299 연습문제

- map() 을 사용해 필요한 객체가 들어 있는 배열을 만들기

```javascript
// 주어진 것
// 모든 고객 배열인 customers
// 필요한 데이터는 customer.firstName 과 customer.lastName, customer.address 에 있다

map(customers, function (customer) {
  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    address: customer.address,
  };
});
```

<br />

> p.304 연습문제

- 테스트 그룹과 아닌 그룹을 나누는 코드 작성하기

```javascript
// 주어진 것
// 전체 고객 배열인 customers
// 고객 아이디가 들어 있는 customer.id
// 나머지 연산자 %, x % 3 === 0 이라면 3으로 나누어떨어지는 값이다

var testGroup = filter(customers, function (customer) {
  return customer % 3 === 0;
});

var nonTestGroup = filter(customers, function (customer) {
  return customer % 3 !== 0;
});
```

<br />

> p.309 연습문제

- 숫자 리스트를 모두 더하거나 곱하는 함수 만들기

```javascript
// 배열에 있는 모든 수를 더하기
function sum(numbers) {
  return reduce(numbers, 0, function (total, num) {
    return total + num;
  });
}

// 배열에 있는 모든 수를 곱하기
function product(numbers) {
  return reduce(numbers, 1, function (total, num) {
    return total * num;
  });
}
```

<br />

> p.310 연습문제

- 숫자 배열에 있는 가장 큰 값과 가장 작은 값 찾는 함수 만들기

```javascript
// 주어진 것
// 자바스크립트에서 가장 큰 숫자인 Number.MAX_VALUE
// 자바스크립트에서 가장 작은 숫자인 Number.MIN_VALUE

// 배열에서 가장 작은 숫자를 리턴
// 빈 배열이라면 Number.MIN_VALUE 리턴
function min(numbers) {
  return reduce(numbers, Number.MIN_VALUE, function (a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  });
}

// 배열에서 가장 큰 숫자를 리턴
// 빈 배열이라면 Number.MAX_VALUE 리턴
function max(numbers) {
  return reduce(numbers, Number.MAX_VALUE, function (a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  });
}
```
