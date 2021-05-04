import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/";

const Products = (props) => {
  const dispatch = useDispatch();

  const onAddItemHandler = (id, name, price) => {
    dispatch(cartActions.addItem({ id, name, price }));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="test"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          onAddItem={onAddItemHandler}
        />
        <ProductItem
          id="meal"
          title="Meal"
          price={25}
          description="This is a second product - amazing!"
          onAddItem={onAddItemHandler}
        />
      </ul>
    </section>
  );
};

export default Products;
