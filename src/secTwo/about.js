import React from "react";
import './about.css';
export default class About extends React.Component{

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
            <div className="bg-light">

            <div className="bg-light d-flex align-items-center about">
                <h1 className="px-5">About me</h1>
                <p className="px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe voluptatem obcaecati, iure beatae quas ut aut vitae culpa placeat aliquid consectetur labore animi, voluptatibus, molestiae cumque libero? Animi, architecto!</p>
                
            </div>

                <button className="btn btn-primary mx-5">Download Resume</button>
            </div>
            
        
        </React.Fragment> ;
    }


}