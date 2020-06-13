import { StyleSheet } from 'react-native'
import Colors from './Colors'

export default StyleSheet.create({
  darkBackground: {
    flex: 1,
    backgroundColor: Colors.purple,
    padding: 4
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.purple,
    padding: 4,
    paddingTop: 38
  },
  colCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
