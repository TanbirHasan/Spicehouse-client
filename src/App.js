
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

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/inventory/:id" element={<Inventory/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
    

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
