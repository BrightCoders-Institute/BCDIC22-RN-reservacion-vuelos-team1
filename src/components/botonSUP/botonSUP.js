import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export const BotonSUP = ({ disabled, onPress }) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.Buton : styles.ButonActivate}
      onPress={onPress}
    >
      <View>
        <Text style={styles.TextoBoton}> Sign Up </Text>
      </View>
    </TouchableOpacity>
  )
}
