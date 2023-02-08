import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  background: {
    backgroundColor: '#F0ECE6',
    width: '100%',
    height: '100%',
  },
  /* Textos de la la primera pantalla*/
  btnAtras:{
    height: '10%',
    // backgroundColor: '#123456',
    padding: 10

  },
  origenDestino: {
    height: '12%',
    // backgroundColor: '#afafaf',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titulo: {
    height: '20%',
    padding: 30,
    // backgroundColor: 'green',
  },
  seleccion: {
    height: '44%',
    padding: 30,
    // backgroundColor: '#afafaf',
  },
  btn: {
    height: '16%',
    padding: 30,
    // backgroundColor: '#234fad',
  },
  btnNext: {
    borderRadius: 8,
  },
  btnBack: {
    marginTop: 40,
    
    borderRadius: 8,
    width: 50,
  },
  
})
