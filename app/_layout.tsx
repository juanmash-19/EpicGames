import { View, Text, FlatList } from 'react-native'
import { Link } from 'expo-router'

const data = [
  { id: '1', name: 'Elemento 1' },
  { id: '2', name: 'Elemento 2' },
  { id: '3', name: 'Elemento 3' },
  { id: '4', name: 'Elemento 4' },
]

const Index = () => {
  return (
    <View>
      <Text className='text-4xl text-red-600'>Inicio</Text>
      <Link href='/account/878'>
        <Text className='rounded p-4 bg-slate-200 text-5xl'>
          Perfil
        </Text>
      </Link>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text className='p-2 text-xl border-b border-gray-300'>
            {item.name}
          </Text>
        )}
      />
    </View>
  )
}

export default Index
