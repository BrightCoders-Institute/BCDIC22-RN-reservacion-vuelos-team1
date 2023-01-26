import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'


const Titulo = ({title}) => {
  return (
    <View>
      <Text style={styles.titulo}>{title}</Text>
    </View>
  )
}

export default Titulo