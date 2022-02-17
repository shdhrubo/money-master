const previousTotalExpense = document.getElementById('total-expense');
//expense total function
function expenseTotal(item) {
    const income = document.getElementById('income');
    const incomeValueText = income.value;
    const incomeValue = parseFloat(incomeValueText);
    const expense = document.getElementById(item + '-expense');
    const expenseValueText = expense.value;
    const expenseValue = parseFloat(expenseValueText);
    const totalExpenseText = previousTotalExpense.innerText;
    const totalExpenseValue = parseFloat(totalExpenseText);
    const total = expenseValue + totalExpenseValue;
    previousTotalExpense.innerText = total;
    const balance = document.getElementById('balance');
    balance.innerText = incomeValue - total;
    expense.value = '';

}
//calculate btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    //expense items total
    previousTotalExpense.innerText = 00;
    expenseTotal('food');
    expenseTotal('rent');
    expenseTotal('cloth');
    income.value = '';
})
// function returnBalance(){
//     return balance.innerText;
// }

///save btn
document.getElementById('save-btn').addEventListener('click', function () {
    const balanceTotal = balance.innerText;
    const savePersent = document.getElementById('save-input');
    const persent = savePersent.value;
    const savingAmount = document.getElementById('saving-amount');
    const savingBalance = (balanceTotal * persent) / 100;
    savingAmount.innerText = savingBalance;
    const remainingAmount = document.getElementById('remaining-amount');
    const remaingBalance = balanceTotal - savingBalance;
    remainingAmount.innerText = remaingBalance;
})