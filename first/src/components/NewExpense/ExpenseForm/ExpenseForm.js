import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm({ onSaveExpenseData }) {
	// const [title, setTitle] = useState('');
	// const [amount, setAmount] = useState('');
	// const [date, setDate] = useState('');

	// const titleChangeHandler = (e) => {
	// 	setTitle(e.target.value);
	// }
	// const amountChangeHandler = (e) => {
	// 	setAmount(e.target.value);
	// }
	// const dateChangeHandler = (e) => {
	// 	setDate(e.target.value);
	// }

	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});


	const inputChangeHandler = (e) => {
		const inputName = e.target.name;
		console.log(inputName);
		setUserInput((prevState) => (
			{
			...prevState,
			[inputName]: e.target.value,
		}
		))
	}

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: userInput.title,
			amount: userInput.amount,
			date: new Date(userInput.date),
		}

		onSaveExpenseData(expenseData);

		setUserInput({
			title: '',
			amount: '',
			date: '',
		})
	}
	
	

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type='text' value={userInput.title} name='title' placeholder="Enter Title"
					 onChange={inputChangeHandler}
					 />	
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type='number' value={userInput.amount} name='amount' placeholder="Enter Amount"
					 min='0.01' step='0.01' onChange={inputChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type='date' value={userInput.date} name='date' min='2019-01-01' max='2022-12-31'
					 onChange={inputChangeHandler} />
				</div>
				<div className="new-expense__actions">
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm