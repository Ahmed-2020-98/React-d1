import React from "react";
import "./Skills.css";
import ProgressBar1 from "../Progress/Progress";

class Skills extends React.Component {
  state = {};
  render() {
    return (
      <>
      <div className="bg-dark">
        <div className=" container skills  ">
          <h1>Skills</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolorem
            alias beatae, animi laudantium incidunt numquam ea nihil aut hic
            praesentium vitae laboriosam reiciendis iste excepturi odio corrupti
            quis totam.
          </p>
          <div className="row sk">
            <div className="col">
              <ul>
                <li>My focus</li>
                <li>UI UX Design</li>
                <li>Responsive Design</li>
                <li>Web design</li>
                <li>Mobile App Design</li>
              </ul>
            </div>
            <div className="col py-4 text-light">
              html
            <ProgressBar1 now="80"/>
            css
            <ProgressBar1 now="60"/>
            js
            <ProgressBar1 now="80"/>
            React
            <ProgressBar1 now="90"/>

            
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Skills;
