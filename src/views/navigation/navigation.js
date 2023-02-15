import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import PantallaLogin from '../pantallaLogin/pantallaLogin'
import PantallaPasajeros from '../pantallaOriDes/pantallaPasajeros'
import PantallaCalendario from '../pantallaOriDes/pantallaCalendario'
import PantallaDestino from '../pantallaOriDes/pantallaDestino'
import PantallaOrigen from '../pantallaOriDes/pantallaOrigen'
import PantallaRegis from '../pantallaRegis/pantallaRegis'
import Vuelos from '../pantallaVuelos/vuelos'
import PantallaVueloF from '../pantallaOriDes/pantallaVueloF'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registro">
          <Stack.Screen
            name="Registro"
            component={PantallaRegis}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={PantallaLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pasajeros"
            component={PantallaPasajeros}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Calendario"
            component={PantallaCalendario}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Destino"
            component={PantallaDestino}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Origen"
            component={PantallaOrigen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Vuelos"
            component={Vuelos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistroFinalV"
            component={PantallaVueloF}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
