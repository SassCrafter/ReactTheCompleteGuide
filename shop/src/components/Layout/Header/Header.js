import React from "react";
import styles from "./Header.module.css";
import BannerImg from "../../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

function Header({ onShowCart }) {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={onShowCart} />
			</header>
			<div className={styles["main-image"]}>
				<img src={BannerImg} alt="meals" />
			</div>
		</React.Fragment>
	);
}

export default Header;
