function claculateButton() {
    let foodInput = document.getElementById('food-input')
    let rentInput = document.getElementById('rent-input')
    let clothesInput = document.getElementById('clothes-input')
    let totalExpences = document.getElementById('total-expences')
    let foodValue = foodInput.value
    let rentIValue = rentInput.value
    let clothesValue = clothesInput.value

    let total = parseInt(foodValue) + parseInt(rentIValue) + parseInt(clothesValue)
    totalExpences.innerText = total

    //calculate total balance 
    let incomeInput = document.getElementById('income-Input')
    let balanceText = document.getElementById('total-balance')
    let incomeNumber = incomeInput.value
    let expencesNumber = totalExpences.innerText

    //let balanceNumber = balanceText.value
    let incomeTotal = parseInt(incomeNumber) - parseInt(expencesNumber)
    console.log(incomeTotal)
    balanceText.innerText = incomeTotal
    console.log(balanceText.innerText)
}
// calculate total input values
document.getElementById('Calculate-button').addEventListener('click', function () {
    claculateButton()
})

//calculate saving amount 
function calculateSavings() {
    let incomeInput = document.getElementById('income-Input')
    let saveInput = document.getElementById('save-input')
    let saveTotal = (incomeInput.value * saveInput.value) / 100
    let saveAmount = document.getElementById('save-amount')
    saveAmount.innerText = saveTotal

    //calculate remaining balance  
    let balance = document.getElementById('total-balance')
    let remainingBalance = document.getElementById('remaining-balance')
    let balanceNumber = balance.innerText
    let saveAmountNumber = saveAmount.innerText
    let totalremainBalance = parseInt(balanceNumber) - parseInt(saveAmountNumber)
    remainingBalance.innerText = totalremainBalance
}


document.getElementById('saveButton').addEventListener('click', function () {

    calculateSavings()

})