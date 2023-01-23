import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export const BotonSUP = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.Buton} onPress={onPress}>
      <View>
        <Text style={styles.TextoBoton}> Sing Up </Text>
      </View>
    </TouchableOpacity>
  )
}
