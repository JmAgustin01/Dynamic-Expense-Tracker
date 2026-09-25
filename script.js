let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function updateUI() {
    const list = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');
    list.innerHTML = '';
    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;
        list.innerHTML += `
            <li class="expense-item">
                <span>${expense.name}</span>
                <span>₱${expense.amount.toFixed(2)} 
                    <button onclick="deleteExpense(${index})" style="width:auto; padding:2px 5px; background:red; margin-left:10px;">X</button>
                </span>
            </li>`;
    });
    totalAmount.innerText = total.toFixed(2);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function addExpense() {
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (name && amount > 0) {
        expenses.push({ name, amount });
        document.getElementById('expenseName').value = '';
        document.getElementById('expenseAmount').value = '';
        updateUI();
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}

updateUI();