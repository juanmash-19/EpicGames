import { useState } from 'react'

import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native'

const Profile = () => {
    const [changeColor, setChangeColor] = useState(false)

    const handlePress = () => {
        setChangeColor(!changeColor)
    }

  return (
    <View className= 'flex items-center justify-center h-full bg-slate-400'>
    </View>
  )
}
export default Profile