import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import db from "../../../firebase_config";
import Grid from "@mui/material/Grid";
import { addDoc, collection } from "firebase/firestore";
import { Card, CardContent, Typography } from "@mui/material";

const NewItem = ({ shoppingId }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const itemsRef = db.collection("items");


  // save the item in the db
  const saveItem = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "items"), {
      name: itemName,
      shoppingId: shoppingId,
      description: itemDescription,
      status: false,
    });
    setItemName("");
    setItemDescription("");
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Create new item
        </Typography>

        <Typography variant="body">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="ItemName"
                required
                fullWidth
                id="itemName"
                label="Enter the Item's name"
                autoFocus
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="itemDecription"
                required
                fullWidth
                multiline
                rows={3}
                id="itemDecription"
                label="A brief description of the Item"
                value={itemDescription}
                onChange={(e) => {
                  setItemDescription(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={(e) => {
                  saveItem(e);
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>

        </Typography>
      </CardContent>
    </Card>
  );
};
export default NewItem;
