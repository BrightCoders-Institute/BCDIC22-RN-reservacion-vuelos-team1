import { View, Text } from 'react-native'
import React from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper';
import CiudadPais from '../../components/ciudadPais/ciudadPais';
import styles from './styles';

const PantallaDestino = () => {
  return (
    <View>
      <View style={styles.btnAtras}>
        <Button style={styles.btnBack} icon="arrow-left" mode="text" >
            
        </Button>
      </View>
      <View style={styles.origenDestino} >
        
        <Text style={styles.origen}><CiudadPais ciudad='Paris' pais='Francia' /> </Text> 
        <Text style={styles.iconoAvion}> <Button icon="airplane" ></Button> </Text> 
        <Text style={styles.destino}> <CiudadPais ciudad='' pais='' /> </Text> 
      </View>
      <View style={styles.titulo} >
        <Titulo title='Where will you be flying to?' />
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

export default PantallaDestino;