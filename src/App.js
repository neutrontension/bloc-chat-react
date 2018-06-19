import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAnq_96eSfZNKFx2M3q0VhOSXqNXyDyprA",
  authDomain: "bloc-chat-react-b5b60.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-b5b60.firebaseio.com",
  projectId: "bloc-chat-react-b5b60",
  storageBucket: "bloc-chat-react-b5b60.appspot.com",
  messagingSenderId: "808261794787"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chat Rooms</h1>
        {/* accessing ‘.firebase’ inside of the component
          by passing firebase as a prop in order to use
          it inside of RoomList */}
        <RoomList
          firebase={firebase}
          />
      </div>
    );
  }
}

export default App;
