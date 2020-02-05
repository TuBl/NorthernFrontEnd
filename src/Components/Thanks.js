import React, { useState, useEffect, Fragment } from "react";
import "../assets/CSS/styles.css";
import Loading from "../Components/Loading";
import ReactTimeout from "react-timeout";

const Auth = () => {
  const [state, setState] = useState({
    hidden: true
  });
  const { hidden } = state;
  const toggle = () => {
    setState({ ...state, hidden: false });
  };
  useEffect(() => {
    setTimeout(toggle, 2000);
  }, []);
  return (
    <Fragment>
      {hidden ? (
        <div className="loadingp">
          <div className="loading">
            <Loading></Loading>
          </div>
        </div>
      ) : (
        <div className="bgThx">
          <div clas="container">
            <div className="heading">
              <h1>INTERNSHIP SIGNUP FORM</h1>
              <div className="line"></div>
              <h2>Thanks for your Interest!</h2>
              <p class="pp">
                We will review your application and contact you for addition
                information should your background{" "}
              </p>
              <p class="pp">
                and experience meet the requirements of one of our openings.
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Auth;
