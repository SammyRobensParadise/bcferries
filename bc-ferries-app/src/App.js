import logo from './logo.svg';
import './App.css';
import React, {
  Component
} from 'react';

export default class AppHandler extends Component {
constructor(props){
  super(props);
  this.state = {
    isActive: true
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