import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Shopping from "./pages/Shoppings";
import NewItem from "./components/Items/Form/newitem";
import Navbar from "./pages/Navbar";
import { Container } from "@mui/material";
import UpdateShoppingForm from "./components/Shopping/Form/UpdateShoppingForm";
import NewShoppingForm from "./components/Shopping/Form/NewShoppingForm";
import Items from "./pages/Items";

function App() {
  return (
    <div className="App" style={{background: '#f1f1f1', minHeight: '100vh'}}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Navigate to="/shoppings" />}></Route>
            <Route path="/shoppings" element={<Shopping />}>
              <Route path="new" element={<NewShoppingForm />} />
              <Route path=":id/edit" element={<UpdateShoppingForm />} />
            </Route>
            <Route path="/shoppings/:shoppingId/items" element={<Items />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}
export default App;