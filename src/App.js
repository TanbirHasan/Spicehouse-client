
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {  Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';

import Inventory from './Pages/Inventory/Inventory';
import Products from './Pages/Products/Products';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddInventory from './Pages/AddInventory/AddInventory';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/manageinventory" element={
          <RequireAuth>
            <ManageInventory/>
          </RequireAuth>
        }></Route>
        <Route path="/addinventory" element={
          <RequireAuth>
            <AddInventory/>
          </RequireAuth>
        }></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
