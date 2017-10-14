module.exports = {
    init: init_firebase
}

function init_firebase() {
    const firebase = require('firebase');

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAEmZRfzvfyGmlRWsGvb52oYSsQKj1BX7s",
        authDomain: "doggos-for-world-peace.firebaseapp.com",
        databaseURL: "https://doggos-for-world-peace.firebaseio.com",
        projectId: "doggos-for-world-peace",
        storageBucket: "doggos-for-world-peace.appspot.com",
        messagingSenderId: "400258579410"
    }

    firebase.initializeApp(config)

}