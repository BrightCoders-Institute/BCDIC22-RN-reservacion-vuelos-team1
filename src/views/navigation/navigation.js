import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import PantallaLogin from '../pantallaLogin/pantallaLogin'
import PantallaPasajeros from '../pantallaOriDes/pantallaPasajeros'
import PantallaCalendario from '../pantallaOriDes/pantallaCalendario'
import PantallaDestino from '../pantallaOriDes/pantallaDestino'
import PantallaOrigen from '../pantallaOriDes/pantallaOrigen'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}