import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Components/Header';
import HomePage from './Components/Pages/Home/HomePage';
import About from './Components/Pages/About/About';
import Register from './Components/Register';
import Footer from './Components/Footer';

// import MenuCategories from "./MenuCategories";
// import SearchBar from "./SearchBar";
// import Filter from "./FilterMenu";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        {/* <Route path="/menu" element={<Menu />} /> */}
                        {/* <Route path="/login" element={<Login />} /> */}
                        <Route path="/register" element={<Register />} />
                        {/* <Route path="/account" element={<Account />} /> */}
                        {/* <Route path="/cart" element={<Cart />} /> */}
                    </Routes>
                </div>

                {/* <MenuCategories /> */}
                {/* <SearchBar /> */}
                {/* <Filter /> */}
                <Footer />
            </BrowserRouter>
        );
    }
}