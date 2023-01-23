import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles'

export const BotonSUG = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Buton}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
          }}
        />

        <Text style={styles.TextoBoton}> Sing Up with Google </Text>
        <Text style={styles.TextoBoton}> Sing Up with Google </Text>
      </View>
    </TouchableOpacity>
  )
}
