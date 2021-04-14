import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ items }) {
	const expensesContent = <h2>No expenses found!</h2>

	if (items.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found!</h2>
	}

	return (
		<ul className='expenses-list'>
			{items.map((item) => (
				<ExpenseItem 
		          key={item.id} date={item.date} title={item.title} amount={item.amount} />
			))}
		</ul>
	)
	
}

export default ExpensesList