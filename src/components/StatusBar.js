import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from '../styles/StatusBar';
import colors from '../styles/Colors';
const backgroundColor = colors.purple;

const GeneralStatusBarColor = ({ ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBarColor;