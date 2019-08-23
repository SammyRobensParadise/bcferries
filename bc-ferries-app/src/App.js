import logo from './logo.svg';
import './App.scss';
import React, {
  Component
} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { version, Button } from "antd";
import "antd/dist/antd.css";
export default class AppHandler extends Component {
constructor(props){
  super(props);
  this.state = {
    HasBeenLoaded: false
  }
}
render(){
  return(
    <div>
      <p>This is an  example of the default class</p>
    </div>
  )
}
}