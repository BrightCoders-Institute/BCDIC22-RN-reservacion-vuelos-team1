import React from 'react'
import { Checkbox } from 'react-native-paper'
import styles from '../cajaTextoVisible/styles'

export const CheckSubscribe = ({ checkout }) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked)
      }}
    />
  )
}
