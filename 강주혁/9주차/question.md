> p.364 연습문제

```js
update(user, 'email', lowercase);
```

> p.365 연습문제

```js
function tenXQuantity(item) {
  return update(item, 'quantity', (value) => value * 10);
}
```

> p.366 연습문제

1. 16
2. 15
3. 'CINDY'

> p.376 연습문제

```js
function update4(object, key1, key2, key3, key4, modify) {
  return update(object, key1, (object2) => update3(object2, key2, key3, key4, modify));
}

funtion update5(object, key1, key2, key3, key4, key5, modify) {
  return update(object, key1, (object2) => update4(object2, key2, key3, key4, key5, modify));
}
```

> p.385 연습문제

```js
function incrementSizeByName(cart, name) {
  return nestedUpdate(cart, [name, 'options', 'size'], (size) => size + 1);
}
```

