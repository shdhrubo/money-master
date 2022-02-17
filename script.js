//global declearation 
const previousTotalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');
const income = document.getElementById('income');
const food = document.getElementById('food-expense');
const rent = document.getElementById('rent-expense');
const cloth = document.getElementById('cloth-expense');
//calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    if (checkInteger()) {
        alert('Enter positive value only!');
    }
    else {
        previousTotalExpense.innerText = 00;
        const totalExpense = totalCalculatExpense();
        previousTotalExpense.innerText = totalExpense;
        balance.innerText = Number(income.value) - totalExpense;
    }
    income.value = '';
    food.value = '';
    rent.value = '';
    cloth.value = '';
})
//function for calculate expense total
function totalCalculatExpense() {
    const total = Number(food.value) + Number(rent.value) + Number(cloth.value);
    return total;
}
//function to check integer
function checkInteger(){
  return  (Number(income.value) <= 0 || Number(food.value) <= 0 || Number(rent.value) <= 0 || Number(cloth.value) <= 0);
}

///save btn
document.getElementById('save-btn').addEventListener('click', function () {
    const balanceTotal = balance.innerText;
    const savePersent = document.getElementById('save-input');
    const persent = savePersent.value;
    if (persent < 0) {
        alert('Enter positive numbers to save!');
        savePersent.value = '';
    }

    else if (persent > 100) {
        alert('You can"t save more than you have!');
        savePersent.value = '';
    }
    else {
        const savingAmount = document.getElementById('saving-amount');
        const savingBalance = (balanceTotal * persent) / 100;
        savingAmount.innerText = savingBalance;
        const remainingAmount = document.getElementById('remaining-amount');
        const remaingBalance = balanceTotal - savingBalance;
        remainingAmount.innerText = remaingBalance;

    }

})