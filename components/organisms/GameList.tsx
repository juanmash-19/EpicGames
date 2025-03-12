import React from "react";
import { View } from "react-native";
import GameCard from "../molecules/GameCard";

interface Game {
  image: any;
  title: string;
  description: string;
  price: string;
}

const games: Game[] = [
  {
    image: require("../../assets/prince_of_persia.png"),
    title: "Prince of Persia: The Lost Crown",
    description: "Sumérgete en un emocionante juego de plataformas...",
    price: "COP 199,900",
  },
  {
    image: require("../../assets/lego_fortnite.png"),
    title: "LEGO® Fortnite",
    description: "Explora vastos mundos abiertos...",
    price: "Gratis",
  },
  {
    image: require("../../assets/juego3.png"),
    title: "Honkai: Star Rail",
    description: "Descubre las maravillas de la galaxia...",
    price: "COP 99,900",
  },
  {
    image: require("../../assets/juego4.png"),
    title: "Infinity Nikki",
    description: "Cozy open-world game...",
    price: "COP 300,000",
  },
];

const GameList: React.FC = () => {
  return (
    <View className="gap-6">
      {games.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </View>
  );
};

export default GameList;
