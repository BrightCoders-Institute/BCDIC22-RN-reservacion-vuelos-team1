import { View, Text, Button } from 'react-native'
import React from 'react'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { CajaTextoVisible } from '../../components/cajaTextoVisible/cajaTextoVisible'
import styles from './styles'
import { Check } from '../../components/check/check'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { BotonSUG } from '../../components/BotonSUG/botonSUG'

export default function PantallaRegis() {
  return (
    // <CajaTexto />
    <View style={styles.background}>
      <View>
        <Text style={styles.TextoSing}>Login</Text>
        <Text style={styles.Textocorreo}> Email *</Text>
        <CajaTexto />
        <Text style={styles.TextoPass}> Password *</Text>
        <CajaTextoVisible />
        <Text style={styles.Textobajo}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
      </View>
      <View style={styles.primerBoton}>
        <BotonSUP />
      </View>
      <Text style={styles.TextoOr}>----------------or----------------</Text>
      <View style={styles.segundoBoton}>
        <BotonSUG />
      </View>
    </View>
  )
}
