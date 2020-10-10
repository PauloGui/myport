const Rebase = require('re-base')
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAMCGTEDzSUtL73uMcKNYb1V_8SFRzECZo",
    authDomain: "myport-5acea.firebaseapp.com",
    databaseURL: "https://myport-5acea.firebaseio.com",
    projectId: "myport-5acea",
    storageBucket: "myport-5acea.appspot.com",
    messagingSenderId: "7868007418",
    appId: "1:7868007418:web:e9b4816fc7af3748829a43",
    measurementId: "G-0MCQMMDZP"
}

const app = firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export default config