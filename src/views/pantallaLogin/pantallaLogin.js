import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { Check } from '../../components/check/check'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../../firebaseconfig'



const auth = getAuth(app)

export default function PantallaLogin({navigation}) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  //funcion inicio de sesion correo
  const logIn = (navigation) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
    navigation.navigate('Origen')
    
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
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
      </View>
      <View style={styles.primerBoton}>
        <BotonSUP onPress={()=>{logIn(navigation)}} />
      </View>
      <Text style={styles.TextoOr}>----------------or----------------</Text>
      <View style={styles.segundoBoton}>
        <BotonSUG />
      </View>
    </View>
  )
}
