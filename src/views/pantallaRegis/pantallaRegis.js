import { View, Text, Button, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { Check } from '../../components/check/check'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'
import { CheckSubscribe } from '../../components/check/checkSubscribe'

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { app } from '../../../firebaseconfig'


const auth = getAuth(app)
//proveedor de gugul
const provider = new GoogleAuthProvider()

export default function PantallaRegis({ navigation }) {
  const [user, setUser] = useState({
    checkout: false,
    firstName: '',
    email: '',
    password: '',
  })

  //validacion campos

  const validation = () => {
    if (user.email === '' || user.password === '' || !user.checkout ) {
      return false
    } else {
      return true
    }
  }

  //validacion contra

  function checkpass(srt) {
    const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm
    return user.password.match(re)
  }

  //funcion crear cuenta
  const singUp = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        navigation.navigate('Origen')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        Alert.alert(errorCode, errorMessage)
        // ..
      })
  }

  // funcion de inicio con google
  const singInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        Alert.alert(errorCode, errorMessage)
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    // <CajaTexto />
    <ScrollView style={styles.background}>
      <View>
        <Text style={styles.TextoSing}>Sign Up</Text>
        <Text style={styles.Textoname}> First Name</Text>
        <CajaTexto
          onChangeText={(text) => setUser({ ...user, firstName: text })}
        />
        <Text style={styles.Textocorreo}> Email *</Text>
        <CajaTexto onChangeText={(text) => setUser({ ...user, email: text })} />
        <Text style={styles.TextoPass}> Password *</Text>
        <CajaTextoVisible
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <Text style={styles.Textobajo}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={styles.PrimerCheck}>
          <Check user={user} setUser={setUser} />
          <Text style={styles.TextoCheck}>
            I agree to me Tems and Privacy Policy *
          </Text>
        </View>
        <View style={styles.SegundoCheck}>
          {/* <Check /> */}
          <CheckSubscribe checkout={false}/>
          <Text style={styles.TextoCheck}>
            Subscribe for select product updates
          </Text>
        </View>
      </View>
      <View style={styles.primerBoton}>
        <BotonSUP disabled={!validation()} onPress={singUp} />
      </View>
      <Text style={styles.TextoOr}>----------------or----------------</Text>
      <View style={styles.segundoBoton}>
        <BotonSUG disabled={!validation()} onPress={singInGoogle} />
      </View>
    </ScrollView>
  )
}
