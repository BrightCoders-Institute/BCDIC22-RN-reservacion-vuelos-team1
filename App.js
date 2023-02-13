import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import PantallaRegis from './src/views/pantallaRegis/pantallaRegis'
import Constants from 'expo-constants'
import { Navigation } from './src/views/navigation/navigation'
import PantallaOrigen from './src/views/pantallaOriDes/pantallaOrigen'
import PantallaOriDes from './src/views/pantallaOriDes/pantallaDestino'
import PantallaCalendario from './src/views/pantallaOriDes/pantallaCalendario'
import PantallaPasajeros from './src/views/pantallaOriDes/pantallaPasajeros'
import Vuelos from './src/views/pantallaVuelos/vuelos'

export default function App() {
  return (
    // <PantallaOrigen />
    // <PantallaOriDes />
    // <PantallaCalendario />
    <Navigation />
    // <Vuelos />
  )
}
