import React from 'react'
import { Checkbox } from 'react-native-paper'
import styles from '../cajaTextoVisible/styles'

export const Check = ({ user, setUser }) => {
  return (
    <Checkbox
      status={user.checkout ? 'checked' : 'unchecked'}
      onPress={() => {
        setUser({
          ...user,
          checkout: !user.checkout
        })
      }}
    />
  )
}
