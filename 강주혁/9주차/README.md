# 9주차 - 챕터 14 중첩된 데이터에 함수형 도구 사용하기

## nestedUpdate() 도출하기

`update1()`, `update2()` ... 계속 만들지 않고 중첩된 개수 상관없이 쓸 수 있는 `nestedUpdate()`를 만들어보자.

`updateX()`를 만들려고 한다면 `update()` 안에 `updateX-1()`을 불러주면 된다.

```js
function nestedUpdate(object, keys, modify) {
  if (keys.length === 0) return modify(object); // 종료 조건(경로의 길이가 0일 때)

  const key = keys[0];
  const restOfKeys = drop_first(keys);

  return update(object, key, (obj) => nestedUpdate(obj, restOfKeys, modify)); // 재귀 호출
}
```

## 안전한 재귀 사용법

1. 종료 조건

재귀를 멈추려면 종료 조건(base case)이 필요하다.

2. 재귀 호출

재귀 함수는 최소 하나의 재귀 호출(recursive call)이 있어야 한다.

3. 종료 조건에 다가가기

최소 하나 이상의 인자가 점점 줄어들어야 한다. 그래야 종료 조건에 가까워질 수 있다.

## 깊이 중첩된 구조 설계시 생각할 점

각 데이터 구조에 어떤 키가 있는지 알아야 하는 문제가 있다.

-> 기억해야 할 것이 너무 많을 때 **추상화 벽**을 사용하면 도움이 된다. 이걸 사용하면 구체적인 걸 몰라도 된다.

## 깊이 중첩된 데이터에 추상화 벽 사용하기

추상화 벽에 함수를 만들고 의미 있는 이름을 붙여준다.

만들 때 사용하려는 데이터의 이해도를 높일 수 잇는 방향으로 만들어야 한다.

```js
function updatePostById(category, id, modifyPost) {
  return update(category, ['posts', id], modifyPost);
}

function updateAuthor(post, modifyAuthor) {
  return update(post, 'author', modifyAuthor);
}

function capitalizeName(user) {
  return update(user, 'name', capitalize);
}
```

->

```js
updatePostById(blogCategory, '12', (post) => updateAuthor(post, capitalizeName));
```

1. 기억해야 할 것이 네 가지에서 세 가지로 줄음
2. 동작의 이름이 있어 각각의 동작을 기억하기 쉬움

