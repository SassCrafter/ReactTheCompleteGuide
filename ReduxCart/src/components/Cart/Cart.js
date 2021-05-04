import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);
  const dispatch = useDispatch();

  const onAddItemHandler = (id) => {
    dispatch(cartActions.addItem(id));
  };

  const onRemoveItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  return isCartOpen ? (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              item={{
                title: item.name,
                quantity: item.amount,
                total: item.totalPrice,
                price: item.price,
              }}
              onAddItem={onAddItemHandler}
              onRemoveItem={onRemoveItemHandler}
            />
          );
        })}
      </ul>
    </Card>
  ) : null;
};

export default Cart;
