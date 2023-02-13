import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export const BotonSUP = ({ disabled, onPress, title }) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.Buton : styles.ButonActivate}
      onPress={disabled ? null : onPress}
    >
      <Text style={styles.titulo}>{title}</Text>
    </TouchableOpacity>
  )
}
