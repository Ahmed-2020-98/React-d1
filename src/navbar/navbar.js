
import React from "react";
import './navbar.css'


export default class Navbar extends React.Component{

    constructor(){

        super();

        this.state={
            name:"ali",
            title: "Developer",
            skills:[10,20,30]
        }
    }

    render(){

        return <React.Fragment>
        <div className="navbar">
        
            
            <img src="assets/navbar.jpg"/>


        </div>
        
        </React.Fragment> ;
        
    }
}
