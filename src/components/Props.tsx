import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

const Props = () => {
  const [count, setCount] = useState<number>(0);
  const incrementCount=()=>{
    setCount(count + 1);
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props</Text>

      <Text>Parent Count: {count}</Text>

      <Button
        title="Counter"
        onPress={incrementCount}
      />

      <Child count={count} />
    </View>
  );
};

export default Props;