> p.322 연습문제

-   maxKey() 를 사용해 max() 만들기

```javascript
function maxKey(arr, init, f) {
    return reduce(arr, init, function (biggest, el) {
        return f(biggest) > f(el) ? biggest : el
    })
}

function max(arr, init) {
    return maxKey(arr, init, function (x) {
        return x
    })
}
```

<br />

> p.328 연습문제

-   bigSpenders() 함수 만들기

```javascript
function bigSpenders(customers) {
    const withBigPurchases = filter(customers, hasBigPurchases)
    const withMorePurchases = filter(withBigPurchases, hasMorePurchases)

    return withMorePurchases
}

function hasBigPurchases(customers) {
    return filter(customer.purchases, isBigPurchase).length > 0
}

function isBigPurchase(purchase) {
    return purchase.total > 100
}

function hasMorePurchases(customer) {
    return customer.purchases.length >= 2
}
```

<br />

> p.329 연습문제

-   평균을 계산하는 함수 만들기

```javascript
function average(nums) {
    return reduce(nums, 0, plus) / nums.length
}

function plus(a, b) {
    return a + b
}
```

<br />

> p.330 연습문제

-   각 고객의 구매액 평균 구하기

```javascript
function averagePurchaseTotals(customers) {
    return map(customers, function (customer) {
        const purchaseTotals = map(customer.purchases, function (purchase) {
            return purchase.total
        })
        return average(purchaseTotals)
    })
}
```

<br />

> p.348 연습문제

-   포지션별로 가장 높은 사람을 골라 명단을 완성하는 코드 만들기

```javascript
const roster = reduce(evaluations, {}, function (roster, eval) {
    const position = eval.position
    if (roster[position]) {
        return rester
    } else {
        return objectSet(roster, position, eval.name)
    }
})
```

<br />

> p.349 연습문제

-   추천 레코드 목록 만들기

```javascript
const recommendList = employeeNames.map((el) => {
    return {
        name: el,
        position: recommendPosition(el),
    }
})
```

<br />

> p.350 연습문제

-   평점 목록 만들기

```javascript
const evaluations = recommendations.map((el) => {
    return {
        ...el,
        score: scorePlayer(el.name, el.position),
    }
})
```

<br />

> p.351 연습문제

-   최종 명단 만들기

```javascript
const recommendList = employeeNames.map((el) => {
    return {
        name: el,
        position: recommendPosition(el),
    }
})

const evaluations = recommendations.map((el) => {
    return {
        ...el,
        score: scorePlayer(el.name, el.position),
    }
})

const evaluationsAscending = sortBy(evalustions, function (eval) {
    return eval.score
})

const descending = reverse(evaluationsAscending)

const roster = reduce(evaluations, {}, function (roster, eval) {
    const position = eval.position
    if (roster[position]) {
        return rester
    } else {
        return objectSet(roster, position, eval.name)
    }
})
```
