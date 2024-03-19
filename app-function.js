'use strict'

// Get Saved Datas
const getSavedDatas = () => {
    const datasJSON = localStorage.getItem('datas2')
    try {
        return datasJSON ? JSON.parse(datasJSON) : []
    } catch (g) {
        return []
    }
}

// Save Datas
const saveDatas = (datas) => {
    localStorage.setItem('datas2', JSON.stringify(datas))
}

// Check Data
const checkData = (datas, check) => {
    const nameValidation = document.querySelector('#names')
    const passwordValidation = document.querySelector('#password')

    const index = datas.findIndex(function (data, index) {
        const fullNameIndex = data.names.toLowerCase() === check.fullName.toLowerCase()

        // fullName validation
        nameValidation.textContent = ''
        if (fullNameIndex < 1) {
            nameValidation.textContent = 'incorrect names'
        } else {
            return fullNameIndex
        }
        
    })
    
    console.log(index)
    
    // Password validation
    passwordValidation.textContent = 'Enter password'
    if (datas[index].password.toLowerCase() !== check.password.toLowerCase()) {
        passwordValidation.textContent = 'Incorrect password'
    } else {
        // passwordValidation.textContent = 'Your data is valid, you welcome'
        datas[index].login = true
        location.assign(`user-dashboard.html#${datas[index].id}`)
    }
}

// saveProducts
const saveProduct = function (product) {
    localStorage.setItem('products2', JSON.stringify(product))
}

// Get Saved Products
const getSavedProducts = function () {
    const productsJSON = localStorage.getItem('products2')

    if (productsJSON !== null) {
        return JSON.parse(productsJSON)
    } else {
        return []
    }
}

// Render Products
const renderProducts = (product) => {
    product.forEach(function (info) {
        const productEl = generateProductDOM(info)
        document.querySelector('.con').appendChild(productEl)
    })
    console.log(product)
}

// generate product DOM
const generateProductDOM = function (datas) {
    const emptyDiv = document.createElement('div')
    const productDetailsDiv = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')
    const price = document.createElement('span')
    const btn = document.createElement('a')
    const creatorN = document.createElement('span')

    img.setAttribute('src', 'img/group-33.jpg')
    img.setAttribute('alt', 'product picture')
    emptyDiv.appendChild(img)

    // setup name span
    name.setAttribute('id', 'name')
    name.setAttribute('name', 'zz')
    name.textContent = datas.name
    emptyDiv.appendChild(name)

    // setup price span
    price.setAttribute('id', 'price')
    price.textContent = `$${datas.price}`
    productDetailsDiv.appendChild(price)

    // setup AddCart button
    btn.setAttribute('id', 'addCart')
    btn.setAttribute('href', `cart.html#${datas.id}`)
    btn.textContent = 'Add To Cart'
    productDetailsDiv.appendChild(btn)

    // setup creator name
    if (!datas.creater) {
        creatorN.textContent = 'unknown'
    } else {
        creatorN.textContent = datas.creater
    }
    productDetailsDiv.appendChild(creatorN)

    // setup products details DIV
    productDetailsDiv.setAttribute('class', 'product-details')
    emptyDiv.setAttribute('class', 'element')
    productDetailsDiv.addEventListener('mouseenter', (e) => {
        price.style = 'display: none'
        btn.style = 'display: block'
    })

    productDetailsDiv.addEventListener('mouseleave', (e) => {
        btn.style = 'display: none'
        price.style = 'display: block'
    })

    emptyDiv.appendChild(productDetailsDiv)

    return emptyDiv
}

// saveCarts
const saveCart = function (cart) {
    localStorage.setItem('carts', JSON.stringify(cart))
}

// Get Saved Cart
const getSavedCarts = function () {
    const cartJSON = localStorage.getItem('carts')

    if (cartJSON !== null) {
        return JSON.parse(cartJSON)
    } else {
        return []
    }
}