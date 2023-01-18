import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import PantallaLog from './src/views/pantallaLog/pantallaLog'
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <PantallaLog />
    </View>
  )
}
