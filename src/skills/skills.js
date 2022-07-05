import React from "react";
import './skills.css';
export default class Skills extends React.Component{

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

        <div className="bg-secondary p-5 d-flex flex-column">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate, voluptates placeat laboriosam natus vitae inventore dolore expedita incidunt sequi, veniam sapiente facilis nemo dolor rem id. Quas, ipsa placeat?</p>

            <div className="">
                <div className="bg-danger"> 

                </div>

                <div className="bg-primary">

                </div>
            </div>


        </div>
        
        </React.Fragment> ;
    }


}