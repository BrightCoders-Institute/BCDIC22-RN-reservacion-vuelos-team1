import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper'
import styles from './styles'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'
import { BotonSUP } from '../../components/botonSUP/botonSUP'

const PantallaOrigen = ({ navigation }) => {
  const [location, setLocation] = useState('')
  const [origen, setOrigen] = useState(0)

  const validation = () => {
    if (location === '') {
      return false
    } else {
      return true
    }
  }

  return (
    <View>
      <View style={styles.btnAtras}>
        <Button
          style={styles.btnBack}
          icon="arrow-left"
          mode="text"
          onPress={() => {
            navigation.navigate('Login')
          }}
        ></Button>
      </View>
      <View style={styles.origenDestino}>
        {/* <Text>Origen - destino</Text> */}
      </View>
      <View style={styles.titulo}>
        <Titulo title="Where are you now?" />
      </View>
      <View style={styles.seleccion}>
        <CajaTexto onChangeText={(text) => setLocation(text)} />
      </View>
      <View style={styles.btn}>
        <BotonSUP
          title="Next"
          disabled={!validation()}
          onPress={() => {
            navigation.navigate('Destino', { origen: location })
          }}
        />
      </View>
    </View>
  )
}

export default PantallaOrigen
