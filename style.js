document.getElementById('Calculate-button').addEventListener('click', function () {
    // calculate total input values
    let foodInput = document.getElementById('food-input')
    let rentInput = document.getElementById('rent-input')
    let clothesInput = document.getElementById('clothes-input')
    let totalExpences = document.getElementById('total-expences')
    let total = Number(foodInput.value) + Number(rentInput.value) + Number(clothesInput.value)
    totalExpences.innerText = total

    //calculate total balance 
    let incomeInput = document.getElementById('incomeInput')
    let balance = document.getElementById('total-balance')
    let totalBalance = Number(incomeInput.value) - Number(total)
    balance.innerText = totalBalance

})

document.getElementById('saveButton').addEventListener('click', function () {
    //calculate saving amount 
    let incomeInput = document.getElementById('incomeInput')
    let saveInput = document.getElementById('saveInput')
    let saveTotal = (incomeInput.value * saveInput.value) / 100
    let saveAmount = document.getElementById('save-amount')
    saveAmount.innerText = saveTotal

    //calculate remaining balance  
    let balance = document.getElementById('total-balance')
    let remainingBalance = document.getElementById('remaining-balance')
    remainingBalance.innerText = Number(balance.innerText) - Number(saveAmount.innerText)
})