import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg from '../../images/bg.svg';
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <br/><br/>
            <img src={bg} alt='' style={{height:300}}/>
            <h4>
              <b>Built</b> a user-auth app with{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Created a (minimal)full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;