import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../../firebase_config";

const DeleteShoppingButton = ({ ID, name }) => {
  const deleteShopping = async () => {
    await deleteDoc(doc(db, "shoppings", ID));
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure to delete ${name} shopping ?`)) deleteShopping()
  }

  return (
    <Button onClick={ handleDelete }>
      <DeleteIcon color="error" />
    </Button>
  );
};

export default DeleteShoppingButton;
