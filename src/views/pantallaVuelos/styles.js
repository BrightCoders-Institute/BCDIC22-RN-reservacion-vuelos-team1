import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    add: {
      backgroundColor: '#5856D6',
      width: 65,
      height: 65,
      borderRadius: 100,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
  
      elevation: 10,
    },
    addLocation: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 15,
    },
    addIcon: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  })