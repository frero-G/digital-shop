'use strict'

const datas = getSavedDatas()
// Setting user name
try {
    const data = datas.find((user) => user.id === loggedIn[0].id)
    if (data) {
        document.querySelector('#username').textContent = data.names
    } else {
        document.querySelector('#username').textContent = 'Unknown'
    }
    console.log(loggedIn)
} catch (e) {
    console.log('no data required.')
}

// Account info
const loginButton = document.querySelector('#loginBtn')
const container = document.querySelector('.account')
const accImg = document.querySelector('#account-img')
const accBox = document.querySelector('.account-info')

try {
    if (loggedIn == 0) {
        container.style = 'display: none'
        loginButton.style = 'display: block'
    } else {
        loginButton.style = 'display: none'
        container.style = 'display: block'
    }
} catch (error) {
    console.error()
}

try {

    accImg.addEventListener('mouseenter', (e) => {
        accBox.style = 'visibility: visible'
        accImg.style = 'visibility: hidden'
    })
   
    container.addEventListener('mouseleave', (e) => {
        accBox.style = 'visibility: hidden'
        accImg.style = 'visibility: visible'
    })
} catch (e) {
    console.log('this error is for user-dashboard.html')
}

// Save New Product
const product = getSavedProducts()
try {
    let category
    document.querySelector('#selected-item').addEventListener('change', (e) => {
        category = ''
        category = e.target.value
    })
    document.querySelector('.product-form').addEventListener('submit', (e) => {
        const id = uuidv4()
        e.preventDefault()
        product.push({
            id: id,
            name: e.target.elements.productName.value,
            price: e.target.elements.productPrice.value,
            category: category,
            creatorId: loggedIn[0].id
        })
        saveProduct(product)
        location.assign('user-dashboard.html')
    })
    
    console.log(product)
    
} catch (e) {
    console.log('this error is for new-product.html')
}

try {
    const queryValue = location.hash.substring(1)
    renderProducts(product, queryValue)
} catch (error) {
    console.log(error)
}

// Logout part
try {
    document.querySelector('#logout-btn').addEventListener('click', (e) => {
        loggedIn.splice(0, 1)
        saveLoggedIn(loggedIn)
        location.assign('login.html')
    })
} catch (error) {
    console.log(`LOGOUT ERROR: ${error}`)
}

console.log(datas)

// edit product
const productId = location.hash.substring(1)
try {
    const productToBe = product.find((prod) => prod.id === productId)
    const input1 = document.querySelector('#input1')
    const input2 = document.querySelector('#input2')
    const prodCategory = document.querySelector('.edit-item')
    
    input1.value = productToBe.name
    input2.value = productToBe.price
    prodCategory.value = productToBe.category

    input1.addEventListener('input', (e) => {
        productToBe.name = e.target.value
        saveProduct(product)
    })

    input2.addEventListener('input', (e) => {
        productToBe.price = e.target.value
        saveProduct(product)
    })

    prodCategory.addEventListener('click', (e) => {
        productToBe.category = e.target.value
        saveProduct(product)
    })
} catch (err) {
    console.log(err)
}

// cart Box
try {
    const cartBox = document.querySelector('.cart-box')
    const ImgCart = document.querySelector('#cart-list')

    ImgCart.addEventListener('mouseenter', (e) => {
        cartBox.style = 'display: block'
    })

    document.querySelector('.cart').addEventListener('mouseleave', (e) => {
        cartBox.style = 'display: none'
    })
} catch (e) {
    console.log('cart Box error.')
}

// shop nav bar
try {  
    const Arrow1 = document.querySelector('#arrow1')
    const Arrow2 = document.querySelector('#arrow2')
    const optionBox = document.querySelector('.option-box')
    
    optionBox.style = 'display: none'
    Arrow1.style = 'display: none;'
    
    Arrow2.addEventListener('click', (e) => {
        optionBox.style = 'display: block'
        Arrow1.style = 'display: block'
        Arrow2.style = 'display: none'
    })
    
    Arrow1.addEventListener('click', (e) => {
        optionBox.style = 'display: none'
        Arrow1.style = 'display: none'
        Arrow2.style = 'display: block'
    })
} catch (error) {
    console.error();
}