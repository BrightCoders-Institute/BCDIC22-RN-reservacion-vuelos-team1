import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import PantallaLog from './src/views/pantallaLog/pantallaLog'
import PantallaRegis from './src/views/pantallaRegis/pantallaRegis'
import Constants from 'expo-constants'
import PantallaOrigen from './src/views/pantallaOriDes/pantallaOrigen'
import PantallaOriDes from './src/views/pantallaOriDes/pantallaDestino'
import PantallaCalendario from './src/views/pantallaOriDes/pantallaCalendario'
import PantallaPasajeros from './src/views/pantallaOriDes/pantallaPasajeros'


export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      {/* <PantallaLog /> */}
      {/* <PantallaRegis /> */}
      {/* <PantallaOrigen /> */}
      {/* <PantallaOriDes /> */}
      {/* <PantallaCalendario /> */}
      <PantallaPasajeros />


    </View>
  )
}
