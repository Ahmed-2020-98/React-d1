import React from "react";
import './navbar.css';

export default class Navbar extends React.Component{


    render(){
        return(
            <>
            <div className="header d-flex align-items-center">
                <div className="container d-flex justify-content-md-start justify-content-center">
                    <div className="content mx-5">
                        <h1>Katie Reed</h1>
                        <p>Web developer & Designer</p>
                        <button className="custom-btn  btn-16"> Contact Us</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}