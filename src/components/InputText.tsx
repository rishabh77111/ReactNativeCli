import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
  const [text, setText] = useState('');

  const handleChange = (inputText: string) => {
    setText(inputText);
  };

  return (
    <View>
      <Text style={{ fontSize: 18, padding: 10 }}>
        InputText
      </Text>

      <Text style={{ fontSize: 18, padding: 10 }}>
        InputText: {text}
      </Text>

      <TextInput
        placeholder="Enter text here..."
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          margin: 10,
        }}
        value={text}
        onChangeText={handleChange}
      />

      <Button
        title="Submit"
        onPress={() => console.log('Submitted:', text)}
      />

      <Button
        title="Clear"
        onPress={() => setText('')}
      />
    </View>
  );
};

export default InputText;