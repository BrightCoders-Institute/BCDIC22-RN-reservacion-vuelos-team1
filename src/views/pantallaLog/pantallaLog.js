import { View, Text, Button, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { Check } from '../../components/check/check'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {app} from '../../../firebaseconfig'

const auth = getAuth(app)
//proveedor de gugul
const provider = new GoogleAuthProvider();

export default function PantallaLog() {
  
  const [user, setUser] = useState({
    firstName:'',
    email:'',
    password:''
  })

  //funcion crear cuenta
  const singUp = ( ) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  }

  //funcion inicio de sesion correo 
  const logIn = ( ) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  }
  
 // funcion de inicio con google
  const singInGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
 

  return (
    // <CajaTexto />
    <ScrollView style={styles.background}>
      <View>
        <Text style={styles.TextoSing}>Sign Up</Text>
        <Text  style={styles.Textoname}> First Name</Text>
        <CajaTexto onChangeText={(text) => setUser({...user, firstName:text})}/>
        <Text  style={styles.Textocorreo}> Email *</Text>
        <CajaTexto onChangeText={(text) => setUser({...user, email:text})}/>
        <Text style={styles.TextoPass}> Password *</Text>
        <CajaTextoVisible onChangeText={(text) => setUser({...user, password:text})}/>
        <Text style={styles.Textobajo}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={styles.PrimerCheck}>
          <Check />
          <Text style={styles.TextoCheck}>
            I agree to me Tems and Privacy Policy *
          </Text>
        </View>
        <View style={styles.SegundoCheck}>
          <Check />
          <Text style={styles.TextoCheck}>
            Subscribe for select product updates
          </Text>
        </View>
      </View>
      <View style={styles.primerBoton}>
        <BotonSUP onPress={singUp} />
      </View>
      <Text style={styles.TextoOr}>----------------or----------------</Text>
      <View style={styles.segundoBoton}>
        <BotonSUG onPress={singInGoogle}/>
      </View>
    </ScrollView>
  )
}
