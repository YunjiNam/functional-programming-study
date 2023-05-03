> p.190 연습문제

- isInCart() 함수와 indexOfItem() 함수에서 비슷한 부분을 함께 쓸 수 있도록 고치기

```javascript
function isInCart(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return true;
    }
  }
  return false;
}

function indexOfItem(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return i;
    }
  }
  return null;
}
```

```javascript
function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}
```

> p.192 연습문제

- setPriceByName() 함수와 indexOfItem() 함수에서 비슷한 부분을 함께 쓸 수 있도록 고치기

```javascript
function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  for (var i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) {
      cartCopy[i] = setPrice(cartCopy[i], price);
    }
  }
  return cartCopy;
}

function indexOfItem(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return i;
    }
  }
  return null;
}
```

```javascript
function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  var i = indexOfItem(cartCopy, name);
  if (i !== null) {
    cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}
```

> p.194 연습문제

- arraySet() 함수를 이용해 setPriceByName() 함수 다시 만들기

```javascript
function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  var i = indexOfItem(cartCopy, name);
  if (i !== null) {
    cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}
```

```javascript
function setPriceByName(cart, name, price) {
  var i = indexOfItem(cart, name);
  if (i !== null) {
    return arraySet(cart, i, setPrice(cartCopy[i], price));
  }
  return cart;
}
```
