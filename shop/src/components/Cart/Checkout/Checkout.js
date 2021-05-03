import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim === "";

const lessThanFive = (value) => value.trim.length < 5;

function Checkout({ cancelHandler }) {
	const nameRef = useRef();
	const streetRef = useRef();
	const postalRef = useRef();
	const cityRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredName = nameRef.current.value;
		const enteredStreet = streetRef.current.value;
		const enteredPostal = postalRef.current.value;
		const enteredCity = cityRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredPostalIsValid = !lessThanFive(enteredPostal);

		const formIsValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredCityIsValid &&
			enteredPostalIsValid;
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityRef} />
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
}

export default Checkout;
