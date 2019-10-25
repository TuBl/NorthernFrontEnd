import Loader from "react-loader-spinner";
import React from "react";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type='Puff'
        color='#d02035'
        height={100}
        width={100}
        timeout={2000} //2 secs
      />
    );
  }
}
