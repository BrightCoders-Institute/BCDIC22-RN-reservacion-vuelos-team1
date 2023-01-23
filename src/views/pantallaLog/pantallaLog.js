import { View, Text, Button } from 'react-native'
import React from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { Check } from '../../components/check/check'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'

export default function PantallaLog() {
  return (
    // <CajaTexto />
    <View style={styles.background}>
      <View>
        <Text style={styles.TextoSing}>Sign Up</Text>
        <Text style={styles.Textoname}> First Name</Text>
        <CajaTexto />
        <Text style={styles.Textocorreo}> Email *</Text>
        <CajaTexto />
        <Text style={styles.TextoPass}> Password *</Text>
        <CajaTextoVisible />
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
        <BotonSUP />
      </View>
      <Text style={styles.TextoOr}>----------------or----------------</Text>
      <View style={styles.segundoBoton}>
        <BotonSUG />
      </View>
      <View>
        <Text style={styles.TextoFuter}>Already have an account? Login</Text>
      </View>
    </View>
  )
}
