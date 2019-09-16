
import React, {
  Component
} from 'react';
import "antd/dist/antd.css";
import firebase from 'firebase';
export default class textHandler {
constructor(props){
  this.state = {
    HasBeenLoaded: false
    
  }
  var config = {
    apiKey: "AIzaSyCCL-k7gaqudFe5o1Y78YCfYsYgJ27qMFU",
    authDomain: "https://bc-ferries-dev.firebaseapp.com",
    databaseURL: "https://bc-ferries-dev.firebaseio.com",
    storageBucket: "gs://bc-ferries-dev.appspot.com/"
  };
  firebase.initializeApp(config);
  console.log(config)

  // Get a reference to the database service
 
}
_getData = () => {
    var database = firebase.database().ref('stringReferences');
    console.log("text");
database.on('value', function(snapshot) {
    return database;
});
}
}