import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm'

function NewExpense({ onNewExpenseAdd }) {

	const saveExpenseDataHandler = (expenseData) => {
		const updatedExpenseData = {
			...expenseData,
			id: (Math.random() * 10000).toString(),
		}
		onNewExpenseAdd(updatedExpenseData);
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense