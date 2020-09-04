import '@trendspurt/trendspurt-theme/dist/style.css'
import '../styles/styles.scss';

import * as firebase from "firebase/app";


export default function App({ Component, pageProps }) {

  //---
  // Firebase init
  if (!firebase.apps.length) {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBzALiYNOIn_kaKwhV8rJ3m1R3BGia429o",
      authDomain: "septemberplayground.firebaseapp.com",
      databaseURL: "https://septemberplayground.firebaseio.com",
      projectId: "septemberplayground",
      storageBucket: "septemberplayground.appspot.com",
      messagingSenderId: "352952648095",
      appId: "1:352952648095:web:db178cbebc0802d6003daa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

  return <Component {...pageProps} />
}
