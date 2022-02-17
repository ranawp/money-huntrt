//function call of total balance 
function claculateButton() {
    let foodInput = document.getElementById('food-input')
    let rentInput = document.getElementById('rent-input')
    let clothesInput = document.getElementById('clothes-input')
    let totalExpences = document.getElementById('total-expences')
    let foodValue = foodInput.value
    let rentIValue = rentInput.value
    let clothesValue = clothesInput.value

    let incomeInput = document.getElementById('income-Input')
    const errorInput = document.getElementById('error-input')
    if (incomeInput.value > 0 && foodValue > 0 && rentIValue > 0 && clothesValue > 0) {

        let total = parseInt(foodValue) + parseInt(rentIValue) + parseInt(clothesValue)
        totalExpences.innerText = total

        //calculate total balance 

        let balanceText = document.getElementById('total-balance')
        let incomeNumber = incomeInput.value
        let expencesNumber = totalExpences.innerText


        let incomeTotal = parseInt(incomeNumber) - parseInt(expencesNumber)

        balanceText.innerText = incomeTotal


    } else {

        errorInput.classList.remove('d-none')
    }
    // error massage of expences
    const errorExpences = document.getElementById('error-expense')
    if (totalExpences.innerText > incomeInput.value) {
        errorExpences.classList.remove('d-none')
    } else if (totalExpences.innerText < incomeInput.value) {
        errorExpences.classList.add('d-none')
    }
}
// calculate total input values
document.getElementById('Calculate-button').addEventListener('click', function () {
    claculateButton()
})

//function calculate saving amount 
function calculateSavings() {
    let incomeInput = document.getElementById('income-Input')
    let saveInput = document.getElementById('save-input')

    let saveTotal = (incomeInput.value * saveInput.value) / 100
    let saveAmount = document.getElementById('save-amount')
    saveAmount.innerText = saveTotal

    let balanceText = document.getElementById('total-balance')

    //error massage of savings
    const savingsError = document.getElementById('savings-error')
    if (saveAmount.innerText > balanceText.innerText) {
        savingsError.classList.remove('d-none');
    } else {
        savingsError.classList.add('d-none');
        console.log('ok')
    }
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