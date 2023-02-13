import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper'
import CiudadPais from '../../components/ciudadPais/ciudadPais'
import styles from './styles'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import { CajaTexto } from '../../components/cajaTexto/cajaTexto'

const PantallaDestino = ({ navigation }) => {
  const [Location, setLocation] = useState({
    Location: '',
  })

  const validation = () => {
    if (Location.Location === '') {
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
            navigation.navigate('Origen')
          }}
        ></Button>
      </View>
      <View style={styles.origenDestino}>
        <Text style={styles.origen}>
          <CiudadPais ciudad="Paris" pais="Francia" />{' '}
        </Text>
        <Text style={styles.iconoAvion}>
          {' '}
          <Button icon="airplane"></Button>{' '}
        </Text>
        <Text style={styles.destino}>
          {' '}
          <CiudadPais ciudad="" pais="" />{' '}
        </Text>
      </View>
      <View style={styles.titulo}>
        <Titulo title="Where will you be flying to?" />
      </View>

      <View style={styles.seleccion}>
        <CajaTexto
          onChangeText={(Text) => setLocation({ ...Location, Location: Text })}
        />
      </View>
      <View style={styles.btn}>
        <BotonSUP
          title="Next"
          disabled={!validation()}
          onPress={() => {
            navigation.navigate('Calendario')
          }}
        />
      </View>
    </View>
  )
}

export default PantallaDestino
