import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-paper'

export const CajaTextoVisible = () => {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputText}
        right={<TextInput.Icon icon="eye" />}
        secureTextEntry={true}
        Mode="Flat"
        selectionColor={'blue'}
        activeUnderlineColor={'blue'}
        textColor={'grey'}
      />
    </View>
  )
}
