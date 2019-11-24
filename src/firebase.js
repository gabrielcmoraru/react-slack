import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD9I2UdfhPzKX5kqyz79FjNI_0fkk5_aKA",
    authDomain: "react-slack-60c6f.firebaseapp.com",
    databaseURL: "https://react-slack-60c6f.firebaseio.com",
    projectId: "react-slack-60c6f",
    storageBucket: "react-slack-60c6f.appspot.com",
    messagingSenderId: "766213790555",
    appId: "1:766213790555:web:b29d6bf568fd1c3882187e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase