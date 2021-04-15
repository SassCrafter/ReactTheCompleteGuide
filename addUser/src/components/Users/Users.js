import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import Card from "../UI/Card/Card";

function Users({ items, onDeleteUser }) {
	console.log(items);
	const returnElement =
		items.length > 0 ? (
			items?.map((item) => (
				<User
					key={item.id}
					id={item.id}
					userName={item.name}
					userAge={item.age}
					onDeleteUser={onDeleteUser}
				/>
			))
		) : (
			<h3 className={classes.Message}>No users found!</h3>
		);
	return <Card>{returnElement}</Card>;
}

export default Users;
