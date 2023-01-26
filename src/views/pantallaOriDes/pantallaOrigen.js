import { View, Text } from 'react-native'
import React from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper';
import styles from './styles';

const PantallaOrigen = () => {
  return (
    <View>
      <View style={styles.btnAtras}>
        <Button style={styles.btnBack} icon="arrow-left" mode="text" >
            
        </Button>
      </View>
      <View style={styles.origenDestino} >
        {/* <Text>Origen - destino</Text> */}
      </View>
      <View style={styles.titulo} >
        <Titulo title='Where are you now?' />
      </View>
      <View style={styles.seleccion} >
        <TextInput
        text="required"
        mode="flat"
        label=""
        placeholder="Select location"
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

export default PantallaOrigen;