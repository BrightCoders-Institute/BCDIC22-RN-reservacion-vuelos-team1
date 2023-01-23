import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-paper'

export const CajaTexto = ({onChangeText}) => {
  return (
    <View style={styles.input}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.inputText}
        Mode="Flat"
        selectionColor={'blue'}
        activeUnderlineColor={'blue'}
      />
    </View>
  )
}
