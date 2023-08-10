import React, { Component } from "react";
import Navbar from './Components/Navbar';
import MenuCategories from "./MenuCategories";
import SearchBar from "./SearchBar";
import Filter from "./FilterMenu";
import Footer from './Components/Footer';
import './App.css';
import HomePage from './Components/Pages/Home/HomePage';
import About from './Components/Pages/About/About';
import { Route, Routes } from 'react-router-dom';


export default class App extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<MenuCategories />} />
                        {/* <Route path="/account" element={<Account />} /> */}
                        {/* <Route path="/cart" element={<Cart />} /> */}
                    </Routes>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}