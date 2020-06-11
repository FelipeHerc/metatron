import React, { useState } from "react";
import { Modal, View, Text, TouchableHighlight } from "react-native";
import Styles from "../styles/Styles";
import Colors from "../styles/Colors";
import Sizes from "../styles/Sizes";
import Button from "../components/Button";

function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Styles.darkBackground}>
      <Button text="Level Up" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.darkPurple} onPress={() => navigation.navigate("LevelUp")} />

      <Button text="Reset" textColor={Colors.white} fontSize={Sizes.big} width={150} height={70} backgroundColor={Colors.darkPurple} onPress={() => navigation.navigate("LevelUp")} />

      {/* <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={[Styles.darkBackground, { paddingTop: 22 }]}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <Text>
                joojinho
            </Text>
            
            <TouchableHighlight
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text>Show Modal</Text>
            </TouchableHighlight> */}
    </View>
  );
}

export default Home;
