import { withRouter } from 'next/router'
import Layout from '../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

import * as firebase from "firebase/app";
import "firebase/auth";

const options = {
  redirectAfterSignup: 'premium',
  verificationURL: '/verify',
};


export default withRouter(class extends React.Component {
  constructor(props) {
    super();
    this.router = props.router;
  }
  componentDidMount() {
    // Only in browser
    if (process.browser) {
      var that = this;
      // Load Firebase UI (login UI)
      const script = document.createElement('script');
      script.src = "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js";
      script.async = true;
      script.addEventListener('load', () => {
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
          signInSuccessUrl: options.redirectAfterSignup,
          callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
              console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
              // if (authResult.additionalUserInfo.newUser) {
              // }
              if (authResult.additionalUserInfo.providerId === 'password') {
                console.log('PROVIDER ID: PASSWORD');
                if (authResult.user.emailVerified) {
                  return true;
                }
                else {
                  console.log('EMAIL NOT VERIFIED');
                  authResult.user.sendEmailVerification({
                    url: document.location.origin+'/'+options.redirectAfterSignup,
                  }).then(function() {
                    // Email sent.
                    console.log('VERIFICATION EMAIL SENT');
                    that.router.push('/verify');
                  }).catch(function(error) {
                    // An error happened.
                    console.log('VERIFICATION EMAIL ERROR', error);
                  });                  
                }
              }
              else {
                return true;
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
        });   
        
        // var user = firebase.auth().currentUser;
        // console.log('user', user);

      })
      document.body.appendChild(script);
    }
  }  
  render() {
    return (
      <Layout>
        <Container>
          
          <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />          

          <Headline type="h1" subTitle="Access free premium content">Sign up</Headline>

          <Spacer height="100"></Spacer>

          <div id="firebaseui-auth-container"></div>

        </Container>
        <Spacer height="300"></Spacer>
      </Layout>
    )
  }
})