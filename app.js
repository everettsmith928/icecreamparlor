const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
},
{
  name: 'Chocolate',
  price: 1.5,
  quantity: 0
},
{
  name: 'Mint Chocolate Chip',
  price: 1.75,
  quantity: 0
},
{
  name: 'Birthday Cake',
  price: 1.25,
  quantity: 0
},]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]

const cones = [{
  name: 'Waffle Cone',
  quantity: 0,
  price: .25
},
{
  name: 'Waffle Bowl',
  price: .25,
  quantity: 0
},
{
  name: 'Dipped Cone',
  price: .5,
  quantity: 0
}]

// NOTE Here are the declared variables for navigating the DOM

let cart = document.getElementById('cart');
let total = document.getElementById('total');
let template = ''
let increment = 0;

// // NOTE here are the functions for ordering items
// function orderVanilla(flavorOrder) {

//   // Go over the Ice Cream Array
//   // Find the specific item by name..
//   // draw that item to the DOM
// //   console.log('ordering vanilla...')
// //   let template = ''
// //   iceCream.forEach((flavor => {
// //     if (flavor.name == flavorOrder) {
// //       flavor.quantity++;
// //       template += `<div class="col-12 cart-item">
// //           <span id="flavor">${flavor.name}</span>
// //           <span id="toppings">Toppings</span>
// //           <span id=">Vessel</span>
// //         </div>`

// //     }
// //     cart.innerHTML = template;
// //     console.log(template)
// //     totalCost()
// //     drawCart()
// //   })
// //   )
// // }

function orderIceCream(flavorOrder) {
  let foundFlavor = iceCream.find(flavor => flavor.name == flavorOrder)
  foundFlavor.quantity++
  increment++
  drawCart();
  growIceCream()
}

function orderCone(coneOrder) {
  let foundCone = cones.find(cone => cone.name == coneOrder)
  foundCone.quantity++
  increment++
  drawCart()
  growIceCream()
}

function orderTopping(toppingOrder) {
  let foundTopping = toppings.find(topping => topping.name == toppingOrder)
  foundTopping.quantity++
  increment++
  drawCart()
  growIceCream()
}

function drawCart() {

  let template = ''
  iceCream.forEach((flavor => {
    if (flavor.quantity > 0) {
      template += `<div class="col-12 cart-item d-flex justify-content-between border border-white">
          <h1 id="flavor">${flavor.name}</h1>
          <h1>${flavor.quantity}</h1>
          <h1>${flavor.price}</h1>
        </div>`
    }
  }))
  cones.forEach((cone => {
    if (cone.quantity > 0) {
      template += `<div class="col-12 cart-item d-flex justify-content-between border border-success">
          <h1 id="flavor">${cone.name}</h1>
          <h1>${cone.quantity}</h1>
          <h1>${cone.price}</h1>
        </div>`
    }
  }))
  toppings.forEach((topping => {
    if (topping.quantity > 0) {
      template += `<div class="col-12 cart-item d-flex justify-content-between border border-warning">
          <h1 id="flavor">${topping.name}</h1>
          <h1>${topping.quantity}</h1>
          <h1>${topping.price}</h1>
        </div>`
    }
  }))
  cart.innerHTML = template;
  totalCost()
}

// NOTE Here are the cart functions

function totalCost() {
  let totalCost = 0;
  iceCream.forEach((flavor => {
    if (flavor.quantity > 0) {
      totalCost += flavor.price * flavor.quantity;
      totalCost.toFixed(2)
    }
  }))
  cones.forEach((cone => {
    if (cone.quantity > 0) {
      totalCost += cone.price * cone.quantity;
      totalCost.toFixed(2)
    }
  }))
  toppings.forEach((topping => {
    if (topping.quantity > 0) {
      totalCost += topping.price * topping.quantity;
      totalCost.toFixed(2)
    }
  }))
  console.log(totalCost)
  total.innerText = 'Total : $' + totalCost.toString();
}

function checkOut() {
  if (window.confirm('Ready to Checkout?')) {
    iceCream.forEach(flavor => flavor.quantity = 0);
    cones.forEach(cone => cone.quantity = 0);
    toppings.forEach(cone => cone.quantity = 0);
  }
  drawCart()
}

function growIceCream() {
  let iceCreamIcon = document.getElementById('logo');
  iceCreamIcon.innerHTML = `<section class="row">
      <div class="col-12 d-flex justify-content-center"><i style="font-size: ${increment}px !important;" class="mdi mdi-ice-cream logo"></i></div>
    </section>`
}


