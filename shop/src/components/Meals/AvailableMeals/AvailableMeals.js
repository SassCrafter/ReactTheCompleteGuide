import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import useHttp from "../../../hooks/useHttp";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  const mealsIntoArray = (data) => {
    const mealsArr = [];
    for (const key in data) {
      mealsArr.push({
        id: key,
        ...data[key],
      });
    }
    setMeals(mealsArr);
  };

  const { sendRequest, isLoading, error } = useHttp(
    {
      url: "https://react-http-7e725-default-rtdb.firebaseio.com/meals.json",
    },
    mealsIntoArray
  );

  useEffect(() => {
    sendRequest();
  }, []);

  console.log(meals);

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {!isLoading && !error ? (
        <Card>
          <ul>{mealList}</ul>
        </Card>
      ) : isLoading && !error ? (
        <h3 className={classes.Loading}>Loading...</h3>
      ) : (
        <h3 className={classes.Error}>{error}</h3>
      )}
    </section>
  );
}

export default AvailableMeals;
