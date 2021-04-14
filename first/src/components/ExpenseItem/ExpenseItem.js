import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate/ExpenseDate'

function ExpenseItem({ date, title, amount}) {
	return (
		<li className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</li>
	)
}

export default ExpenseItem