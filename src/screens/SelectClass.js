import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

export default function SelectClass({ navigation }) {
    return (
        <View>
            <Button title="WARRIOR"/>
            <Button title="MERCENARY"/>
            <Button title="PYRO"/>
            <Button title="SORCERER"/>
            <Button title="PRIEST"/>
            <Button title="GAMBLER"/>
            <Button title="TANTO FAZ BIXO" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
};