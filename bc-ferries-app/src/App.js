import logo from './logo.svg';
import './App.css';
import React, {
  Component
} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

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