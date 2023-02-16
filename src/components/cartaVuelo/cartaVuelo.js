import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DataTable, Divider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function CartaVuelo({ info }) {
  return (
    <View style={{ margin: 10 }}>
      <View style={styles.container}>
        <Text style={styles.text}>{info.origen}</Text>
        <Ionicons name="airplane-sharp" size={30} color="#6170f7" />
        <Text style={styles.text}>{info.destino}</Text>
      </View>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={{ fontSize: 15 }}>
              {info.origen}
            </DataTable.Title>
            <DataTable.Title textStyle={{ fontSize: 15 }} style={styles.Table}>
              {info.destino}
            </DataTable.Title>
          </DataTable.Header>
          <Divider />
          <DataTable.Header>
            <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 15 }}>
              {info.fecha}
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{ fontWeight: 'bold', fontSize: 15 }}
              style={styles.Table}
            >
              {info.pasajeros} passengers
            </DataTable.Cell>
          </DataTable.Header>
          <Divider style={{ backgroundColor: 'black', height: 1 }} />
        </DataTable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 390,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },

  Table: {
    justifyContent: 'flex-end',
  },
})
