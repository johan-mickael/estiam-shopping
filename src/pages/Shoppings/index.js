import "../../App.css";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ShoppingList from "../../components/Shopping/List/ShoppingList";
import db from "../../firebase_config";
import { Outlet } from "react-router-dom";

const Shopping = () => {
  const [shoppings, setShoppings] = useState([]);
  const shoppingsRef = db.collection("shoppings");

  const getShoppings = () =>
    shoppingsRef.onSnapshot((querySnapshot) => {
      let shoppings = [];
      querySnapshot.forEach((doc) => {
        shoppings.push(doc);
      });
      setShoppings(shoppings);
    });

  useEffect(() => {
    getShoppings();
  }, []);

  return (
    <Grid container spacing={3} mt={1}>
      <Grid item sm={8}>
        <ShoppingList shoppings={shoppings} />
      </Grid>
      <Grid item sm={4}>
        <Outlet context={[shoppings, setShoppings]} />
      </Grid>
    </Grid>
  );
};
export default Shopping;
