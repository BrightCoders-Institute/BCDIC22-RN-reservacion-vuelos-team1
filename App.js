import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import PantallaRegis from './src/views/pantallaRegis/pantallaRegis'
import Constants from 'expo-constants'
import PantallaOrigen from './src/views/pantallaOriDes/pantallaOrigen'
import PantallaOriDes from './src/views/pantallaOriDes/pantallaDestino'
import PantallaCalendario from './src/views/pantallaOriDes/pantallaCalendario'
import PantallaPasajeros from './src/views/pantallaOriDes/pantallaPasajeros'
import PantallaLogin from './src/views/pantallaLogin/pantallaLogin'

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      {/* <PantallaRegis /> */}
      <PantallaLogin />
      {/* <PantallaOrigen /> */}
      {/* <PantallaOriDes /> */}
      {/*<PantallaCalendario />*/}
      {/*  <PantallaPasajeros />*/}
    </View>
  )
}
