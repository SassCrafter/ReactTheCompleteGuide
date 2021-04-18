import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";
import "./App.css";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const toggleParagraphHandler = () => {
		setShowParagraph((prevState) => !prevState);
	};
	return (
		<div className="app">
			<h1>Hi there!</h1>
			<Demo show={showParagraph} />
			<Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
		</div>
	);
}

export default App;
