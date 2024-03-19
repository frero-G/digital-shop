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