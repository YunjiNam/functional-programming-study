/**
 * p.190 연습문제
 */
function isInCart(cart, name) {
  return !!indexOfItem(cart, name);
}

/**
 * p.192 연습문제
 */
function setPriceByName(cart, name, price) {
  const cartCopy = cart.slice();
  const index = indexOfItem(cartCopy, name);
  if (index === null) return cartCopy;
  cartCopy[index] = setPrice(cartCopy[index], price);
  return cartCopy;
}

/**
 * p.194 연습문제
 */
function setPriceByName(cart, name, price) {
  const index = indexOfItem(cart, name);
  if (index === null) return cart;
  return arraySet(cart, index, setPrice(cart[index], price));
}