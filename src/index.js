import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './index.css';
import firebase from "firebase/compat";
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyDVvoWyYNUoDj6f6GtWcVl46Z0kwzM5Sg4",
    authDomain: "starry-app-325911.firebaseapp.com",
    projectId: "starry-app-325911",
    storageBucket: "starry-app-325911.appspot.com",
    messagingSenderId: "886443028623",
    appId: "1:886443028623:web:06c9787a2c858b5efec0fa",
    measurementId: "G-WMB5Q3DE0R"
});

export const Context = createContext(null);

const firestore = firebase.firestore();
const auth = firebase.auth()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        firestore,
        auth
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root'))