import { View, Text } from 'react-native'
import React from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper';
import CiudadPais from '../../components/ciudadPais/ciudadPais';
import styles from './styles';
import { Calendar } from 'react-native-calendars';


const PantallaCalendario = () => {
  return (
    <View>
      <View style={styles.btnAtras}>
        <Button style={styles.btnBack} icon="arrow-left" mode="text" >

        </Button>
      </View>
      <View style={styles.origenDestino} >

        <Text style={styles.origen}><CiudadPais ciudad='Paris' pais='Francia' /> </Text>
        <Text style={styles.iconoAvion}> <Button icon="airplane" ></Button> </Text>
        <Text style={styles.destino}> <CiudadPais ciudad='Madrid' pais='España' /> </Text>
      </View>
      <View style={styles.titulo} >
        <Titulo title='Select date' />
      </View>
      <View style={styles.seleccion} >
        <Calendar 
          onDayPress={day => console.log(day) }
          disableArrowLeft = {true}
        />
      </View>
      <View style={styles.btn}>
        <Button disabled={true} mode='outlined' buttonColor='grey' textColor='white' style={styles.btnNext} >
          Next
        </Button>
      </View>
    </View>
  )
}

export default PantallaCalendario;