import React, { useEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import GameList from "../../components/organisms/GameList";

const Index: React.FC = () => {
  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4">
        <View className="flex flex-row justify-center items-center p-4">
          <Image source={require("../../assets/logo.png")} className="w-40 h-20" resizeMode="contain" />
        </View>
        <GameList />
      </ScrollView>
    </View>
  );
};

export default Index;
