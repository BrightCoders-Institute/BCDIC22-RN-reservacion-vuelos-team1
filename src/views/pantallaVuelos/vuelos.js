import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import CartaVuelo from '../../components/cartaVuelo/cartaVuelo'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Vuelos() {
  return (
    <View style={{height:'100%'}}>
     <ScrollView>
          <View>
            <View>
              <Text>My flights</Text>
            </View>
            <CartaVuelo/>
            <CartaVuelo/>
            <CartaVuelo/>
            <CartaVuelo/>
            <CartaVuelo/>
            <CartaVuelo/>
          </View>
      </ScrollView>
      <TouchableOpacity style={styles.addLocation}>
          <View style={styles.add}>
            <Ionicons style={styles.addIcon} name='add' size={30} color='#FFFFFF' />
          </View>
      </TouchableOpacity>
   </View>
  )
}