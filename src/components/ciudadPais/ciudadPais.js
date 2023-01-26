import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const CiudadPais = ({ciudad, pais}) => {
  return (
    <View>
      <Text style={styles.ciudad}>{ciudad}</Text>
      <Text style={styles.pais}>{pais}</Text>
    </View>
  )
}

export default CiudadPais