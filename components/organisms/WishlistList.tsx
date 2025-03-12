import React from "react";
import { View } from "react-native";
import WishlistItem from "../molecules/WishlistItem";

const WishlistList = ({ games }) => (
  <View>
    {games.map((game, index) => (
      <WishlistItem key={index} game={game} />
    ))}
  </View>
);

export default WishlistList;
