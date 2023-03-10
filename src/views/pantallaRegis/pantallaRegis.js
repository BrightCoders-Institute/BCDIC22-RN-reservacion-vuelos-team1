import {
  View,
  Text,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { Check } from '../../components/check/check'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'
import { CheckSubscribe } from '../../components/check/checkSubscribe'
import { auth, GoogleSignin } from '../../../firebaseconfig'

export default function PantallaRegis({ navigation }) {
  const [user, setUser] = useState({
    checkout: false,
    firstName: '',
    email: '',
    password: '',
  })

  //validacion campos

  const validation = () => {
    if (user.email === '' || user.password === '' || !user.checkout) {
      return false
    } else {
      return true
    }
  }

  //funcion crear cuenta
  const singUp = () => {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user

        navigation.navigate('Origen')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        Alert.alert(errorCode, errorMessage)
        // ..
      })
  }

  // funcion de inicio con google
  const singInGoogle = async () => {
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
          <CheckSubscribe />
          <Text style={styles.TextoCheck}>
            Subscribe for select product updates
          </Text>
        </View>
      </View>
      <View style={styles.primerBoton}>
        <BotonSUP title="Sign Up" disabled={!validation()} onPress={singUp} />
      </View>
      <View>
        <Text style={styles.TextoOr}>or</Text>
      </View>
      <View style={styles.segundoBoton}>
        <BotonSUG
          title="sign up with google"
          disabled={!validation()}
          onPress={async () => {
            singInGoogle()
          }}
        />
      </View>

      <View>
        <Text style={styles.TextoOr}>
          already have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login')
            }}
          >
            <Text style={styles.TextoLogin}> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  )
}
