import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBIsLM8n4CUUj6IIUHS7TgxDW9qDhALJm8',
  authDomain: 'sandfall-test.firebaseapp.com',
  databaseURL: 'https://sandfall-test.firebaseio.com',
  projectId: 'sandfall-test',
  storageBucket: 'sandfall-test.appspot.com',
  messagingSenderId: '455503389459'
};

firebase.initializeApp(config);

export default firebase;
