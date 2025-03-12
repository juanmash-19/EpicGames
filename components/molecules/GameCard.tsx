import React from "react";
import { View, Image, Text } from "react-native";

interface GameCardProps {
  image: any;
  title: string;
  description: string;
  price: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, description, price }) => {
  return (
    <View className="bg-gray-900 p-4 rounded-lg">
      <Image source={image} className="w-full h-40 rounded-lg" />
      <Text className="text-white text-xl mt-2">{title}</Text>
      <Text className="text-gray-400">{description}</Text>
      <Text className="text-white font-bold">{price}</Text>
    </View>
  );
};

export default GameCard;
