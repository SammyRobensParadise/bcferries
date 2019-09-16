
import React, {
  Component
} from 'react';
import "antd/dist/antd.css";
import config from './config';
import firebase from 'firebase';
export default class textHandler {
constructor(props){
  this.state = {
    HasBeenLoaded: false,
    developers: []
    
  }
  firebase.initializeApp(config);
  console.log(config,"config")
  };


  // Get a reference to the database service
  getUserData = () => {
    console.log("called")
    let ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      console.log(state)
      this.setState(state);
    });
  };
}