import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Auth from './components/Auth';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Auth/> 
    </View>
  );
}


