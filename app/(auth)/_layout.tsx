import { View, Text } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Slot, Stack } from 'expo-router'
import { getToken } from '../../libs/auth/StoreToken'
import { router } from "expo-router";

const AuthLayout = () => {
  useFocusEffect(
    useCallback(() => {
      console.log("Entra al Layout para verificar")
      const evaluateToken = async () => {
        const token = await getToken()
        console.log(token)

        if(token) {
          router.replace('/')
        }
      }
      evaluateToken()
    })
  )
  
  return <Stack />
}

export default AuthLayout