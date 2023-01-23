import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-paper'

export const CajaTextoVisible = () => {
  const [pass, setPass] = useState(true)

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputText}
        right={
          <TextInput.Icon
            icon={pass ? 'eye' : 'eye-off'}
            onPress={() => setPass(!pass)}
          />
        }
        secureTextEntry={pass}
        Mode="Flat"
        selectionColor={'blue'}
        activeUnderlineColor={'blue'}
        textColor={'grey'}
      />
    </View>
  )
}
