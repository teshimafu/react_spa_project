import * as firebase from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "homepage-232202.firebaseapp.com",
    databaseURL: "https://homepage-232202.firebaseio.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: "homepage-232202",
    storageBucket: "homepage-232202.appspot.com"
};

firebase.initializeApp(config)

export default firebase