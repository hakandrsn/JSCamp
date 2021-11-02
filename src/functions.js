function addToCart(quantity, productName = "elma") {
    console.log("sepete eklendi! " + productName + " adet : " + quantity)
}

addToCart()
addToCart(12)

let sayHello = () => {
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

let product1 = {productName:"armut",unitPrice:24,quantity:2}

function addToCart2(productName, quantity, unitPrice) {
//bu kullanım hoş değil
}

function addToCart3(product) {
console.log("ürün : " +product.productName)
console.log("fiyat : " + product.unitPrice)
console.log("adet : "+ product.quantity)
// bu kullanım adamdır.
}

addToCart3(product1)

function addToCart4(products) {
    console.log(products)
}
let products=[
    {productName:"armut",unitPrice:4,quantity:42},
    {productName:"elma",unitPrice:5,quantity:22},
    {productName:"muz",unitPrice:19,quantity:25},
    {productName:"avakado",unitPrice:27,quantity:3}

]
addToCart4(products)