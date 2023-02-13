import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  background: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  /* Textos de la la primera pantalla*/
  btnAtras: {
    height: '10%',
    padding: 10,
  },
  origenDestino: {
    height: '12%',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titulo: {
    height: 150,
    padding: 25,
  },
  seleccion: {
    height: 350,
    width: '100%',
    marginTop: 20,
  },
  btnNext: {
    borderRadius: 8,
    marginTop: 20,
  },
  btnBack: {
    marginTop: 40,
    borderRadius: 8,
    width: 50,
  },
  ButonActivate: {
    backgroundColor: 'blue',
  },
  btn: {
    height: '16%',
    padding: 30,
  },

  markedDates: {
    selected: true,
    selectedColor: 'blue',
  },
  theme: {
    textMonthFontSize: 27,
    textDayFontWeight: '600',
    textMonthFontWeight: 'bold',
    arrowColor: '#5C6EF8',
    textDayFontSize: 17,
    textDayHeaderFontSize: 16,
    todayTextColor: '#5C6EF8',
  },
  renderArrow: {
    icon: {
      size: 30,
      color: 'blue',
    },
  },
})
