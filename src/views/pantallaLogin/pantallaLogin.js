import { View, Text, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'

import { auth, GoogleSignin } from '../../../firebaseconfig'

export default function PantallaLogin({ navigation }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  //validacion campos

  const validation = () => {
    if (user.email === '' || user.password === '') {
      return false
    } else {
      return true
    }
  }
  const loginGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      const idToken = (await GoogleSignin.signIn()).idToken
      const credential = auth.GoogleAuthProvider.credential(idToken)
      await auth().signInWithCredential(credential)
      navigation.navigate('Vuelos')
    } catch (error) {
      console.log(error)
      if (error instanceof Error) {
        Alert.alert('Error', error.message)
      } else {
        console.error(error)
      }
    }
  }

  //funcion inicio de sesion correo
  const logIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(user.email, user.password)
      navigation.navigate('Origen')
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      Alert.alert(errorCode, errorMessage)
      // ..
    }
  }

  return (
    // <CajaTexto />
    <View style={styles.background}>
      <View>
        <Text style={styles.TextoSing}>Login</Text>
        <Text style={styles.Textocorreo}> Email *</Text>
        <CajaTexto onChangeText={(text) => setUser({ ...user, email: text })} />
        <Text style={styles.TextoPass}> Password *</Text>
        <CajaTextoVisible
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <Text style={styles.Textobajo}>
          Use 6 or more characters with a mix of letters, numbers, and symbols
        </Text>
      </View>
      <View style={styles.primerBoton}>
        <BotonSUP
          title="Login"
          disabled={!validation()}
          onPress={async () => {
            await logIn()
          }}
        />
      </View>

      <Text style={styles.TextoOr}>or</Text>
      <View style={styles.segundoBoton}>
        <BotonSUG
          title="Login with Google"
          disabled={!validation()}
          onPress={async () => {
            await loginGoogle()
          }}
        />
      </View>

      <View>
        <Text style={styles.TextoOr}>
          don't have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Registro')
            }}
          >
            <Text style={styles.TextoRegistra}> Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  )
}
