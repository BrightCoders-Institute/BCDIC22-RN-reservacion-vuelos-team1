import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import CartaVuelo from '../../components/cartaVuelo/cartaVuelo'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import firestore from '@react-native-firebase/firestore'
import { auth } from '../../../firebaseconfig'
import styles from './styles'

export default function Vuelos({ navigation }) {
  const [vuelos, setVuelos] = useState([])

  useEffect(() => {
    const fechtData = async () => {
      const result = await getUserFlights()
      return result
    }
    fechtData()
  }, [])

  const getUserFlights = async () => {
    const subscribe = firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('flights')
      .onSnapshot(async (querySnapshot) => {
        const flights = []
        for (const doc of querySnapshot.docs) {
          flights.push(doc.data())
        }
        setVuelos(flights)
      })
    return () => subscribe()
  }

  return (
    <View style={{ height: '100%' }}>
      <View>
        <View>
          <View>
            <Text style={styles.TextoMyF}>My flights</Text>
          </View>
          <FlatList
            data={vuelos}
            renderItem={({ item }) => <CartaVuelo info={item} />}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.addLocation}
        onPress={() => {
          navigation.navigate('Origen')
        }}
      >
        <View style={styles.add}>
          <Ionicons
            style={styles.addIcon}
            name="add"
            size={30}
            color="#FFFFFF"
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
