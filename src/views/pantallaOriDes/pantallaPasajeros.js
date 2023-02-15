import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper'
import CiudadPais from '../../components/ciudadPais/ciudadPais'
import styles from './styles'
import WheelPicker from 'react-native-wheely'
import { BotonSUP } from '../../components/botonSUP/botonSUP'

const PantallaPasajeros = ({ route, navigation }) => {
  const [pasajeros, setPasajeros] = useState(['1', '2', '3', '4'])

  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <View>
      <View style={styles.btnAtras}>
        <Button
          style={styles.btnBack}
          icon="arrow-left"
          mode="text"
          onPress={() => {
            navigation.navigate('Calendario')
          }}
        ></Button>
      </View>
      <View style={styles.origenDestino}>
        <Text style={styles.origen}>
          <CiudadPais ciudad={route.params.origen} pais={route.params.origen} />{' '}
        </Text>
        <Text style={styles.iconoAvion}>
          {' '}
          <Button icon="airplane"></Button>{' '}
        </Text>
        <Text style={styles.destino}>
          {' '}
          <CiudadPais
            ciudad={route.params.destino}
            pais={route.params.destino}
          />{' '}
        </Text>
      </View>
      <View style={styles.titulo}>
        <View>
          <Text>{route.params.fecha}</Text>
        </View>
        <Titulo title="How many passengers?" />
      </View>
      <View style={styles.seleccion}>
        <WheelPicker
          selectedIndex={selectedIndex}
          options={pasajeros}
          onChange={(index) => setSelectedIndex(index)}
        />
      </View>
      <View style={styles.btn}>
        <BotonSUP
          title={'Next'}
          onPress={() => {
            navigation.navigate('RegistroFinalV', {
              origen: route.params.origen,
              destino: route.params.destino,
              fecha: route.params.fecha,
              pasajeros: pasajeros[selectedIndex],
            })
          }}
        />
      </View>
    </View>
  )
}

export default PantallaPasajeros
