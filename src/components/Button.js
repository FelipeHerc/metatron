import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../styles/Colors";

export default function Button({ text, textColor, width, height, fontSize, backgroundColor, onPress }) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: "Cinzel-Black",
      fontSize: fontSize,
      color: textColor,
    },
    button: {
      justifyContent: "center",
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderRadius: 3,
    },
    touchable: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
    },
  });

  return (
    <View style={styles.button}>
      <TouchableHighlight color={Colors.black} style={styles.touchable} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}
