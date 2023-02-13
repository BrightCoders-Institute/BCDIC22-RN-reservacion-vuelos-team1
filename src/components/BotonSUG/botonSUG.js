import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles'

export const BotonSUG = ({ disabled, onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={disabled ? styles.Buton : styles.ButonActivate}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
          }}
        />
        <Text style={styles.titulo}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
