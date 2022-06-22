import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MenuPage from "./pages/MenuPage";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Nav from "./components/Nav";
import GlobalStyles from "./GlobalStyles";
import { commerce } from './lib/commerce';


function App() {

    const [products, setProducts ] = useState([]);
    const fetchProducts = async () => {

      try {

        const { data }  = await commerce.products.list()

        setProducts( data );

      }catch(error) {

        console.log(error);
      }

      
    }


    useEffect(() => {

      fetchProducts();

      

    },[])
  return (
    <div className="App">
      <GlobalStyles />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage products={ products }/>} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
