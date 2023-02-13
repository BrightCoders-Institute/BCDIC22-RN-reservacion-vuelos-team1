import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper'
import CiudadPais from '../../components/ciudadPais/ciudadPais'
import styles from './styles'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import { BotonSUP } from '../../components/botonSUP/botonSUP'

const PantallaCalendario = ({ navigation }) => {
  const [day, setDay] = useState('')

  return (
    <View style={styles.background}>
      <View style={styles.btnAtras}>
        <Button
          style={styles.btnBack}
          icon="arrow-left"
          mode="text"
          onPress={() => {
            navigation.navigate('Destino')
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
          <CiudadPais ciudad="Madrid" pais="España" />{' '}
        </Text>
      </View>
      <View style={styles.titulo}>
        <Titulo title="Select date" />
      </View>
      <View style={styles.seleccion}>
        <Calendar
          markedDates={{
            [day]: {
              selected: styles.markedDates.selected,
              selectedColor: styles.markedDates.selectedColor,
            },
          }}
          onDayPress={(day) => setDay(day.dateString)}
          minDate={moment().format('YYYY-MM-DD')}
        />
      </View>
      <View style={styles.btn}>
        <BotonSUP
          title="Next"
          onPress={() => {
            navigation.navigate('Pasajeros')
          }}
        />
      </View>
    </View>
  )
}

export default PantallaCalendario
