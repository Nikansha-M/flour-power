import React, { Component } from "react";
import NavBar from "./NavBar";
import MenuCategories from "./MenuCategories";
import SearchBar from "./SearchBar";


export default class App extends Component {
    render(){
        return (
            <React.Fragment>
            <NavBar />
            <MenuCategories />
            <SearchBar />
            </React.Fragment>
        );
    }
}