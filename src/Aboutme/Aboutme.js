import React from "react";
import "./aboutme.css";

class Aboutme extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="container aboutMe ">
          <div className="row">
            <div className="col-lg-4 ">
              <h1>About Me</h1>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                quaerat dicta, eveniet nisi fuga quod accusantium voluptatum
                repudiandae numquam quos modi inventore! Enim hic eum earum
                voluptatibus fuga ut beatae.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
             <button className="btn btn-dark m-5">Download Resume</button>
          </div>
        </div>
      </>
    );
  }
}

export default Aboutme;
