import { View, Text } from 'react-native';
import React from 'react';
type ChildProps= {
  count: number;
}

const Child = ({ count }: ChildProps) => {
  return (
    <View>
      <Text style={{ fontSize: 16 }}>Child</Text>
      <Text style={{ fontSize: 24 }}>
        Count: {count}
      </Text>
    </View>
  );
};

export default Child;