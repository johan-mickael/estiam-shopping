import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import db from "../../../firebase_config";
import Grid from "@mui/material/Grid";
import { addDoc, collection } from "firebase/firestore";
import { Card, CardContent, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const NewItem = ({ shoppingId }) => {
  const { register, handleSubmit, watch, setValue, clearErrors, formState: { errors } } = useForm();

  const itemsRef = db.collection("items");


  // save the item in the db
  const saveItem = async (e) => {
    await addDoc(collection(db, "items"), {
      name: watch('name'),
      shoppingId: shoppingId,
      description: watch('description'),
      status: false,
    });
    resetInputValue()
  }

  const resetInputValue = () => {
    setValue("name", "")
    setValue("description", "")
    clearErrors()
  }

  return (
    <form onSubmit={handleSubmit(saveItem)}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Create new item
        </Typography>

        <Typography variant="body">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                error={errors.name}
                fullWidth
                label="Name"
                autoFocus
                {...register("name", { required: "Please fill the name." })}
                helperText={errors.name && errors.name.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={errors.description}
                fullWidth
                label="Description"
                name="description"
                {...register("description")}
                helperText={errors.description && errors.description.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                Add
              </Button>
            </Grid>
          </Grid>

        </Typography>
      </CardContent>
    </Card>
    </form>
  );
};
export default NewItem;
