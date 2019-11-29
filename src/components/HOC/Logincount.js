
import React, { Component } from "react";
import "./Loading.css";

//https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006
const Logincount = (WrappedComponent) => {

  class HOC extends Component {


    state = {
      localStorageavaliable: false

    }

    componentDidMount() {

      this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
      const testKey = 'test';

      try {
          localStorage.setItem(testKey, testKey);
          localStorage.removeItem(testKey);
          this.setState({ localStorageAvailable: true });
      } catch(e) {
          this.setState({ localStorageAvailable: false });
      } 
    }

    loggedin = (key, data) => {



      if (this.state.localStorageavaliable) {
        return localStorage.getItem(key); 
      } else {
        localStorage.setItem(key, data);
      }
    }

    loggedout = (key) => {
      if (this.state.localStorageavaliable) {
        localStorage.removeItem(key);
      }
    }



    render() {

      return (

        <WrappedComponent {...this.props} login={this.loggedin} logout={this.loggedout} />

      )
    }


  }

  return HOC

}


export default Logincount;