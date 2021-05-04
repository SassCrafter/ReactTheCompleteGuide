import { useSelector } from "react-redux";
import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	return (
		<Fragment>
			<Header />
			{!isAuth && <Auth />}
			{isAuth && <Counter />}
		</Fragment>
	);
}

export default App;
