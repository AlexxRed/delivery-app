import './App.css';
import { Routes, Route } from "react-router-dom";
import { refs } from "../../services/refs";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage"
import ShopsPage from "../../pages/ShopsPage/ShopsPage"
import ShoppingCartPage from "../../pages/ShoppingCartPage/ShoppingCartPage"


function App() {
  return (
    <>
      <Routes>
        <Route path={refs.layout} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={refs.shopsPage} element={<ShopsPage />} />
          <Route path={refs.shoppingCartPage} element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
