import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    const [name,setName]=useState("Rishabh");
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>UseStateHook</Text>
      <Text style={{ fontSize: 16 }}>{name}</Text>
        <Button title="Press Me" onPress={()=>setName("Agrahari")}/>
    </View>
  )
}

export default UseStateHook