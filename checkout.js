'use strict'

const checkoutInfo = getCheckout()

document.querySelector('.checkout-form').addEventListener('submit', (e) => {
    e.preventDefault()
    checkoutInfo.push({
        id: uuidv4(),
        fName: e.target.elements.fName.value,
        lName: e.target.elements.lName.value,
        country: e.target.elements.country.value,
        city: e.target.elements.city.value,
        streetAd: e.target.elements.streetAd.value,
        zipCode: e.target.elements.zipcode.value,
        email: e.target.elements.email.value,
        totalPrice: total+1000,
        items: carts
    })
    saveCheckout(checkoutInfo)
    location.assign("index.html")
})

console.log(checkoutInfo)