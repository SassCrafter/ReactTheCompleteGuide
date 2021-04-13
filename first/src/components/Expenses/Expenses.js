import React, { useState } from 'react'
import './Expenses.css'

import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

function Expenses({ expenses }) {
	const [pickedDate, setPickedDate] = useState('2022');

	const filterYearHandler = (e) => {
	    const currentDate = e.target.value;
	    setPickedDate(currentDate);
	 }

	 const filteredExpenses = expenses.filter((item) => item.date.getFullYear() === +pickedDate);

	return (
		<div className='expenses'>
			<ExpensesFilter selectedValue={pickedDate} onFilterYear={filterYearHandler}/>
			{filteredExpenses.map((item) => (
		        <ExpenseItem 
		          key={item.id} date={item.date} title={item.title} amount={item.amount} />
		      ))}
		</div>	
	)
}

export default Expenses
