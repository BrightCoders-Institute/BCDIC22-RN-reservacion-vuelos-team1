import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles'

export const BotonSUG = () => {
  return (
    <TouchableOpacity>
      <View style={styles.Buton}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
          }}
        />

        <Text style={styles.TextoBoton}> Sign Up with Google </Text>
      </View>
    </TouchableOpacity>
  )
}
