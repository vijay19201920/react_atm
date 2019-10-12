  
import React, { Component } from "react";
import "./Loading.css";

const isEmpty = prop =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

const Loading = loadingProp => WrappedComponent => {
  return class LoadingHOC extends Component {
    componentDidMount() {
      console.log('componentDidMount');
      this.startTimer = Date.now();
    }

    //componentWillUpdate(nextProps) {
     // static getDerivedStateFromProps(nextProps){
      shouldComponentUpdate(nextProps){
      if (!isEmpty(nextProps[loadingProp])) {
        console.log('componentWillUpdate');
        this.endTimer = Date.now();
        return true;
      }
    }

    render() {

      console.log('render');
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };

      return isEmpty(this.props[loadingProp]) ? (
        <div className="loader" >
        { console.log('loader') }
        </div>
      ) : (
        <div>
        <WrappedComponent {...this.props} {...myProps} />
        { console.log(this.props ) }
        </div>
      );
    }
  };
};

export default Loading;