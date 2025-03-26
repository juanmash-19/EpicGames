import React from "react";
import { View, ScrollView, Image, Text } from "react-native";

const Index: React.FC = () => {
  return (
    <View className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        
        <View className="flex flex-row justify-center items-center p-4">
          <Image source={require("../../assets/logo.png")} className="w-40 h-20" resizeMode="contain" />
        </View>

        
        <Text className="text-white text-center text-2xl font-bold mt-4">Bienvenido a Epic Games</Text>
        <Text className="text-white text-center text-2xl font-bold mt-4">Esta es nuestra nueva colaboración:</Text>

        {/* Imagen de colaboración */}
        <View className="flex flex-row justify-center items-center p-4">
          <Image source={require("../../assets/disney.jpg")} className="w-40 h-20" resizeMode="contain" />
        </View>

        {/* Juegos disponibles */}
        <Text className="text-white text-center text-lg mt-2">Estos son algunos de los juegos disponibles:</Text>
        <View className="mt-4 p-4">
          <Text className="text-white text-lg text-center">🎮 Fortnite</Text>
          <Text className="text-white text-lg text-center">🎮 Rocket League</Text>
          <Text className="text-white text-lg text-center">🎮 GTA V</Text>
          <Text className="text-white text-lg text-center">🎮 The Witcher 3</Text>
        </View>

        <View className="flex-grow" />
        <View className="pb-10">
          <Text className="text-white text-center text-sm mt-8">Desarrollado por: Juan Martin Suarez Henao, Fabian Hernandez Castaño y Valentina Alvarez Isaza</Text>
          <Text className="text-white text-center text-sm mt-4 font-semibold">Si quieres conocer más, regístrate.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
