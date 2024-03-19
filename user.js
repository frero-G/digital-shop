'use strict'

const datas = getSavedDatas()
// Setting user name
const userId = location.hash.substring(1)

const data = datas.find((user) => user.id === userId)

try {
    if (data) {
        data.login = true
        document.querySelector('#username').textContent = data.names
    } else {
        document.querySelector('#username').textContent = 'Unknown'
    }
} catch (e) {
    console.log('no data required.')
}

// Account info
const accImg = document.querySelector('#account-img')
const accBox = document.querySelector('.account-info')

try {
    accImg.addEventListener('mouseenter', (e) => {
        accBox.style = 'visibility: visible'
    
        accImg.style = 'visibility: hidden'
    })
    
    accBox.addEventListener('mouseleave', (e) => {
        accBox.style = 'visibility: hidden'
    
        accImg.style = 'visibility: visible'
    })
} catch (e) {
    console.log('this error is for user-dashboard.html')
}

try {
    document.querySelector('#add-product').addEventListener('click', (e) => {
        location.assign(`new-product.html#${userId}`)
    })
} catch (e) {
    console.log('this error is for the new product button.')
}

// Save New Product
const product = getSavedProducts()
const Id = location.hash.substring(1)

const creator = datas.find((data) => data.id === Id)

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
            creater: creator.names
        })
        saveProduct(product)
    })
    
    console.log(product)
    
} catch (e) {
    console.log('this error is for new-product.html')
}

// Back btn
try {
    document.querySelector('#backBtn').addEventListener('click', (e) => {
        location.assign(`user-dashboard.html#${userId}`)
    })
} catch (e) {
    
}

// Logout part
try {
    document.querySelector('#logout-btn').addEventListener('click', (e) => {
        data.login = false
    
        if (data.login === false) {
            location.assign('login.html')
        }
    })
} catch (error) {
    console.log('logout error.')
}