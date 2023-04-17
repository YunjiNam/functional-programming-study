const shopping_cart = [];
let shopping_cart_total = 0;

/** 
 * p.79 연습문제
 * 암묵적 입력: shopping_cart_total
 * 0.1을 곱하고 있는 계산을 분리해야 함
 * 
 *  
 * */
function update_tax_dom(total) {
  const tax = calc_tax(total);
  set_tax_dom(tax);
}

function calc_tax(price) {
  return price * 0.1;
}

/**
 * p.82 연습문제
 * 암묵적 입력: shopping_cart_total
 * 비즈니스 규칙을 함수로 분리해야 함
 */
function update_shipping_icons(total) {
  const buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => update_shipping_icon(button, total));
}

function update_shipping_icon(button, total) {
  const item = button.item;
  const isShow = calc_isShow(item.price, total);
  return isShow ?
    button.show_free_shipping_icon()
    : button.hide_free_shipping_icon()
}

function calc_isShow(price, total) {
  return price + total >= 20;
}

/**
 * p.93 연습문제
 * 
 */
function add_item_to_cart(cart, name, price) {
  cart = add_item(cart, name, price);
  calc_cart_total(cart);
}

function calc_cart_total(cart, total) {
  total = calc_total(cart);
  set_cart_total_dom(total);
  update_shipping_icons(cart);
  update_tax_dom(total);
}

function set_cart_total_dom(total) {
  // ...
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

/**
 * p.104 연습문제
 */
function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    const item = button.item;
    const hasFreeShipping = gets_free_shipping_with_item(cart, item);
    update_shipping_icon(hasFreeShipping, button)
  });
}

function update_shipping_icon(isShow, button) {
  if (isShow) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}


function gets_free_shipping_with_item(cart, item) {
  const new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}