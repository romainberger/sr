const firebase = require('firebase/app')
require('firebase/functions')

let firebaseConfig = {
    apiKey: "AIzaSyBrkXIQBEvF9qslWeO91XUUUng3zAH9ZEk",
    authDomain: "songriffer.com",
    databaseURL: "https://songriffer.firebaseio.com",
    projectId: "songriffer",
    storageBucket: "",
    messagingSenderId: "246769208094",
    appId: "1:246769208094:web:6a65c6866b23adc4",
}

if (__DEV__) {
    try {
        firebaseConfig = require('./firebase-config.json')
        console.log('############## staging config');
    }
    catch(e) {}
}

class Firebase {
    constructor(config) {
        this.firebase = firebase.initializeApp(config)
    }

    getSharedFile(uid, publicId) {
        const getSharedFile = firebase.functions().httpsCallable('getSharedFile')

        return getSharedFile({ uid, publicId })
    }
}

export default new Firebase(firebaseConfig)
