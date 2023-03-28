import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, getDocs, where, query, collection } from "firebase/firestore";
import db from "../../../firebase_config";

const DeleteShoppingButton = ({ ID, name }) => {
  const deleteShopping = async () => {
    await deleteItemsByShoppingId(ID);
    await deleteDoc(doc(db, "shoppings", ID));
  };

  async function deleteItemsByShoppingId(ID) {
    const q = query(collection(db, 'items'), where('shoppingId', '==', ID));
    const querySnapshot = await getDocs(q);
    console.log(q)
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

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
