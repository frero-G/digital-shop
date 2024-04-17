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
console.log(product)
try {
    renderProducts(product)
} catch (error) {
    console.log('render products function error.')
}

console.log(datas)

// cart Box
try {
    const cartBox = document.querySelector('.cart-box')
    const ImgCart = document.querySelector('#cart-list')

    ImgCart.addEventListener('mouseenter', (e) => {
        cartBox.style = 'display: block'
    })

    cartBox.addEventListener('mouseleave', (e) => {
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