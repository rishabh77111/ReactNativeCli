import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {
    let name = "Agrahari";
    const getName = () => {
        name = "Rishabh";
        console.warn("Name: ", name);
    }
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Button title="Press Me" onPress={getName} />
        </View>
    )
}

export default OnPress