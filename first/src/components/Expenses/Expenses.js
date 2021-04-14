import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import ExpensesList from '../ExpensesList/ExpensesList'


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
			<ExpensesChart expensesData={filteredExpenses}/>
			<ExpensesList items={filteredExpenses} />
		</div>	
	)
}

export default Expenses
