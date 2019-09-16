import logo from './logo.svg';
import './App.scss';
import textHandler from './__static_class__/-text-handler';
import React, {
  Component
} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { version, Button } from "antd";
import "antd/dist/antd.css";
import Navbar from './components/global/-navigation-bar/Navbar'
export default class AppHandler extends Component {
constructor(props){
  super(props);
  this.state = {
    HasBeenLoaded: false,
    dataHandle: new textHandler()
  }
}
render(){
  return(
    <div>
      <Navbar/>
      <p>This is an  example of the default class</p>
      <p>{textHandler._getData}</p>
      {console.log(textHandler)}
    </div>
  )
}
}