import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (newUser) => {
		console.log(newUser);
		setUsers((prevState) => [...prevState, newUser]);
	};

	const deleteUserHandler = (id) => {
		setUsers((prevState) => {
			const userIndex = prevState.findIndex((user) => user.id === id);
			const copy = [...prevState];
			copy.splice(userIndex, 1);
			return copy;
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<Users items={users} onDeleteUser={deleteUserHandler} />
		</div>
	);
}

export default App;
