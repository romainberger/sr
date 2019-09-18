const firebase = require('firebase/app')
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",
    authDomain: "songriffer.com",
    databaseURL: "https://songriffer.firebaseio.com",
    projectId: "songriffer",
    storageBucket: "",
    messagingSenderId: "246769208094",
    appId: "1:246769208094:web:6a65c6866b23adc4",
}

class Firebase {
    constructor(config) {
        this.firebase = firebase.initializeApp(config)
        this.auth = this.firebase.auth()
    }

    onAuthChange(cb) {
        this.auth.onAuthStateChanged(authUser => {
            cb(authUser)
        })
    }

    signUpWithEmailPassword(email, password) {
        return new Promise((resolve, reject) => {
            this.auth.createUserWithEmailAndPassword(email, password)
                .then(resolve)
                .catch(err => {
                    console.error('########### Error with sign up', err)
                    reject(err)
                })
        })
    }

    signInWithEmailPassword(email, password) {
        return new Promise((resolve, reject) => {
            this.auth.signInWithEmailAndPassword(email, password)
                .then(resolve)
                .catch(err => {
                    console.error('########### Error with sign in', err)
                    reject(err)
                })
        })
    }

    signOut() {
        this.auth.signOut()
    }
}

module.exports = new Firebase(firebaseConfig)
