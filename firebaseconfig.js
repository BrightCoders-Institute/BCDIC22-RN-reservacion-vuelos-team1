// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import Constants from 'expo-constants'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import google from './google-services.json'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjeRpq24LkwrGycuyznLKG8lV6DzNioWQ',
  authDomain: 'vuelos-bc2023.firebaseapp.com',
  projectId: 'vuelos-bc2023',
  storageBucket: 'vuelos-bc2023.appspot.com',
  messagingSenderId: '895789721796',
  appId: '1:895789721796:web:09393f04ee0173a5944191',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Node modules

GoogleSignin.configure({
  webClientId:
    '895789721796-mb4ln0ks5r7lti2u2eh1or38nbrc5r21.apps.googleusercontent.com',
})

export { auth, GoogleSignin }
