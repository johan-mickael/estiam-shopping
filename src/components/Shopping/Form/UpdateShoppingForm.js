import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../../firebase_config";
import { useForm } from "react-hook-form";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UpdateShoppingForm = () => {
  const [shoppings, setShoppings] = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false)
  let shopping = shoppings.filter((shopping) => shopping.id === id)[0].data();
  const { register, handleSubmit, watch, setValue, clearErrors, formState: { errors } } = useForm();

  const updateShopping = async () => {
    const shoppingRef = doc(db, "shoppings", id);
    await updateDoc(shoppingRef, {
      name: watch("name"),
      description: watch("description")
    })
    // Redirecting to the create shopping form 
    navigate('/shoppings/new')
  }

  /**
   * Detect the id parameters changing
   * Repopulate the edit form with the current shopping clicked to edit
   */
  useEffect(() => {
    clearErrors()
    setValue("name", shopping.name)
    setValue("description", shopping.description)
  }, [id])


  return (
    <form onSubmit={handleSubmit(updateShopping)}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Edit shopping informations
          </Typography>
          <Typography variant="body">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.name}
                  fullWidth
                  name="name"
                  label="Name"
                  autoFocus
                  {...register("name", { required: "Please fill the name." })}
                  helperText={errors.name && errors.name.message}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.description}
                  fullWidth
                  name="description"
                  label="Description"
                  {...register("description")}
                  helperText={errors.description && errors.description.message}
                />
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<ShoppingCartIcon />}
            fullWidth
            type="submit"
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default UpdateShoppingForm;
