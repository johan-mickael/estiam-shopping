import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import DeleteShoppingButton from "../Button/DeleteShoppingButton";
import EditShoppingIconButton from "../Button/EditShoppingIconButton";
import GoToItemsButton from "../Button/GoToItemsButton"
import { Link } from "react-router-dom";

const ShoppingList = ({ shoppings }) => {
  
  return (
    <Box>
      <Paper elevation={1}>
        <Typography
          id="tableTitle"
          padding={1}
          bgcolor="#fdfdfd"
          color="secondary"
        >
          <Link style={{ textDecoration: "inherit" }} to="new">
            <Button color="success" variant="contained">New shopping</Button>
          </Link>
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppings.map((shopping) => (
                <TableRow
                  key={shopping.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {shopping.data().name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {shopping.data().description}
                  </TableCell>
                  <TableCell>
                    {new Date(
                      shopping.data().date.seconds * 1000
                    ).toLocaleDateString("fr-FR")}
                  </TableCell>
                  <TableCell>
                    <Grid item>
                      <GoToItemsButton id={shopping.id} />
                      <EditShoppingIconButton id={shopping.id} />
                      <DeleteShoppingButton
                        ID={shopping.id}
                        name={shopping.data().name}
                      />
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ShoppingList;
