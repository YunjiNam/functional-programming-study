/**
 * p.322
 */
function max(arr, init) {
  return maxKey(arr, init, (a) => a);
}

// max -> maxKey -> reduce -> forEach -> for

/**
 * p.328
 * 1. 구매 금액 최소 100달러 넘고
 * 2. 두 번 이상 구매한 고객 찾기
 */
function bigSpenders(customers) {
  const purchaseOver100 = customers.filter(isPurchaseOver100);
  const moreThanOnePurchase = purchaseOver100.filter(isMoreThanOnePurchase);

  return moreThanOnePurchase;
}

function isPurchaseOver100(customer) {
  return getPurchaseTotal(customer) > 100;
}

function getPurchaseTotal(customer) {
  return customer.purchases.reduce(plus, 0);
}

function plus(a, b) {
  return a + b;
}

function isMoreThanOnePurchase(customer) {
  return customer.purchases.length > 1;
}

/**
 * p.329
 * 평균을 계산하는 함수 만들기
 */
function average(numbers) {
  return numbers.reduce(plus, 0) / numbers.length;
}

function plus(a, b) {
  return a + b;
}

/**
 * p.330
 */
function averagePurchaseTotals(customers) {
  return customers.map(getAveragePurchaseTotal);
}

function getAveragePurchaseTotal(customer) {
  return average(customer.purchases);
}

/**
 * p.339
 */
function shoesAndSocksInventory(products) {
  const shoesAndSocks = products.filter(isProductTypeShoesOrSocks);
  const inventory = shoesAndSocks.reduce((acc, cur) => plus(acc, cur.numberInInventory), 0);

  return inventory;
}

function isProductTypeShoesOrSocks(product) {
  return product.type === 'shoes' || product.type === 'socks';
}

function plus(a, b) {
  return a + b;
}

/**
 * p.348
 */
const roaster = evaluations.reduce((acc, cur) => {
  if (!acc[cur.position]) acc[cur.position] = cur.name;
  return acc;
}, {});

/**
 * p.349
 */
const recommendations = employeeNames.map(employeeName => ({ name: employeeName, position: recommendPosition(employeeName) }));

/**
 * p.350
 */
const evalutions = recommendations.map(recommendation => ({ ...recommendation, score: scorePlayer(recommendation.name, recommendation.position) }));

/**
 * p.351
 */
const ascendingOrderAtHighScore = sortBy(evalutions, (evalution) => evalution.name);

const ascendingOrderAtLowScore = reverse(ascendingOrderAtHighScore);