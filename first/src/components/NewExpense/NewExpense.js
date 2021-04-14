import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm'

function NewExpense({ onNewExpenseAdd }) {
	const [expenseFormVisible, setExpenseFormVisible] = useState(false);


	const saveExpenseDataHandler = (expenseData) => {
		const updatedExpenseData = {
			...expenseData,
			id: (Math.random() * 10000).toString(),
		}
		onNewExpenseAdd(updatedExpenseData);
	}

	const showExpenseFormHandler = () => {
		setExpenseFormVisible(true);
	}
	const closeExpenseFormHandler = () => {
		setExpenseFormVisible(false);
	}

	return (
		<div className='new-expense'>
			{expenseFormVisible ? (
				<ExpenseForm 
					onSaveExpenseData={saveExpenseDataHandler}
					closeFormHandler={closeExpenseFormHandler}
				 />
			) : 
				<button onClick={showExpenseFormHandler}>New Expense</button>
			}
		</div>
	)
}

export default NewExpense