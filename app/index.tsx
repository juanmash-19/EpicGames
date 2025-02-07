import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View className='h-full flex flex-col items-center justify-center gap-10'>
      <Link href='/login'>
        <Text className='bg-slate-200 text-3xl p-5 rounded-lg'>
          Autentication
        </Text>
      </Link>
      <Link href='/register'>
        <Text className='rounded p-4 bg-slate-200 text-3xl'>
          Registrarse
        </Text>
      </Link>
      <Link href='/GameStore'>
        <Text className='rounded p-4 bg-slate-200 text-3xl'>
          Games Store
        </Text>
      </Link>
      <Link href='/WishList'>
        <Text className='rounded p-4 bg-slate-200 text-3xl'>
          Lista de Deseos
        </Text>
      </Link>
      <Link href='/Notices'>
        <Text className='rounded p-4 bg-slate-200 text-3xl'>
          Noticias
        </Text>
      </Link>
    </View>
  )
}

export default Index;