'use strict'

const datas = getSavedDatas()

document.querySelector('.form-field').addEventListener('submit', (e) => {
    e.preventDefault()
    datas.push({
        id: uuidv4(),
        names: e.target.elements.names.value,
        password: e.target.elements.password.value,
        login: false
    })
    saveDatas(datas)
    location.assign('login.html')
})