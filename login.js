'use strict'

const datas = getSavedDatas()

// Check data exist
const check = {
    fullName: '',
    password: ''
}

document.querySelector('.form-field').addEventListener('submit', (e) => {
    e.preventDefault()
    check.fullName = e.target.elements.fullName.value
    check.password = e.target.elements.password.value
    checkData(datas, check)
})

document.querySelector('#fg-password').addEventListener('click', (e) => {
    location.assign('fg-password.html')
})

console.log(datas)