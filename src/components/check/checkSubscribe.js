import React from 'react'
import { Checkbox } from 'react-native-paper'
import styles from '../cajaTextoVisible/styles'

export const CheckSubscribe = ({checkout}) => {
  return (
    <Checkbox
      status={checkout ? 'checked' : 'unchecked'}
      onPress={() => {
      }}
    />
  )
}
