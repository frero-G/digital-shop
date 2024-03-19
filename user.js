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