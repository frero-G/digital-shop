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

// catch login username
const getSavedLoggedIn = () => {
    const loggedData = localStorage.getItem('log2')
    try {
        return loggedData ? JSON.parse(loggedData) : []
    } catch (error) {
        return []
    }
}

const saveLoggedIn = (log) => {
    localStorage.setItem('log2', JSON.stringify(log))
}

const loggedIn = getSavedLoggedIn()

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
        const Exist = loggedIn.find((log) => log.id === datas[index].id)
        if (Exist) {
            location.assign(`user-dashboard.html#${loggedIn[0].id}`)
        } else if(!Exist && loggedIn.length === 0) {
            loggedIn.push({
                id: datas[index].id
            })
            saveLoggedIn(loggedIn)
            location.assign(`user-dashboard.html#${loggedIn[0].id}`)
        } else {
            console.log("there is another account logged in")
        }
    }
}

const forgetPassword = (accounts, fullName) => {
    return accounts.find((data) => data.names.toLowerCase() === fullName.toLowerCase())
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
    creatorN.classList.add('last-child')
    if (!datas.creatorId) {
        creatorN.textContent = 'unknown'
    } else {
        const accounts = getSavedDatas()
        const creator = accounts.find((user) => user.id === datas.creatorId)
        creatorN.textContent = creator.names
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

// saveCarts
const saveCart = function (cart) {
    localStorage.setItem('carts2', JSON.stringify(cart))
}

// Get Saved Cart
const getSavedCarts = function () {
    const cartJSON = localStorage.getItem('carts2')

    if (cartJSON !== null) {
        return JSON.parse(cartJSON)
    } else {
        return []
    }
}

// render Carts
const renderCarts = (cart) => {
    cart.forEach(function (Info) {
        const cartEl = generateCartDOM(Info)
        const tableEl = generateCartTableDOM(Info)
        try {
            document.querySelector('.content1').appendChild(cartEl)
        } catch(error) {
            console.error();
        }

        try {
            document.querySelector('.cartStore').appendChild(tableEl)
        } catch (error) {
            console.error();
        }
    })

    try {
        if (cart.length >= 2) {
        document.querySelector('.content1').style = 'height: 25rem; overflow-y: scroll;'
        }
    } catch (error) {
        console.error();
    }

    try {
        if (cart.length <= 0) {
        document.querySelector('.box').style = 'display: none'
        document.querySelector('.emppty-div').style = 'display: block'
        }
    } catch (error) {
        console.error();
    }
}

// generate Cart DOM
const generateCartDOM = function (cart) {
    const productDiv = document.createElement('div')
    const img = document.createElement('img')
    const cartDetailsDiv = document.createElement('div')
    const emptyDiv = document.createElement('div')
    const cartName = document.createElement('span')
    const cartPrice = document.createElement('span')
    const closeBtn = document.createElement('img')

    img.setAttribute('src', 'img/group-33.jpg')
    img.setAttribute('alt', 'product picture')
    img.setAttribute('id', 'prod-img')
    productDiv.appendChild(img)

    cartDetailsDiv.setAttribute('class', 'cart-details')
    productDiv.appendChild(cartDetailsDiv)

    cartDetailsDiv.appendChild(emptyDiv)

    // setup Cart Name
    cartName.setAttribute('id', 'cart-name')
    cartName.textContent = cart.prodName
    emptyDiv.appendChild(cartName)

    // setup Cart Price
    cartPrice.setAttribute('id', 'cart-price')
    cartPrice.textContent = `${cart.quantity} * ${cart.prodPrice}`
    emptyDiv.appendChild(cartPrice)

    // setup Close Button
    closeBtn.setAttribute('src', 'icons/close_48px.png')
    closeBtn.setAttribute('alt', 'close')
    closeBtn.setAttribute('id', 'close')
    closeBtn.addEventListener('click', function (e) {
        removeCart(cart.id)
        saveCart(carts)
        renderCarts(carts)
    })
    cartDetailsDiv.appendChild(closeBtn)

    productDiv.setAttribute('class', 'product')

    return productDiv
}

let newQuantity

const generateCartTableDOM = function (cart) {
    // const tbody = document.querySelector('.cartStore')
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    const td6 = document.createElement('td')
    const imgClose = document.createElement('img')
    const prodImg = document.createElement('img')
    const quantityInput = document.createElement('input')

    // setup img close
    imgClose.setAttribute('src', 'icons/close_48px.png')
    imgClose.setAttribute('alt', 'delete cart')
    imgClose.setAttribute('id', 'tdClose')
    imgClose.addEventListener('click', function (e) {
        removeCart(cart.id)
        saveCart(carts)
        location.assign('cart.html')
    })
    td1.append(imgClose)
    tr.appendChild(td1)

    // setup img close
    prodImg.setAttribute('src', 'img/group-33.jpg')
    prodImg.setAttribute('alt', 'product picture')
    td2.append(prodImg)
    tr.appendChild(td2)

    td3.textContent = cart.prodName
    tr.appendChild(td3)

    td4.textContent = `$${cart.prodPrice}`
    tr.appendChild(td4)

    // setup quantity input
    quantityInput.setAttribute('type', 'number')
    quantityInput.setAttribute('id', 'newQuantity')
    quantityInput.setAttribute('value', cart.quantity)
    quantityInput.setAttribute('min', 1)
    quantityInput.addEventListener('click', (e) => {
        newQuantity = ''
        newQuantity = e.target.value
        changeQuantity(cart.id, newQuantity)
    })

    try {
        document.querySelector('#updateBtn').addEventListener('click', (e) => {
            saveCart(carts)
            location.assign('cart.html')
        })
    } catch (error) {
        console.error();
    }

    td5.append(quantityInput)
    tr.appendChild(td5)

    td6.textContent = `$${cart.quantity*cart.prodPrice}`
    tr.appendChild(td6)

    // tbody.appendChild(tr)

    return tr
}

// remove Cart
const removeCart = (cartId) => {
    const cartIndex = carts.findIndex(function (cart) {
        return cart.id === cartId
    })

    if (cartIndex > -1) {
        carts.splice(cartIndex, 1)
    }
}

// change Quantity
const changeQuantity = (cartId, newQuantity) => {
    const cartIndex = carts.findIndex(function (cart) {
        return cart.id === cartId
    })

    if (cartIndex > -1) {
        carts[cartIndex].quantity = newQuantity
    }
}

// checkout Info
const saveCheckout = function (info) {
    localStorage.setItem('checkout2', JSON.stringify(info))
}

const getCheckout = function () {
    const checkoutJSON = localStorage.getItem('checkout2')

    if (checkoutJSON !== null) {
        return JSON.parse(checkoutJSON)
    } else {
        return []
    }
}