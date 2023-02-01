import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Titulo from '../../components/titulo/titulo'
import { Button, TextInput } from 'react-native-paper';
import CiudadPais from '../../components/ciudadPais/ciudadPais';
import styles from './styles';
import WheelPicker from 'react-native-wheely';

const PantallaPasajeros = ({navigation}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View>
            <View style={styles.btnAtras}>
                <Button style={styles.btnBack} icon="arrow-left" mode="text" onPress={()=> {navigation.navigate('Calendario')}} >

                </Button>
            </View>
            <View style={styles.origenDestino} >

                <Text style={styles.origen}><CiudadPais ciudad='Paris' pais='Francia' /> </Text>
                <Text style={styles.iconoAvion}> <Button icon="airplane" ></Button> </Text>
                <Text style={styles.destino}> <CiudadPais ciudad='Madrid' pais='España' /> </Text>

            </View>
            <View style={styles.titulo} >
                <View>
                    <Text>September 3, 2022</Text>
                </View>
                <Titulo title='How many passengers?' />
            </View>
            <View style={styles.seleccion} >

                <WheelPicker
                    selectedIndex={selectedIndex}
                    options={['1', '2', '3', '4']}
                    onChange={(index) => setSelectedIndex(index)}
                />

            </View>
            <View style={styles.btn}>
                <Button disabled={false} mode='outlined' buttonColor='grey' textColor='white' style={styles.btnNext} >
                    Next
                </Button>
            </View>
        </View>
    )
}

export default PantallaPasajeros;