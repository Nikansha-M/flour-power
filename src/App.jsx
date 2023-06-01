import React, { Component } from "react";
import NavBar from "./NavBar";
import MenuCategories from "./MenuCategories";



export default class App extends Component {
    render(){
        return (
            <React.Fragment>
            <NavBar />
            <MenuCategories />
            </React.Fragment>
        );
    }
}