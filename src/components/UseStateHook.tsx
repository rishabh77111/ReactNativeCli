// import { View, Text, Button } from 'react-native'
// import React, { useState } from 'react'

// const UseStateHook = () => {
//     const [name,setName]=useState("Rishabh");

//     const updateName = () => {
//         setName("Agrahari");
//     };

    
//   return (
//     <View>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>UseStateHook</Text>
//       <Text style={{ fontSize: 16 }}>{name}</Text>
//         <Button title="Press Me" onPress={updateName}/>
//     </View>
//   )
// }

// export default UseStateHook


import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
  const [name, setName] = useState("Rishabh");

  const updateName = (newName: string) => {
    setName(newName);
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>UseStateHook</Text>
      <Text style={{ fontSize: 16 }}>{name}</Text>
      <Button title="Agrahari" onPress={() => updateName("Agrahari")} />
      <Button title="Rishabh" onPress={() => updateName("Rishabh")} />
    </View>
  )
}

export default UseStateHook