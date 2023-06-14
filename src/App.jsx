import React, { Component } from "react";
import NavBar from "./NavBar";
import MenuCategories from "./MenuCategories";
import SearchBar from "./SearchBar";
import Filter from "./FilterMenu";


export default class App extends Component {
    render(){
        return (
            <React.Fragment>
            <NavBar />
            <MenuCategories />
            <SearchBar />
            <Filter />
            </React.Fragment>
        );
    }
}