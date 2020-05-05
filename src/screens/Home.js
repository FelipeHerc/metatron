import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StatusBar from '../components/StatusBar';
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    function levelUp() {
        console.log('aaaa');
        dispatch({ type: 'LVL_UP_VITALITY', HP: 2 })
    }

    console.log(state);
    
    return (
        <View>
            <StatusBar />
            <Text>Hello world seu hp é {state.levelUp.HP}</Text>
            <Button title="LVLUP" onPress={levelUp}/>
        </View>

    )

}