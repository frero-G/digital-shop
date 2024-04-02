const datas = getSavedDatas()

try {
    document.querySelector('.fullName').addEventListener('submit', (e) => {
        e.preventDefault()
        const fullName = e.target.elements.fullName.value
        const myData = forgetPassword(datas, fullName)
        location.assign(`new-password.html#${myData.id}`)
    })
} catch (error) {
    console.log(error)
}

const accountId = location.hash.substring(1)

try {
    document.querySelector('.password').addEventListener('submit', (e) => {
        e.preventDefault()
        const Password = e.target.elements.password.value
        const findData = datas.find((info) => info.id === accountId)
        findData.password = Password
        saveDatas(datas)
        location.assign('login.html')
    })
} catch (error) {
    console.log(error)
}

console.log(datas)