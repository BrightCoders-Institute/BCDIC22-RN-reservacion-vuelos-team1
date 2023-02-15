import Constants from 'expo-constants'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import google from './google-services.json'

GoogleSignin.configure({
  webClientId:
    '895789721796-mb4ln0ks5r7lti2u2eh1or38nbrc5r21.apps.googleusercontent.com',
})

export { auth, GoogleSignin }
