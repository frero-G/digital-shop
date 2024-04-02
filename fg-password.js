document.querySelector('.fullName').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.elements.fullName.value)
})