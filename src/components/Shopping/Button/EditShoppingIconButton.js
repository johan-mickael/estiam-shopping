import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const EditShoppingIconButton = ({id}) => {
  return (
    <Link to={`${id}/edit`}>
    <Button>
      <EditIcon />
    </Button>
    </Link>
  );
};

export default EditShoppingIconButton;
