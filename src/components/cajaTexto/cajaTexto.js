import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-paper'

export const CajaTexto = () => {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputText}
        Mode="Flat"
        selectionColor={'blue'}
        activeUnderlineColor={'blue'}
      />
    </View>
  )
}
