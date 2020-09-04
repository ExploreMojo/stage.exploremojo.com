import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import * as firebase from "firebase/app";
import "firebase/auth";
import FirebaseUI from '../../components/firebase/FirebaseUI';

export default class extends React.Component {
  componentDidMount() {
    console.log('componentDidMount()');
    // Initialize the FirebaseUI Widget using Firebase.
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());

    //<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    if (process.browser) {
      const script = document.createElement('script');
      script.src = "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js";
      script.async = true;
      script.addEventListener('load', () => {
        console.log('ui loaded');
        window.firebase = firebase;
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());    

        ui.start('#firebaseui-auth-container', {
          // callbacks: {
          //   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          //     // User successfully signed in.
          //     // Return type determines whether we continue the redirect automatically
          //     // or whether we leave that to developer to handle.
          //     return true;
          //   },
          //   uiShown: function() {
          //     // The widget is rendered.
          //     // Hide the loader.
          //     document.getElementById('loader').style.display = 'none';
          //   }
          // },
          // // Terms of service url.
          // tosUrl: '<your-tos-url>',
          // // Privacy policy url.
          // privacyPolicyUrl: '<your-privacy-policy-url>'          
          signInFlow: 'popup',
          // signInSuccessUrl: '/playground',
          callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
              console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
              //authResult.additionalUserInfo.newUser
              if (authResult.additionalUserInfo.providerId === 'password') {
                console.log('PROVIDER ID: PASSWORD');
                if (!authResult.user.emailVerified) {
                  console.log('EMAIL NOT VERIFIED');
                  authResult.user.sendEmailVerification({
                    url: '/premium',
                  }).then(function() {
                    // Email sent.
                    console.log('VERIFICATION EMAIL SENT');
                  }).catch(function(error) {
                    // An error happened.
                    console.log('VERIFICATION EMAIL ERROR', error);
                  });                  
                }
              }
            }
          },
          signInOptions: [
            // List of OAuth providers supported.
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID
          ],
          // Other config options...
        });   
        
        var user = firebase.auth().currentUser;
        console.log('user', user);

      })
      document.body.appendChild(script);

  
    }

  }  
  render() {
    return (
      <Layout>
        <Container>
          
          <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />          

          <Headline type="h1" subTitle="">Playground</Headline>
          <Text>
            Work in progress...    
          </Text>

          <div id="firebaseui-auth-container"></div>

        </Container>
        <Spacer height="300"></Spacer>
      </Layout>
    )
  }
}