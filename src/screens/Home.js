import React, { useState } from 'react'
import { View, Modal, StyleSheet, TouchableHighlight } from 'react-native'
import Styles from '../styles/Styles'
import Colors from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Button from '../components/Button'
import { FontAwesome } from '@expo/vector-icons'
import Equipament from '../screens/Equipament'

function Home ({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={Styles.darkBackground}>
      <Button text="Level Up" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => navigation.navigate('LevelUp')} />
      <Button text="Reset" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => navigation.navigate('LevelUp')} />
      <Button text="Equip" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.grayPurple} onPress={() => setModalVisible(!modalVisible)} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={Styles.modal}>
          <View style={style.closeButton}>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible)
              }}>
              <FontAwesome name="close" size={26} color={Colors.grayPurple}/>
            </TouchableHighlight>
          </View>
          <View>
              <Equipament/>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const style = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 32
  }

})

export default Home
