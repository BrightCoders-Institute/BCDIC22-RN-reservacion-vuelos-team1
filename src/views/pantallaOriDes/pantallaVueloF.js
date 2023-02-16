import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper'
import CiudadPais from '../../components/ciudadPais/ciudadPais'
import styles from './styles'
import WheelPicker from 'react-native-wheely'
import { BotonSUP } from '../../components/botonSUP/botonSUP'
import firestore from '@react-native-firebase/firestore'
import { auth } from '../../../firebaseconfig'

const PantallaVueloF = ({ route, navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const saveFlight = async () => {
    await firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('flights')
      .add({
        origen: route.params.origen,
        destino: route.params.destino,
        fecha: route.params.fecha,
        pasajeros: route.params.pasajeros,
      })
  }

  const onFinish = async () => {
    await saveFlight()
    navigation.navigate('Vuelos')
  }

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
        <View>
          <Text> Passengers {route.params.pasajeros}</Text>
        </View>
        <Titulo title="your request was received" />
      </View>
      <View style={styles.seleccion}></View>
      <View style={styles.btn}>
        <BotonSUP
          title={'Finish'}
          onPress={async () => {
            await onFinish()
          }}
        />
      </View>
    </View>
  )
}

export default PantallaVueloF
