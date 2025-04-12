import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: 'top'
  },
  container: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'left',
    color: 'black',
    fontSize: 26,
    height: 50,
    marginVertical: 'auto',
    marginHorizontal:5
  },
  picker: {
    height: 70,
    width: 220
  },
  header: {
    fontSize: 30,
    textAlign: 'center'
  },
  show: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 0,
    width: '100%'
  },
})
