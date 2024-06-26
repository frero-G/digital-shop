try {
    const products = getSavedProducts()
} catch (error) {
    console.log(error)
}

// Save New Cart
const carts = getSavedCarts()
const prodId = location.hash.substring(1)

console.log(carts)

try {
    const countCarts = document.querySelector('#count')
    
    countCarts.textContent = ''
    countCarts.append(carts.length)
} catch (e) {
    console.log('count carts error')
}

renderCarts(carts)

let total = 0
let subtotal
const totals = carts.forEach((cart) => {
    subtotal = cart.prodPrice * cart.quantity
    total += subtotal
    
})
console.log(total)
document.querySelector('#total').textContent = ''
document.querySelector('#total').textContent = `$${total}`

document.querySelector('#allTotal').textContent = `$${total+1000}`

const productIndex = products.find((product) => product.id === prodId)

console.log(productIndex)

const cartExist = carts.filter((cart) => {
    return cart.prodName.includes(productIndex.name)
})
console.log(cartExist)

let quantityCalc = 1

if (!cartExist.length >= 1) {
    console.log('good')
    try {
        const id = uuidv4()
        
        carts.push({
            id: id,
            prodId: productIndex.id,
            prodName: productIndex.name,
            prodPrice: productIndex.price,
            quantity: quantityCalc,
        })
        saveCart(carts)
        location.assign('cart.html')
    } catch (error) {
        console.log(error)
    }
} else {
    console.log('exist')
}